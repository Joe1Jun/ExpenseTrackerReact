// controllers/authController.js

const { User } = require('../models/UsersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Define a POST route handler for user registration
exports.registerUser = async (req, res) => {
  try {
    // Destructure the necessary fields from the request body
    const { name, email, password, passwordConfirm } = req.body;

    // Validate if passwords match
    if (password !== passwordConfirm) {
      return res.status(400).send({ message: 'Passwords do not match' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send({ message: 'User already exists' });
    }

    // Hash the user's password
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save the new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });
    await newUser.save();

    // Respond with success
    console.log("User created ")
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {s
    console.error(error);
    res.status(500).send({ message: 'Internal server error' });
  }
};

exports.loginUser = async (req, res) => {
  try {
      const { email, password } = req.body;

      if (!email || !password) {
          return res.status(400).send({ message: 'Please provide an email and password' });
      }

      const user = await User.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
          return res.status(400).send({ message: 'Email or password incorrect' });
      }

      const token = user.generateAuthToken();
      console.log("Token is " + token);
      console.log("User logged in successfully");

      // Set the cookie
      // Set the cookie with proper options
   await   res.cookie('jwt', token, {
              expires: new Date(Date.now() + parseInt(process.env.JWT_COOKIE_EXPIRES) * 24 * 60 * 60 * 1000), // Convert days to milliseconds
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production', // Set to true if using HTTPS
              sameSite: 'lax', // Adjust based on your needs
              path: '/' // Ensure this is the correct path
});

      console.log("Cookies after login: ", req.cookies);

      res.status(200).json({
          data: token,
          user: {
              name: user.name,
              email: user.email
          },
          message: "Logged in successfully"
      });

  } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Internal server error' });
  }
};


      



exports.logout = async (req, res) => {
  console.log("Cookies before logout:", req.cookies);
  try {
      // Clear the cookie by setting its expiration date to a past date
res.cookie('jwt', '', {
  expires: new Date(Date.now() - 1000), // Set to a past date to delete it
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production', // Match the same setting as when setting the cookie
  sameSite: 'lax', // Match the same setting as when setting the cookie
  path: '/' // Ensure this matches the path used when the cookie was set
});

      console.log("Cookies after logout:", req.cookies);
      console.log("User logged out");
      
      // Send a JSON response indicating success
      res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
      console.error("Internal server error:", error);
      res.status(500).json({ message: 'An error occurred while logging out.' });
  }
 
};

exports.deleteAccount = async (req, res) => {






}

        

        




