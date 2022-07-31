import { Request, Response } from "express";
import { ClassroomDatabase } from "../database/ClassroomDatabase";
import { Classroom } from "../models/Classroom";

export class ClassroomController {
    public async getAllClassrooms(req: Request, res: Response) {
        let errorCode = 400
        try {
            const classroomDatabase = new ClassroomDatabase()
            const result = await classroomDatabase.getAllClassrooms()

            res.status(200).send({ classrooms: result})

        } catch (error) {
            res.status(errorCode).send({message: error.message})
        }
    }

    public async createClassroom(req: Request, res: Response) {
        let errorCode = 400
        try {
            const name = req.body.name
            const module = req.body.module

            if (!name || !module) {
                throw new Error("missing parameters to create a new Classroom");
            }

            if (typeof name !== "string") {
                errorCode = 422
                throw new Error("The name Parameter must to be a string");
            }

            const classroom = new Classroom(
                Date.now().toString(),
                name,
                module
            )

            const classroomDatabase = new ClassroomDatabase()
            await classroomDatabase.createClassroom(classroom)

            res.status(200).send({message: "created classroom", classroom})

        } catch (error) {
            res.status(errorCode).send({message: error.message})
        }
    }

    public async getActiveClassrooms(req: Request, res: Response) {
        let errorCode = 400 
        try {
            
            const classroomDatabase = new ClassroomDatabase()
            const result = await classroomDatabase.getActiveClassrooms()

            res.status(200).send({ activeClassrooms: result})

        } catch (error) {
            res.status(errorCode).send({ message: error.message})
        }
    }

    public async updateModuleClassroom(req: Request, res: Response) {
        let errorCode = 400
        try {
            
            const classroomId = req.params.classroomId
            const module = req.body.module

            if (!module) {
                throw new Error("missing parameter to update a Classroom");
            }

            if (typeof module !== "string") {
                errorCode = 422
                throw new Error("The module Parameter must to be a string");
            }

            const classroomDatabase = new ClassroomDatabase()
            await classroomDatabase.updateModuleClassroom(classroomId, module)

            res.status(200).send({message: "updated module"})

        } catch (error) {
            res.status(errorCode).send({message: error.message})
        }
    }
}