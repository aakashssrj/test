const router = require('express').Router();
const { register, login } = require('../controllers/authController');


// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

module.exports = router;
// This code defines the authentication routes for user registration and login in an Express.js application. It uses the `express.Router` to create a modular set of routes, which are then exported for use in the main application file. The routes are linked to their respective controller functions, which handle the logic for registering and logging in users.