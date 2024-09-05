//imports the IncomeSchema from the models directory
const IncomeSchema = require("../models/IncomeModel")

//function to add new income entry with input sanitization
exports.addIncome = async (req, res) => {
    // Destructure the necessary fields from the request body
    const { title, amount, category, description, date } = req.body;
    
    // Input sanitization
    // Check if title, category, description, and date are all strings
    if (typeof title !== 'string' || typeof category !== 'string' || typeof description !== 'string' || typeof date !== 'string') {
        return res.status(400).json({message: "Invalid input data types"})
    }
    // Check if amount is a number and greater than 0
    if (isNaN(amount) || amount <= 0) {
        return res.status(400).json({message: 'Amount must be a positive number'})
    }
    
    // Create a new instance of the Income model with the sanitized data
    const income = new IncomeSchema({
        title,
        amount,
        category,
        description,
        date,
        user: req.user._id // Set the user_id from the authenticated user
    });

    try {
        // Save the new income entry to the database
        await income.save()
         // Send a success response with a message
        res.status(200).json({message: 'Income Added'})
    } catch (error) {
        // Send a server error response with a message
        res.status(500).json({message: 'Server error'})
    }
    
   // Log the saved income to the console for debugging purposes
    console.log(income);
};
// Function to get incomes
exports.getIncomes = async (req, res) => {
    
    const user_id = req.user.id; // Get the user ID from the token
    try {
    // Set the sort order to -1 (descending)
    // -1 with mongoDB sorts in descending order . 1  sorts in ascending order.    
        const sortOrder = -1;
        // Retrieve all income entries from the database and sort them by the createdAt field in descending order
        // CreatedAt field using the date to sort the results in descending order
        // The sort method uses different sorting algorithms depending on type of data and environment in which it operates.
        // equivalent in mySql SELECT * FROM users ORDER BY createdAt DESC;
        const incomes = await IncomeSchema.find({ user: req.user._id } ).sort({createdAt: sortOrder})
        // Send the retrieved income entries as a JSON response with a 200 status code
        res.status(200).json(incomes)

    } catch (error) {
        // If an error occurs, send a server error response with a 500 status code
        res.status(500).json({message: 'Server error'})
    }
}

// Function to delete an income entry
exports.deleteIncome = async (req, res) => {
    // Extracting the id parameter from the request
    const { id } = req.params;
    const user_id = req.user._id
    try {
        // Find the document by ID and delete it
        const income = await IncomeSchema.findByIdAndDelete({
            _id: id,
            user: userId
        });
        if (!income) {
            console.log(`Income not found with id: ${id} for user: ${userId}`);
            return res.status(404).json({ message: 'Income not found' });
        }

        console.log(`Income deleted successfully: ${id}`);
        res.status(200).json({ message: 'Income deleted successfully' });
    } catch (error) {
        console.error('Error deleting income:', error);
        res.status(500).json({ message: 'Server error' });
    }
}