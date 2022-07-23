import { Request, Response } from "express"
import connection from "../database/connection"

export const searchForPurchasesFromAUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const user_id = req.params.user_id

        const purchases = await connection.raw(`
        SELECT 
        Labe_Users.email,
        Labe_Products.name,
        Labe_Products.price,
        Labe_Purchases.quantity,
        Labe_Purchases.total_price
        FROM Labe_Purchases
        JOIN Labe_Users 
        ON Labe_Purchases.user_id = Labe_Users.id
        JOIN Labe_Products
        ON Labe_Purchases.product_id = Labe_Products.id
        WHERE Labe_Purchases.user_id = "${user_id}";
    `)

    res.status(200).send({Compras: purchases[0]})

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}