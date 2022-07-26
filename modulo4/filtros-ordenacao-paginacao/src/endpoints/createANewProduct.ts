import e, { Request, Response } from "express";
import connection from "../database/connection";
import { Product } from "../models/Product";

export const createANewProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const price = req.body.price

        if (!name || !price) {
            errorCode = 400
            throw new Error("Parametros faltando");
        }

        if (typeof name !== "string") {
            errorCode = 422
            throw new Error("Nome deve ser uma string");
        }

        if (typeof price !== "number" ) {
            errorCode = 422
            throw new Error("Preço deve ser um number");
        }

        const newProduct: Product = {
            id: Date.now().toString(),
            name: name,
            price: price
        }

        await connection.raw(`
        INSERT INTO Products1
        VALUES ("${newProduct.id}", "${newProduct.name}", ${newProduct.price});
        `)

        res.status(200).send({ message: "Produto cadastrado com sucesso", product: newProduct })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}