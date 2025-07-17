
// server/src/app.js
const express = require('express');
const cors = require('cors');

const postRoutes = require('./routes/posts');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/posts', postRoutes);

// Health check route (optional, good for testing)
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

module.exports = app;
