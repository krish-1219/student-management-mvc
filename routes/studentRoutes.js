// Import Express Router
const express = require('express');
const router = express.Router();

// Import Student Controller
// All controller functions handle the business logic for student operations
const studentController = require('../controllers/studentController');

// ============================================
// Student Routes
// ============================================

// @route   POST /api/students
// @desc    Create a new student
// @access  Public
router.post('/', studentController.createStudent);

// @route   GET /api/students
// @desc    Get all students
// @access  Public
router.get('/', studentController.getAllStudents);

// @route   GET /api/students/:id
// @desc    Get a single student by ID
// @access  Public
// @param   id - Student ID (MongoDB ObjectId)
router.get('/:id', studentController.getStudentById);

// @route   PUT /api/students/:id
// @desc    Update a student by ID
// @access  Public
// @param   id - Student ID (MongoDB ObjectId)
router.put('/:id', studentController.updateStudent);

// @route   DELETE /api/students/:id
// @desc    Delete a student by ID
// @access  Public
// @param   id - Student ID (MongoDB ObjectId)
router.delete('/:id', studentController.deleteStudent);

// Export the router to be used in the main application
module.exports = router;
