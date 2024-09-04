// Importing the mongoose library
const mongoose = require('mongoose');


// Defining the schema for an "Expense" document in MongoDB
const ExpenseSchema = new mongoose.Schema({
    // Title of the income    
    title: {
        type: String, // Data type is String
        required: true, // This field is required
        trim: true, // Trim whitespace from both ends of the string
        maxLength: 50 // Maximum length of the string is 50 characters
    },
     // Amount of income
    amount: {
        type: Number, // Data type is Number
        required: true, // This field is required
        maxLength: 20, // This constraint is not necessary for Numbers; 
        trim: true // Trim whitespace
    },
    // Type of income, defaulting to "Income"
    type: {
        type: String, // Data type is String
        default: "Expense", // Default value is "Income"
       
    },

    // Date of the income
    date: {
        type: Date,
        required: true, // This field is required
        trim: true
    },
    category: {
        type: String, // Data type is String
        required: true, // This field is required
        trim: true // Trim whitespace from both ends of the string
    },
     // Description of the income
    description: {
        type: String, // Data type is String
        required: true, // This field is required
        maxLength: 50, // Maximum length of the string is 50 characters
        trim: true // Trim whitespace from both ends of the string
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    
// Adding timestamps to the schema, which will automatically add createdAt and updatedAt fields

}, { timestamps: true })

// Exporting the schema as a model named 'income'
module.exports = mongoose.model('expense', ExpenseSchema)