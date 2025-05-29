// Import necessary modules
require('dotenv').config();  // Load environment variables first

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes.js');
const taskRoutes = require('./routes/taskRoutes.js');
const connectDB = require('./models/db.js');

// Establish a database connection
try {
  connectDB();  // Connect to DB
} catch (err) {
  console.error('Error connecting to database:', err);
}

const corsOptions = {
  origin: '*',  // Replace with your frontend URL in production
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

const app = express();

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send("Message from backend: Hello World!");
});

// Use routes for task and auth
app.use('/tasks', taskRoutes);
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
