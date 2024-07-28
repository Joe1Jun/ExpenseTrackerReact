const IncomeSchema = require ("../models/IncomeModel")








exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body;
    
   
        // Create a new instance of the Income model
        const income = new IncomeSchema({
            title,
            amount,
            category,
            description,
            date
        });

    try {
           //validations
        if (!title  || !category || !description || !date ) {
            return res.status(400).json({message: "All fields are required"})
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({message: 'Amount must be a positive number'})
        }
        await income.save()
        res.status(200).json({message: 'Income Added'})
       } catch (error) {
        
       }
        // Log the saved income and send a response
        console.log(income);
        
};