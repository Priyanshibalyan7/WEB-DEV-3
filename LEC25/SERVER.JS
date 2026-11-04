const express=require('express');
const connectDB = require('./config/db')
const studentRoutes = require('./routes/students.routes') 
const app=express();
const  PORT=3000;

app.use(express.json());
app.use('/', studentRoutes)
connectDB()

app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)});