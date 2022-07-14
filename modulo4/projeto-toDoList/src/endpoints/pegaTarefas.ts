import { Request, Response } from "express";
import connection from "../database/connection";

export const pegaTarefas = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const search = req.query.search as string

        if (search) {
            const [resultado] = await connection.raw(`
            SELECT * FROM Tasks
            WHERE LOWER(title) LIKE "%${search.toLowerCase()}%";
            `)

            return res.status(200).send({message:"Success", Tasks: resultado })
        }

        const [resultado] = await connection.raw(`
        SELECT * FROM Tasks
        `)

        res.status(200).send({message:"Success", Tasks: resultado })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}