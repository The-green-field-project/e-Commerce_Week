const { models } = require("../database"); // Import models from your database setup
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    // Check if email already exists
    const existingUser = await models.User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Hash the password before saving the user
    const salt = await bcrypt.genSalt(10); // Generate salt
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the password

    // Create the user with the hashed password
    const newUser = await models.User.create({
      username,
      email,
      password: hashedPassword, // Save the hashed password
      role,
    });

    // Generate JWT token
    const token = jwt.sign(
      { id: newUser.id, username: newUser.username, role: newUser.role },
      'your_secret_key', // Replace with an environment variable in production
      { expiresIn: '1h' }
    );

    // Return the token upon successful registration
    return res.status(201).json({ token });
  } catch (error) {
    // return res.status(500).json({ message: 'Error registering user', error: error.message });
    throw error

  }
};





const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await models.User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token if login is successful
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      'your_secret_key', // Replace with an environment variable in production
      { expiresIn: '1h' }
    );

    // Return the token and user info
    return res.status(200).json({ token });
  } catch (error) {
    // return res.status(500).json({ message: 'Error logging in', error: error.message });
    throw error
  }
};




module.exports = { register , login};
