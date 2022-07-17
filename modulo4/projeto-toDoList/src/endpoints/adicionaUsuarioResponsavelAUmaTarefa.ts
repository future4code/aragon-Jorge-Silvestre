import { Request, Response } from "express";
import connection from "../database/connection";

export const adicionarUsuarioResponsavelAUmaTarefa = async (req: Request, res: Response) => {
let errorCode = 400
try {
    const taskId = req.params.taskId
    const userId = req.body.userId

    const [checaTaskIdExiste] = await connection.raw(`
    SELECT * FROM Tasks
    WHERE id = ${taskId};
    `)

    if (!checaTaskIdExiste[0]) {
        errorCode = 404
        throw new Error("Erro: id da tarefa não existe");
    }

    const [checaUserIdExiste] = await connection.raw(`
    SELECT * FROM Tasks
    WHERE id = ${userId};
    `)

    if (!checaUserIdExiste[0]) {
        errorCode = 404
        throw new Error("Erro: Id do usuario não existe");
    }

    const adicionaUsuarioResponsavel = await connection.raw(`
    INSERT INTO Responsibles
    Values (${userId}, ${taskId})
    `)

    res.status(200).send({message: "Sucesso! Usuário adicionado a tarefa"})

} catch (error) {
    res.status(errorCode).send({message: error.message})
}
}