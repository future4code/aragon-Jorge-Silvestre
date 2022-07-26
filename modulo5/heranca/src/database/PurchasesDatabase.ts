import { Purchase } from "../models/Purchase";
import { BaseDatabase } from "./BaseDatabase";
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "./tableNames";

export class PurchasesDatabase extends BaseDatabase {
    public static TABLE_PURCHASES = "Labe_Purchases"

    public async getAllPurchases(id: string) {
        const result = await BaseDatabase
            .connection.raw(`
        SELECT
        ${TABLE_USERS}.email,
        ${TABLE_PRODUCTS}.name AS product_name,
        ${TABLE_PRODUCTS}.price AS product_price,
        ${TABLE_PURCHASES}.quantity AS product_quantity,
        ${TABLE_PURCHASES}.total_price
        FROM ${TABLE_PURCHASES}
        JOIN ${TABLE_USERS}
        ON ${TABLE_PURCHASES}.user_id = ${TABLE_USERS}.id
        JOIN ${TABLE_PRODUCTS}
        ON ${TABLE_PURCHASES}.product_id = ${TABLE_PRODUCTS}.id
        WHERE ${TABLE_PURCHASES}.user_id = ${id};
        `)

        return result
    }

    public async createPurchase(purchase: Purchase) {
        await BaseDatabase
            .connection(PurchasesDatabase.TABLE_PURCHASES)
            .insert({
                id: purchase.getId(),
                user_id: purchase.getUserId(),
                product_id: purchase.getProductId(),
                quantity: purchase.getQuantity(),
                total_price: purchase.getTotalPrice()
            })
    }


}