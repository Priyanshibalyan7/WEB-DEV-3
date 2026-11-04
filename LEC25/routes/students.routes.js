const express  =require('express')
const { getStudents, getStudentById, addStudent, updateStudent, deleteStudent } = require('../controller/students.controller')
const { updateMany } = require('../model/students.model')
const router =express.Router()

app.get('/api/students',getStudents)
app.get('/api/students/:id',getStudentById)

app.post('/api/students',addStudent)

app.put('/api/students/:id',updateStudent)

app.delete('/api/students/:id', deleteStudent)

module.exports = router ;