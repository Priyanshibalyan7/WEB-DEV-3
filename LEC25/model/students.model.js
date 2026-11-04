const mongoose=require('mongoose');
const Schema =mongoose.Schema;

const studentSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    semester:{
        type:Number,
        required:true
    },
    marks:{
        type:Number,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    fees:{
        type:Number,
        required:true
    }

})

module.exports =mongoose.model('students',studentSchema);