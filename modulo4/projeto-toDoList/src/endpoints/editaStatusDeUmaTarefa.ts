import { Request, Response } from "express";
import connection from "../database/connection";

export const editaStatusDeUmaTarefa = async (req: Request, res: Response) => {
let errorCode = 400
try {
    const taskId = req.params.taskId
    const status = req.body.status

    if(!status) {
        throw new Error("Parametro status não pode estar vazio");
    }

    if(status !== "DOING" && status !== "TO_DO" && status !== "DONE") {
        throw new Error("Status deve assumir um dos seguintes valores: TO_DO, DOING ou DONE");
    }

    const [checaTaskIdExiste] = await connection.raw(`
    SELECT * FROM Tasks
    WHERE id = ${taskId};
    `)

    if (!checaTaskIdExiste[0]) {
        errorCode = 404
        throw new Error("Erro: id da tarefa não existe");
    }

    const editaStatusTarefa = await connection.raw(`
    Update Tasks
    SET status = "${status}"
    WHERE id = ${taskId};
    `)

    res.status(200).send({message: "Status da tarefa alterado com sucesso"})

} catch (error) {
    res.status(errorCode).send({message: error.message})
}
}