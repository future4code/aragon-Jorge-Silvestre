import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

export const editPerfumePrice = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const idPerfume = req.params.id
        const price = req.body.price

        if (!price) {
            throw new Error("the price parameter cannot be empty or with a value of 0");
        }

        if (typeof price !== "number") {
            errorCode = 422
            throw new Error("The price Parameter must to be a number");
        }

        if (price <= 0) {
            errorCode = 422
            throw new Error("Price parameter must be a number greater than 0");
        }

        const perfumeExists = await connection(TABLE_PERFUMES)
        .select()
        .where("id", "=", `${idPerfume}`)
        
        if (perfumeExists.length === 0) {
            errorCode = 404
            throw new Error("perfume not found");
            
        }

        await connection(TABLE_PERFUMES)
            .update({
                price: price
            })
            .where({
                id: idPerfume
            })

        res.status(200).send({ message: "perfume price edited successfully" })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}