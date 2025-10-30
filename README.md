# Student Management MVC

Node.js MVC Student Management System with MongoDB and Mongoose.

## Overview

This project is a **Student Management System** built using Node.js, Express.js, and MongoDB with Mongoose ODM. It follows the **Model-View-Controller (MVC)** architectural pattern to maintain a clean separation of concerns and improve code maintainability.

## MVC Architecture

The application is structured according to the MVC pattern:

### Model
- **Location**: `/models` directory
- **Purpose**: Defines the data structure and schema for students
- **Implementation**: Uses Mongoose schemas to define student properties:
  - `name` (String): Student's name
  - `age` (Number): Student's age
  - `course` (String): Enrolled course
- **Responsibility**: Handles all database interactions and data validation

### Controller
- **Location**: `/controllers` directory
- **Purpose**: Contains business logic for handling student operations
- **Implementation**: Implements CRUD operations:
  - **Create**: Add new student records
  - **Read**: Retrieve student data (all students or by ID)
  - **Update**: Modify existing student information
  - **Delete**: Remove student records
- **Responsibility**: Processes requests from routes and interacts with models

### Routes
- **Location**: `/routes` directory
- **Purpose**: Defines API endpoints and maps them to controller methods
- **Implementation**: Express Router to handle HTTP requests:
  - `POST /students` - Create a new student
  - `GET /students` - Get all students
  - `GET /students/:id` - Get student by ID
  - `PUT /students/:id` - Update student by ID
  - `DELETE /students/:id` - Delete student by ID
- **Responsibility**: Acts as the interface between client requests and controller logic

## Benefits of MVC Architecture

1. **Separation of Concerns**: Each component has a distinct responsibility
2. **Maintainability**: Easy to update or modify individual components
3. **Scalability**: Simple to add new features without affecting existing code
4. **Testability**: Each layer can be tested independently
5. **Code Reusability**: Models and controllers can be reused across different routes

## Technology Stack

- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling tool

## Project Structure

```
student-management-mvc/
├── models/
│   └── Student.js          # Student schema definition
├── controllers/
│   └── studentController.js # CRUD operation logic
├── routes/
│   └── studentRoutes.js     # API endpoint definitions
├── index.js                 # Application entry point
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure MongoDB connection
4. Start the server: `npm start`
5. Access API endpoints via HTTP client (Postman, Thunder Client, etc.)

## Database Connection

The application connects to MongoDB using Mongoose, ensuring robust data management and validation for student records.
