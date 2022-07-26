import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS, TABLE_PURCHASES } from "../database/tableNames";
import { Purchase } from "../models/Purchase";

export const productPurchaseRecord = async (req: Request, res: Response) => {
let errorCode = 400
try {
    
    const user_id = req.body.user_id
    const product_id = req.body.product_id
    const quantity = req.body.quantity

    if (!user_id || !product_id) {
        throw new Error("Missing parameters to register a new purchase");
    }

    if (!quantity) {
        throw new Error("the quantity parameter cannot be empty or with a value of 0");
    }

    if (typeof user_id !== "string") {
        errorCode = 422
        throw new Error("The user_id Parameter must to be a string");
    }

    if (typeof product_id !== "string") {
        errorCode = 422
        throw new Error("The product_id Parameter must to be a string");
    }

    if (typeof quantity !== "number") {
        errorCode = 422
        throw new Error("The quantity Parameter must to be a number");
    }

    if (quantity <= 0) {
        throw new Error("the quantity must be greater than 0");
    }

    const product = await connection(TABLE_PRODUCTS)
    .select()
    .where("id", "=", `${product_id}`)

    const total_price = product[0].price * quantity

    const purchase :Purchase = {
        id: Date.now().toString(),
        user_id: user_id,
        product_id: product_id,
        quantity: quantity,
        total_price: total_price
    }

    await connection(TABLE_PURCHASES)
    .insert({
        id: purchase.id,
        user_id: purchase.user_id,
        product_id: purchase.product_id,
        quantity: purchase.quantity,
        total_price: purchase.total_price
    })

    res.status(200).send({compra: purchase, message: "purchase registered successfully"})

} catch (error) {
    res.status(errorCode).send({message: error.message})
}
}