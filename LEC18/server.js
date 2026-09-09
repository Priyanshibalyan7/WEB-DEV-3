const express= require("express")
const app=express()
PORT = 4000

app.get('/',(req,res)=>{
    let age=19
    try {
        if(age<=18){
            throw new Error("Age is not valid")
        }else{
            res.send("Welcome to home page")
        }
        
    } catch (error) {
        next(err)
        
    }
})
app.use((res,req)=>{   //-------Invalid route middleware
    res.status(404).send({
        succes:false,
        message:"page not found"
    })

})
app.use((err,res,req,next)=>{  //----error handling moddleware
    res.status(500).send({
        success:false,
        message:err.message
    })

})
app.listen(PORT,()=>{
    console.log("SERVER IS RUNNING ON PORT:",PORT);
    
})




