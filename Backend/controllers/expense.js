//imports the IncomeSchema from the models directory
const ExpenseSchema = require("../models/ExpenseModel")

//function to add new income entry with input sanitization
exports.addExpense = async (req, res) => {
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
    const expense = new ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    });

    try {
        // Save the new income entry to the database
        await expense.save()
         // Send a success response with a message
        res.status(200).json({message: 'Expense Added'})
    } catch (error) {
        // Send a server error response with a message
        res.status(500).json({message: 'Server error'})
    }
    
   // Log the saved income to the console for debugging purposes
    console.log(expense);
};
// Function to get incomes
exports.getExpense = async (req, res) => {
    

    try {
    // Set the sort order to -1 (descending)
    // -1 with mongoDB sorts in descending order . 1  sorts in ascending order.    
        const sortOrder = -1;
        // Retrieve all income entries from the database and sort them by the createdAt field in descending order
        // CreatedAt field using the date to sort the results in descending order
        // The sort method uses different sorting algorithms depending on type of data and environment in which it operates.
        // equivalent in mySql SELECT * FROM users ORDER BY createdAt DESC;
        const incomes = await ExpenseSchema.find().sort({createdAt: sortOrder})
        // Send the retrieved income entries as a JSON response with a 200 status code
        res.status(200).json(incomes)

    } catch (error) {
        // If an error occurs, send a server error response with a 500 status code
        res.status(500).json({message: 'Server error'})
    }
}

// Function to delete an income entry
exports.deleteExpense = async (req, res) => {
    // Extracting the id parameter from the request
    const { id } = req.params;
    try {
        // Find the document by ID and delete it
        const income = await ExpenseSchema.findByIdAndDelete(id);
        // If income is found its deleletd
        if (income) {
            res.status(200).json({ message: `Expense with ID ${id} deleted` });
        } else {
            // If not found message with an error is outputted
            res.status(404).json({ message: `Expense with ID ${id} not found` });
        }
    } catch (error) {
        // Handling any errors that occur during the find and delete operation
        res.status(500).json({ message: 'Error deleting expense record' });
    }
}