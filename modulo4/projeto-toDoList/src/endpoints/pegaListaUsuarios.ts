import { Request, Response } from "express"
import connection from "../database/connection"

export const pegaListaUsuarios = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const search = req.query.search as string

    if (search) {
      const [resultado] = await connection.raw(`
        SELECT * FROM Users
        WHERE LOWER(name) LIKE "%${search.toLowerCase()}%";
        `)

      return res.status(200).send({message:"Success", Users: resultado })
    }

    const [resultado] = await connection.raw(`
      SELECT * FROM Users;
      `)

    res.status(200).send({message:"Success", Users: resultado })

  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}