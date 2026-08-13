import http from 'http';
const PORT=3000;
const user =[
]

const server = http.createServer((res,req)=>{
    if (req.url=='/'){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write("<h1>welcome to home page</h1>")
        res.end()
    }else if(req.url=="/about"){
        res.write("<h1>welcome to about page</h1>")
        res.end()
    }else if (req.method==="POST"&&req.url=="/users"){
        let body="";
        req.on("data",(chunk)=>{
            body+=chunk
        });
        req.oon("end",()=>{
            const user=JSON.parse(body);
            uses.push(user);
            res.writeHead(201,{"Content-Type":"application/json"});
            res.write(JSON.stringify(user))
            res.end()

        })
    }
    else{
        res.write("<h1>404 page not found</h1>")
    }
})
server.listen(PORT,()=>{
    console.log("Server is running on port :",PORT);
    
})