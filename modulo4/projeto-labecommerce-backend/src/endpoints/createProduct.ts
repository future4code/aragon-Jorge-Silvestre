import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";
import { Product } from "../models/Product";

export const createProduct = async (req: Request, res: Response) => {
let errorCode = 400
try {
    
    const name = req.body.name
    const price = req.body.price

    if (!name) {
        throw new Error("The name parameter cannot be empty");
    }

    if (price.length === 0) {
        throw new Error("The price parameter cannot be empty");
    }

    if (typeof name !== "string") {
        errorCode = 422
        throw new Error("The name Parameter must to be a string");
    }

    if (typeof price !== "number") {
        errorCode = 422
        throw new Error("The price Parameter must to be a number");
    }

    if (price <= 0) {
        throw new Error("Price parameter must be a number greater than 0");
    }

    const product: Product = {
        id: Date.now().toString(),
        name: name,
        price: price
    }

    await connection(TABLE_PRODUCTS)
    .insert({
        id: product.id,
        name: product.name,
        price: product.price
    })

    res.status(200).send({product: product, message: "Product created successfully"})

} catch (error) {
    res.status(errorCode).send({message: error.message})
}
}