// Import the Student model
const Student = require('../models/Student');

// ============================================
// CRUD Operations for Student Management
// ============================================

// CREATE - Add a new student
// @desc    Create a new student record
// @route   POST /api/students
exports.createStudent = async (req, res) => {
  try {
    // Extract student data from request body
    const { name, age, course } = req.body;
    
    // Create new student instance
    const student = new Student({
      name,
      age,
      course
    });
    
    // Save student to database
    const savedStudent = await student.save();
    
    // Send success response with created student data
    res.status(201).json({
      success: true,
      message: 'Student created successfully',
      data: savedStudent
    });
  } catch (error) {
    // Handle validation errors or other errors
    res.status(400).json({
      success: false,
      message: 'Error creating student',
      error: error.message
    });
  }
};

// READ - Get all students
// @desc    Retrieve all student records
// @route   GET /api/students
exports.getAllStudents = async (req, res) => {
  try {
    // Fetch all students from database
    const students = await Student.find();
    
    // Send success response with student list
    res.status(200).json({
      success: true,
      count: students.length,
      data: students
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({
      success: false,
      message: 'Error fetching students',
      error: error.message
    });
  }
};

// READ - Get a single student by ID
// @desc    Retrieve a specific student record
// @route   GET /api/students/:id
exports.getStudentById = async (req, res) => {
  try {
    // Get student ID from request parameters
    const student = await Student.findById(req.params.id);
    
    // Check if student exists
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }
    
    // Send success response with student data
    res.status(200).json({
      success: true,
      data: student
    });
  } catch (error) {
    // Handle errors (e.g., invalid ID format)
    res.status(500).json({
      success: false,
      message: 'Error fetching student',
      error: error.message
    });
  }
};

// UPDATE - Update student information
// @desc    Update an existing student record
// @route   PUT /api/students/:id
exports.updateStudent = async (req, res) => {
  try {
    // Find student by ID and update with new data
    // { new: true } returns the updated document
    // { runValidators: true } ensures schema validation on update
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    
    // Check if student exists
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }
    
    // Send success response with updated student data
    res.status(200).json({
      success: true,
      message: 'Student updated successfully',
      data: student
    });
  } catch (error) {
    // Handle validation or other errors
    res.status(400).json({
      success: false,
      message: 'Error updating student',
      error: error.message
    });
  }
};

// DELETE - Remove a student
// @desc    Delete a student record
// @route   DELETE /api/students/:id
exports.deleteStudent = async (req, res) => {
  try {
    // Find and delete student by ID
    const student = await Student.findByIdAndDelete(req.params.id);
    
    // Check if student exists
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }
    
    // Send success response
    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      data: student
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({
      success: false,
      message: 'Error deleting student',
      error: error.message
    });
  }
};
