// Import mongoose library for MongoDB object modeling
const mongoose = require('mongoose');

// Define the Student Schema
// This schema defines the structure of student documents in MongoDB
const studentSchema = new mongoose.Schema({
  // Student name field
  // Required field of type String
  name: {
    type: String,
    required: [true, 'Student name is required'],
    trim: true
  },
  
  // Student age field
  // Required field of type Number with validation
  age: {
    type: Number,
    required: [true, 'Student age is required'],
    min: [1, 'Age must be at least 1'],
    max: [120, 'Age must be less than 120']
  },
  
  // Course field
  // Required field of type String
  course: {
    type: String,
    required: [true, 'Course is required'],
    trim: true
  }
}, {
  // Automatically add createdAt and updatedAt timestamps
  timestamps: true
});

// Create and export the Student model
// This model will be used to interact with the 'students' collection in MongoDB
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
