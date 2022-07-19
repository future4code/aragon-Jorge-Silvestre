import { Request, Response } from "express";
import connection from "../database/connection";

export const deletaTarefa = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const taskId = req.params.taskId

        const [checaTaskIdExiste] = await connection.raw(`
        SELECT * FROM Tasks
        WHERE id = ${taskId};
        `)

        if (!checaTaskIdExiste[0]) {
            errorCode = 404
            throw new Error("Erro: id da tarefa não existe");
        }

        const deletaUsuario = await connection.raw(`
        DELETE FROM Responsibles
        WHERE taskId = "${taskId}";
        `)

        const deletaTarefa = await connection.raw(`
        DELETE FROM Tasks
        WHERE id = "${taskId}";
        `)

        res.status(200).send({ message: "Tarefa excluida com sucesso!" })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}