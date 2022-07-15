import { Request, Response } from "express";
import connection from "../database/connection";

export const editaApelidoDoUsuario = async (req: Request, res: Response) => {
let errorCode = 400
try {
    const userId = req.params.userId
    const nickName = req.body.nickName

    if(!nickName) {
        throw new Error("Parametro nickName não pode estar vazio");
    }

    if(nickName.length < 3) {
        throw new Error("Parametro nickName deve ter ao menos 3 caracteres.");
    }

    const [checaUserIdExiste] = await connection.raw(`
    SELECT * FROM Users
    WHERE id = ${userId};
    `)

    if (!checaUserIdExiste[0]) {
        errorCode = 404
        throw new Error("Erro: id do usuario não existe");
    }

    const editaNickName = await connection.raw(`
    UPDATE Users
    SET nickname = "${nickName}"
    WHERE id = ${userId};
    `)

    res.status(200).send({message:"Nickname alterado com sucesso"})

} catch (error) {
    res.status(errorCode).send({message: error.message})
}
}

