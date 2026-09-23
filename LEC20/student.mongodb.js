use("collegeDB");

// db.createCollection("students")

// db.students.insertOne(
//     {rollno:1,sec:"A",name:"radhde"}
// )
// db.students.insertMany([
//     {rollno:2,sec:"A",name:"madhav"},
//     {rollno:3,sec:"A",name:"krishan"},
//     {rollno:4,sec:"A",name:"shri"}


// ])

// db.students.insert(
//     {rollno:4,name:"ram",sec:"A"}
// )

//----------read operation--------
// db.students.findOne(); // it returns first document from collection
db.students.find();