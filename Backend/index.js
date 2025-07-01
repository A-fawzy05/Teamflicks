require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./Config/db');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./Routes/UserRoutes'));
app.use('/api/movies', require('./Routes/movieRoutes'));
app.use('/api/support', require('./Routes/supportRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));