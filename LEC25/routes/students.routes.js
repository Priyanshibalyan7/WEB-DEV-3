const express  =require('express')
const router =express.Router()
const { getStudents, getStudentById, addStudent, updateStudent, deleteStudent } = require('../controller/students.controller')
router.get('/api/students',getStudents)
router.get('/api/students/:id',getStudentById)

router.post('/api/students',addStudent)

router.put('/api/students/:id',updateStudent)

router.delete('/api/students/:id', deleteStudent)

module.exports = router;