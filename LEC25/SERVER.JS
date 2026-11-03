const express= require('express');
const app= express();
const mongoose= require('mongoose');
const PORT= 3000;

mongoose.connect('mongodb://localhost:27017/collegeDB',)
.then(()=> console.log('MongoDB Connected'))
.catch(err=> console.log(err));
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));