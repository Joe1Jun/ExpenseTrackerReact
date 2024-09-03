// import mongoose
const mongoose = require('mongoose');
// Define the schema for the user document in mongo atlas.
constUserSchema = new mongoose.Schema({
       
    name: {
       
        type: String, // Data type is String
        required: true, // This field is required
        trim: true, // Trim whitespace from both ends of the string
        maxLength: 50 // Maximum length of the string is 50 characters

    },
    email: {
        type: String,
        required: true,
        trim: true,
        maxLength: 150 

    },

    password: {
       
        type: String,
        required: true,
        
        

    }








})
