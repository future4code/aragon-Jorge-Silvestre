import { Request, Response } from "express";
import connection from "../database/connection";

export const deletaTarefa = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const taskId = req.params.taskId

        const deleta = await connection.raw(`
        
        `)

    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}