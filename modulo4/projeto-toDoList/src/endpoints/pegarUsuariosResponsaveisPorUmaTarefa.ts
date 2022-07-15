import { Request, Response } from "express";
import connection from "../database/connection";
import { responsibles, users } from "../database/data";

export const pegarUsuariosResponsaveisPorUmaTarefa = async (req: Request, res: Response) => {
let errorCode = 400
try {
    const id = req.params.taskId

    const [checaIdExiste] = await connection.raw(`
    SELECT * FROM Tasks
    WHERE id = ${id};
    `)

    if (!checaIdExiste[0]) {
        errorCode = 404
        throw new Error("Erro: taskId não existe");
    }

    const [pegarUsuariosResponsaveis] = await connection.raw(`
    SELECT 
    id, nickname
    FROM Users  
    JOIN Responsibles
    ON Responsibles.userId = Users.id
    WHERE Responsibles.taskId = ${id};
    `)
    
    res.status(200).send({message:"Success", Users: pegarUsuariosResponsaveis})

} catch (error) {
    res.status(errorCode).send({message: error.message})
}
}




