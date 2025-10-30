// ============================================
// Student Management System - Main Entry Point
// ============================================
// This file sets up the Express server and connects to MongoDB
// Following MVC architecture pattern

// Import required dependencies
const express = require('express');
const mongoose = require('mongoose');

// Import student routes
const studentRoutes = require('./routes/studentRoutes');

// Initialize Express application
const app = express();

// ============================================
// Configuration
// ============================================

// Set the port from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// MongoDB connection string
// Replace with your actual MongoDB URI
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/studentdb';

// ============================================
// Middleware Configuration
// ============================================

// Parse incoming JSON requests
// This allows us to access req.body in our controllers
app.use(express.json());

// Parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Log incoming requests (simple logging middleware)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ============================================
// Database Connection
// ============================================

// Connect to MongoDB using Mongoose
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('✅ Successfully connected to MongoDB');
    console.log(`📊 Database: ${mongoose.connection.name}`);
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1); // Exit process if database connection fails
  });

// ============================================
// Routes Configuration
// ============================================

// Root route - API information
app.get('/', (req, res) => {
  res.json({
    message: 'Student Management System API',
    version: '1.0.0',
    endpoints: {
      students: '/api/students',
      createStudent: 'POST /api/students',
      getAllStudents: 'GET /api/students',
      getStudent: 'GET /api/students/:id',
      updateStudent: 'PUT /api/students/:id',
      deleteStudent: 'DELETE /api/students/:id'
    }
  });
});

// Mount student routes at /api/students
// All routes defined in studentRoutes will be prefixed with /api/students
app.use('/api/students', studentRoutes);

// ============================================
// Error Handling Middleware
// ============================================

// Handle 404 - Route not found
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

// ============================================
// Start Server
// ============================================

// Start the Express server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📍 API available at http://localhost:${PORT}`);
  console.log(`📚 Student API: http://localhost:${PORT}/api/students`);
});

// Export the app for testing purposes
module.exports = app;
