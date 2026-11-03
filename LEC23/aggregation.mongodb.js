use("collegeDB")

// db.students2.insertOne([
//     {
//         name:"Ayushi",sem:2,rollno:17,sec:"A",course:"b.tech",
//     },
//     {
//         name:"Riya",sem:3,rollno:18,sec:"A",course:"b.tech",
//     },
//     {
//         name:"Rohit",sem:3,rollno:19,sec:"A",course:"b.tech",
//     }
// ])
db.students2.aggregate([
    {
        $match: {course:"b.tech",sec:"A"} // gives that element with full data
    },
    {
        $project: {
          name:1,sec:1,rollno:1,course:1,_id:0 //projcts onlu req data 
        }
    },{
        $group: {
          _id: "$sem",
          maxMarks: {$sum: "$marks"},
          avgMarks:{$avg:"$marks"},
          minMarks:{$min:"$marks"}
        }
    },{
        $sort:{_id:1} // 1-->increase  , -1 --> decrease
    }
])