import { IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Arq_Users"

    public createUser = async (user: User) => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
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

    public findById = async (id: string) => {
        const result: IUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select()
        .where({ id })

        return result[0]
    }

    public getAllUsers = async (
        search: string,
        sort: string,
        limit: number,
        offset: number
    ) => {
        const usersDB: IUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select()
        .where(`name`, "LIKE", `%${search}%`)
        .orderBy(`name`, sort)
        .limit(limit)
        .offset(offset)

        return usersDB
    }

    public deleteUserById = async (id: string) => {
        await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .delete()
        .where({ id })
    }

}