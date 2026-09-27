import express from 'express';
import logger from './middleware/logger.js';
import route from './routes/studentRoutes.js';
let port = 5000
const app = express()
//------MIDDLEWARE-------
app.use(express.json()) // to parse the data from client to server
app.use(logger)

//---Hone page----
app.get('/',(req,res)=>{
    res.status(200).json({
        success:true,
        Message:"Student Management System REST APIs"
    })
})


app.use("/students",route) // Use the routes and build the connection


app.use((req,res)=>{
    res.status(404).json({
        success:false,
        Message:"Route not found"
    })
})


app.listen(port,()=>{
    console.log("server running on port : " ,port);
    
})