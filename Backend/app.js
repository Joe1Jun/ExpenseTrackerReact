// Import the required modules
// Import Express framework
const express = require('express')
// Import CORS middleware
const cors = require('cors')
// Import the database connection function from db module
const cookieParser = require('cookie-parser');
const { db } = require('./db/db')
// Import readdirSync function from fs module to read the routes directory
const { readdirSync } = require('fs')
// Create an instance of Express
const app = express()

// Load environment variables from a .env file into process.env
require('dotenv').config()
// Get the port number from environment variables
const PORT = process.env.PORT

//middlewares
// Middleware to parse JSON bodies
app.use(express.json())
// Middleware to enable CORS (Cross-Origin Resource Sharing)
// Cors allows connection between the frontend and backend
// Its necessary when the front and back end are hosted on seperate domains.
app.use(cors({
    // This is the front end url origin 
    //This specifies that only requests from this origin are allowed. 
    // Will be replaced with the front end production URL when deployed
    origin: process.env.FRONTEND_URL,
    //Allows cookies to be sent 
    // These cookies are sent taken from the front end browser and can be accessed in the verifyToken
    // middleware which uses req.cookie to access the cookies and decodes the user id to be used by the methods.
    // Without the cookie these methods would not be user specific.
    credentials: true
}))
//cookie-parser is a middleware that parses cookies attached to the client request object. 
//It populates req.cookies with an object keyed by cookie names.
//This makes it easy to access cookie values in the route handlers and middleware.
// Without cookie-parser, req.cookies would not be populated with cookies from the client request. 
// This middleware relies on cookie - parser to extract and decode the JWT token.
app.use(cookieParser());

//routes
// Dynamically read all files in the 'routes' directory and use them as routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

// Function to start the server
const server = () => {
    // Initialize the database connection
    db()
    // Start the server and listen on the specified port
    app.listen(PORT, () => {
        // Log a message when the server is running
        console.log("listening on port:" , PORT)
    })

}
// Call the server function to start the server
server()