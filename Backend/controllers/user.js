/// Import the necessary modules

const { User } = require ('../models/user')
const bcrypt = require('bcrypt'); // Import bcrypt for hashing passwords
const { verifyToken } = require('../middleware/verifyToken'); // Import validation functions from a utility file

// Define a POST route handler for user registration
exports.register('/register', async (req, res) => {
    try {
        // Destructuring the 'name', 'email', 'password', and 'passwordConfirm' fields from the request body ie. the registration.ejs page
        const { name, email, password } = req.body;
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(409).send({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new User({ ...req.body, password: hashPassword }).save();
        res.status(201).send({ message: "User created successfully" });
    } catch (error) {
        console.log(error); // Log the error to the console
        res.status(500).send({ message: "Internal server error" });
    }
});
        //Find user

        

        const user = new UserSchema({
            name,
            email,
            password
        });
    } catch (error) {
        
    }
   
});

exports.login('/login', async(req, res) => {
    


})

exports.deleteAccount('/delete', async(req, res) => {
     


})


// Export the router for use in other parts of the application
module.exports = router;