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
        throw new Error("Erro: taskId não existe");
    }

    const [usuariosResponsaveis] = await connection.raw(`
    SELECT 
    id, nickname
    FROM Users  
    JOIN Responsibles
    ON Responsibles.userId = Users.id
    WHERE Responsibles.taskId = ${id};
    `)
    
    res.status(200).send({message:"Success", Users: usuariosResponsaveis})

} catch (error) {
    res.status(errorCode).send({message: error.message})
}
}




// codigo lucas
// (`
//   SELECT
//   Responsibles.taskId,
//   Responsibles.userId
//   FROM Responsibles
//   JOIN Tasks
//   ON Tasks.creatorUserId = Responsibles.userId
//   WHERE Responsibles.taskId = ${taskId};
//   `)