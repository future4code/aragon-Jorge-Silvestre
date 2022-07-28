import { Request, Response } from "express";
import { ClassroomDatabase } from "../database/ClassroomDatabase";
import { Classroom } from "../models/Classroom";


export class CreateClassroomController {
    public async createClassroomController(req: Request, res: Response) {
        let errorCode = 400
        try {
            const name = req.body.name
            const module = req.body.module

            const classroom = new Classroom(
                Date.now().toString(),
                name,
                module
            )

            const classroomDatabase = new ClassroomDatabase()
            await classroomDatabase.createClassrooms(classroom)

            res.status(200).send({message: "created classroom", classroom})

        } catch (error) {
            res.status(errorCode).send({message: error.message})
        }
    }
}