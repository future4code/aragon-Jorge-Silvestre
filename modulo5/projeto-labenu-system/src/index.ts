import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { PingController } from './endpoints/PingController'
import { ClassroomController } from './endpoints/ClassroomController'
import { CreateClassroomController } from './endpoints/CreateClassroomController'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})


const pingController = new PingController()
const classroomController = new ClassroomController()
const createClassroomController = new CreateClassroomController()

app.get("/ping", pingController.ping)
app.get("/classrooms", classroomController.getAllClassrooms)
app.post("/classrooms", createClassroomController.createClassroomController)