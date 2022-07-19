import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";
import { Perfume } from "../models/Perfume";

export const createPerfume = async (req:Request, res: Response) => {
let errorCode = 400
try {
    const {name, brand, price, ml} = req.body

    if (!name || !brand || !ml) {
        throw new Error("missing parameters to create a new perfume");
    }

    if (!price) {
        throw new Error("the price parameter cannot be empty or with a value of 0");
    }

    if (typeof name !== "string") {
        errorCode = 422
        throw new Error("The name Parameter must to be a string");
    }

    if (typeof brand !== "string") {
        errorCode = 422
        throw new Error("The brand Parameter must to be a string");
    }

    if (typeof price !== "number") {
        errorCode = 422
        throw new Error("The price Parameter must to be a number");
    }

    if (typeof ml !== "number") {
        errorCode = 422
        throw new Error("The ml Parameter must to be a number");
    }

    if (price <= 0) {
        errorCode = 422
        throw new Error("Price parameter must be a number greater than 0");
    }

    const newPerfume:Perfume = {
        id: Date.now().toString(),
        name,
        brand,
        price,
        ml
    } 

    await connection(TABLE_PERFUMES)
    .insert({
        id: newPerfume.id,
        name: newPerfume.name,
        brand: newPerfume.brand,
        price: newPerfume.price,
        ml: newPerfume.ml
    })

    res.status(200).send({Perfume: newPerfume, message: "Perfume criado com sucesso"})

} catch (error) {
    res.status(errorCode).send({message: error.message})
}
} 