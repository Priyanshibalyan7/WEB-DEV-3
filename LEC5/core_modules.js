import path from 'path';
import fs from 'fs';
import cypto from 'crypto';
import dns from 'dns';


// const filepath = path.resolve("LEC5")7
// const filepath = path.join("LEC5","core_modules.js") // join the paths 
// const filepath1 = path.join(__dirname,"core_modules.js") // to know directory name
// console.log(filepath1);


// const filepath= "WEB DEV 3/LEC5/core_modules.js"
// console.log(path.basename(filepath));
// console.log(path.dirname(filepath));
// console.log(path.extname(filepath));

//----------------------------read-file-------------------
// const data = fs.readFileSync('./sample.txt','utf-8') // synchronous
// const data = fs.readFile('./sample.txt',"utf-8",(err,data)=>{  // asynchronous
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
        
//     }
// })

//-------------------------used to create file-----------------------
// fs .writeFileSync("./sample.txt","bss badia aap btao");
// fs.writeFile('./sample1.txt','Humare yha aisa hei hota h !!!',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file created");
//     }
// })

//-------------------- used to add to file---------------------
// fs.appendFile('./sample1.txt','Humare yha ,\n aisa hei hota h !!!',(err)=>{ 
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file modified");
//     }
// })

//--------------------use to delete file----------------- 
// fs.unlink('./sample1.txt','Humare yha ,\n aisa hei hota h !!!',(err)=>{  // use to delete file 
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file deleted");
//     }
// })

// const pass = "Alex@123"
// const hash = cypto.createHash("sha2256").update(password).digest("hex");
// console.log(hash);
// const salt = cypto.randomBytes


//-------------------to know anout ip address----------------
// dns.lookup('www.google.com',(err,address,family)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log(address);
//         console.log(family);   
//     }
// })

//-----------------to know anout domain----------------
dns.reverse('8.8.8.8',(err,hostnames)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log(hostnames);
          
    }
})


