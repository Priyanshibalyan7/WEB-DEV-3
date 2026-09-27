import express from "express";
import students from "../data/students.js";

const route = express.Router()
route.get('/', (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "data fetched successfully",
            data: students

        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "failed to fetch data : ", error
        })
    }

})
route.get('/:id', (req, res) => {
    try {

        const id = Number(req.params.id)
        const student = students.find((student) => student.id === id)
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found.. :("
            })
        }
        console.log("hello");
        res.status(200).json({
            success: true,
            data: student
        })
    } catch (error) {
        res.status(400).json(({
            success: false,
            message: "Error:", error
        }))

    }
})
route.post('/', (req, res) => {
    try {
        const { name, email, Gender, id } = req.body

        if (!name || !email || !Gender || !id) {
            res.status(400).json({
                success: false,
                message: " data is incomplete"
            })
        }
        students.push({ name, email, Gender, id })

        res.status(201).json({
            success: true,
            message: "data added successfully",
            data: students
        })

    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Error:", error
        })

    }
})
route.put('/:id', (req, res) => {

    try {

        let { studentID } = Number(req.params.id)
        if (!studentID) {
            return res.status(404).json({
                succcess: false,
                message: "student ID not found for update"
            })
        }
        let student =  students.findById(studentID)
        if (!student) {
            return res.status(404).json({
                message: "data not found",
                success: false
            })

        }
        let { name, email, Gender, id } = req.body
        const updateStudent = students.findByIdAndUpdate(studentID, { name, email, Gender, id }, { new: true })
        res.status(200).json({
            succcess: true,
            message: "data updated successfully",
            data: updateStudent
        })


    } catch (error) {
        res.status(500).json({
            message: 'failed to updated data internal server error',
            success: false
        })

    }
})
route.delete('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const studentIndex = students.findIndex(student => student.id === id)
        if (studentIndex === -1) {
            res.status(404).json({
                success: false,
                message: "Student not Found .... :("
            })
        }
        const deleteStudent = students.splice(studentIndex, 1);
        res.status(200).json({
            success: true,
            message: "Student deleted successfully",
            data: deleteStudent[0]
        })
    } catch (error) {
        res.status(500).json({
            success: "False",
            message: "Error:", error
        })
    }
}
)

export default route;