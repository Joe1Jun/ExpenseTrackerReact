// import mongoose
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken'); // Import jsonwebtoken for generating authentication token
// Define the schema for the user document in mongo atlas.
const UserSchema = new mongoose.Schema({
       
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

}, { timestamps: true })

// Define a method on the schema to generate an authentication token
UserSchema.methods.generateAuthToken = function () {
    // Create a JWT token with user id and secret key from environment variables
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN // Set token expiration from environment variable
    });
    return token;
};


const User = mongoose.model('User', UserSchema)

module.exports = { User };


