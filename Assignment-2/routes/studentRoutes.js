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

        const id = parseInt(req.params.id)
        const student = students.find(student => student.id === id)
        if (!student) {
            return res.status.json({
                success: false,
                message: "Student not found.. :("
            })
        }
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
        const { name, email, Gender } = req.body

        if (!name || !email || !Gender) {
            res.status(400).json({
                success: false,
                message: " data is incomplete"
            })
        }
        students.push({ name, email, Gender })

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
        const { name, Gender, email } = req.body

        if (!name || !Gender || !email) {
            res.status(400).json({
                success: false,
                message: " Gender , Name,E-mail needed"
            })
        }
        let Student = students.find((value) => value.Gender === Gender)

        if (!Student) {
            res.status(404).json({
                success: false,
                message: "Student doesn't exists"
            })
        }

        Student.name = name;
        res.status(200).json({
            success: true,
            message: "Student updated",
            data: students
        })

    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Error:", error
        })
    }
})
route.delete('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const studentIndex = students.findIndex(student => student.id === id)
        if (studentIndex=== -1) {
            res.status(404).json({
                success: false,
                message: "Student not Found .... :("
            })
        }
        students.splice(studentIndex, 1);
        res.status(200).json({
            success: true,
            message: "Student deleted successfully",
            data: students
        })
    } catch (error) {
        res.status(500).json({
            success:"False",
            message:"Error:",error
        })
    }
}
)

export default route;