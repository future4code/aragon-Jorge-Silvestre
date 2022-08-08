import { Request, Response } from "express";
import { StudentDatabase } from "../database/StudentDatabase";
import { IStudentDB } from "../models/Student";

export class StudentController {
    public async createStudent(req: Request, res: Response) {
        let errorCode = 400
        try {

            const name = req.body.name
            const email = req.body.email
            const birthdate = req.body.birthdate
            const classroom_id = req.body.classroomId

            if (!name || !email || !birthdate || !classroom_id) {
                throw new Error("missing parameters to create a new perfume");
            }

            if (typeof name !== "string") {
                errorCode = 422
                throw new Error("The name Parameter must to be a string");
            }

            if (typeof email !== "string") {
                errorCode = 422
                throw new Error("The email Parameter must to be a string");
            }

            if (typeof classroom_id !== "string") {
                errorCode = 422
                throw new Error("The classroom_id Parameter must to be a string");
            }

            const student: IStudentDB = {
                id: Date.now().toString(),
                name,
                email,
                birthdate,
                classroom_id
            }

            const studentDatabase = new StudentDatabase()
            await studentDatabase.createStudent(student)

            res.status(200).send({ message: "created student", student })

        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async getStudentByName(req: Request, res: Response) {
        let errorCode = 400
        try {
            const name = req.query.q as string

            if (name) {
                const studentDatabase = new StudentDatabase()
                const result = await studentDatabase.getStudentByName(name)
                return res.status(200).send({message: result})
            }

            const studentDatabase = new StudentDatabase()
            const result = await studentDatabase.getAllStudents()
            

            res.status(200).send({message: result})

        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async editClassStudent(req: Request, res: Response) {
        let errorCode = 400
        try {
            const studentId = req.params.id
            const newClassroom = req.body.newClassroom

            if (!newClassroom) {
                throw new Error("missing parameters to edit classroom student");
            }

            if (typeof newClassroom !== "string") {
                throw new Error("The newClasrrom Parameter must to be a string");
            }
            
            const studentDatabase = new StudentDatabase()
            await studentDatabase.editClassStudent(studentId, newClassroom)

            res.status(200).send({message: "student class successfully edited"})
        } catch (error) {
            res.status(errorCode).send({message: error.message})
        }
    }

    public async getAllStudentsBelongingToAClassroom(req: Request, res: Response) {
        let errorCode = 400
        try {
           const classroomId = req.params.id

           const studentDatabase = new StudentDatabase()
           const result = await studentDatabase.getAllStudentsBelongingToAClassroom(classroomId)

           res.status(200).send({Students: result})


        } catch (error) {
            res.status(errorCode).send({message: error.message})
        }
    }
}