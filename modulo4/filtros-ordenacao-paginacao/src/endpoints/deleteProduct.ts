import { Request, Response } from "express";
import connection from "../database/connection";

export const deleteProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const idProduct = req.params.idProduct

        const [Products] = await connection.raw(`
        SELECT * FROM Products1
        WHERE id = ${idProduct}
        `)

        const Product = Products[0]

        if (!Product) {
            errorCode = 404
            throw new Error("Id do produto não existe");
        }

        await connection.raw(`
        DELETE FROM Products1
        WHERE id = "${idProduct}";
        `)

        res.status(200).send({message: "Produto deletado com sucesso"})
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}
