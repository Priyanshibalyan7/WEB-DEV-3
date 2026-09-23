use("collegeDB");

// db.createCollection("students")
// db.createCollection("students2")

// db.students.insertOne(
//     {rollno:1,sec:"A",name:"radhde"}
// )
// db.students.insertMany([
//     {rollno:2,sec:"A",name:"madhav"},
//     {rollno:3,sec:"A",name:"krishan"},
//     {rollno:4,sec:"A",name:"shri"}
// db.students2.insert([
//     {name:"ram",sem:2,rollno:4,sec:"A"},
//     {name:"shyam",sem:2,rollno:5,sec:"A"},
    // {name:"mohan",sem:3,rollno:6,sec:"A",course:"b.tech"},
//     {name:"sohan",sem:2,rollno:7,sec:"A"},
// ])

// ])

// db.students.insert(
//     {rollno:4,name:"ram",sec:"A"}
// )

//----------read operation--------
// db.students.findOne(); // it returns first document from collection
// db.students.find();

// ---------projection--------give only required data 
// db.students2.find({},{
//     name:1,sem:1,_id:0
// })
// db.students2.find().sort({age:-1}) // gives in decending order
// db.students2.find().limit(4) // gives only required no of items

// db.students2.find().skip(3).limit(1) // skip use to skip these parts amd limit to give particular number of data
db.students2.find({sem:3,course:"b.tech"}).sort({rollno:-1}).limit(2) // gives only required no of items