import { IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Auth_Users"

    public createUser = async (user: User) => {
        const userDB: IUserDB = {
            id: user.getId(),
            nickname: user.getNickname(),
            email: user.getEmail(),
            password: user.getPassword()
        }

        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(userDB)
    }

    public findByEmail = async (email: string) => {
        const result: IUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select()
        .where({ email })

        return result[0]
    }

    public getAllUsers = async () => {
        const result: IUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select()

        return result
    }

    public updateUserData = async (userId: string, newNickname: string, newEmail: string, newPassword: string) => {
        await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .update({nickname: newNickname, email: newEmail, password: newPassword})
        .where("id", "=", `${userId}`)
    }

    public deleteUsers = async (userId: string) => {
        await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .delete()
        .where({id: userId})
    }
}