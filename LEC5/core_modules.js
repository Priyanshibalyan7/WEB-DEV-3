import path from 'path';
import fs from 'fs';

// const filepath = path.resolve("LEC5")7
// const filepath = path.join("LEC5","core_modules.js") // join the paths 
// const filepath1 = path.join(__dirname,"core_modules.js") // to know directory name
// console.log(filepath1);


// const filepath= "WEB DEV 3/LEC5/core_modules.js"
// console.log(path.basename(filepath));
// console.log(path.dirname(filepath));
// console.log(path.extname(filepath));

// const data = fs.readFileSync('./sample.txt','utf-8') // synchronous
const data = fs.readFile('./sample.txt',"utf-8",(err,data)=>{  // asynchronous
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
        
    }
})

