import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_USERS } from "../database/tableNames";
import { User } from "../models/User";

export const createUser = async (req: Request, res: Response) => {
let errorCode = 400
try {

    const email = req.body.email
    const password = req.body.password

    if (!email) {
        throw new Error("The email parameter cannot be empty");
    }

    if (!password) {
        throw new Error("The password parameter cannot be empty");
    }

    if (typeof email !== "string") {
        errorCode = 422
        throw new Error("The email Parameter must to be a string");
    }

    if (typeof password !== "string") {
        errorCode = 422
        throw new Error("The password Parameter must to be a string");
    }

    const user: User = {
        id: Date.now().toString(),
        email: email,
        password: password
    }

    await connection(TABLE_USERS)
    .insert({
        id: user.id,
        email: user.email,
        password: user.password
    })

    res.status(200).send({user: user, message: "user created successfully"})
} catch (error) {
    res.status(errorCode).send({message: error.message})
}
}