const logger=(req,res,next)=>{
    console.log("Request URL:", req.url,
        "Request Method:", req.method,
        "Time:",new Date().toLocaleString());
        next();   
}
export default logger