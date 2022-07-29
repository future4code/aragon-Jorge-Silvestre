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
}