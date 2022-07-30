import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { PingController } from './endpoints/PingController'
import { ClassroomController } from './endpoints/ClassroomController'
import { StudentController } from './endpoints/StudentController'


dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})


const pingController = new PingController()
const classroomController = new ClassroomController()
const studentController = new StudentController()

app.get("/ping", pingController.ping)
app.get("/classrooms", classroomController.getAllClassrooms)
app.post("/classrooms", classroomController.createClassroom)
app.get("/active/classrooms", classroomController.getActiveClassrooms)
app.put("/classrooms/:classroomId", classroomController.updateModuleClassroom)
app.post("/student", studentController.createStudent)
app.get("/student", studentController.getStudentByName)
app.put("/student/:id", studentController.editClassStudent)