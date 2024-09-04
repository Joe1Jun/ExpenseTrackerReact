const jwt = require('jsonwebtoken'); // Import the jsonwebtoken module for working with JWTs
const { User } = require('../models/UsersModel');

// Middleware function to verify JWT and authenticate the user
const verifyToken = async (req, res, next) => {
    try {
        // Extract the JWT token from cookies
        const token = req.cookies.jwt;

        // If no token is found, return a 401 Unauthorized response
        if (!token) {
            return res.status(401).json({ message: 'Authentication required.' });
        }

        // Verify the token using the secret key defined in environment variables
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Query the database to find the user by the decoded ID from the token
        const user = await User.findById(decoded.id);

        // If no user is found, return a 401 Unauthorized response
        if (!user) {
            return res.status(401).json({ message: 'User not found.' });
        }

        // Attach the user information to the request object for use in subsequent middleware/routes
        req.user = user;

        // Call the next middleware or route handler
        next();
    } catch (err) {
        // If there's any error (e.g., token verification failed, database error), return a 401 Unauthorized response
        console.error('Authentication error:', err);
        return res.status(401).json({ message: 'Invalid token.' });
    }
};

// Export the middleware function for use in other parts of the application
module.exports = verifyToken;
