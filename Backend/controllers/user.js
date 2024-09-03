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
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal server error' });
  }
};

exports.loginUser = async (req, res) => {
    try {
        
        const { email, password } = req.body
    
        // validate input
        if (!email || !password) {
            return res.status(400).send({ message: 'Please provide an email or password' });
        }
        //check if user exists
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))){
            return res.status(400).send({message: 'Email or password incorrect'})
        }
        //Define token and call method from UsersModel.
        const token = user.generateAuthToken();
        console.log("Token is " +  token );
        res.cookie('jwt', token, {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
            httpOnly : true
        })
    
        res.status(200).send({ message: 'Logged in Successfully' })
        

    } catch(error) {
        
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
   



}

        

        




