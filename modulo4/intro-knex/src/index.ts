import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";
import { Users } from "./endpoints/types";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

// Exercicio 1
app.get("/users", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const search = req.query.search as string

    if (search) {
      const [resultado] = await connection.raw(`
    SELECT * FROM Funcionarios
    WHERE LOWER(name) LIKE "%${search.toLowerCase()}%";
    `)

      return res.status(200).send({ Funcionarios: resultado })
    }

    const [resultado] = await connection.raw(`
  SELECT * FROM Funcionarios;
  `)

    res.status(200).send({ Funcionarios: resultado })

  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message })
  }
})

// Exercicio 2
app.post("/users", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { name, email } = req.body

    if (!name || !email) {
      errorCode = 400
      throw new Error("Parâmetros faltando");
    }

    if (typeof name !== "string") {
      errorCode = 422
      throw new Error("Name deve ser uma string");
    }

    if (typeof email !== "string") {
      errorCode = 422
      throw new Error("Email deve ser uma string");
    }

    // const validaEmail = email.includes("@")

    // if (!validaEmail) {
    //   throw new Error("Email inválido");
    // }
    if (!email.includes("@")) {
      throw new Error("Erro: email inválido");
    }

    if (name.length < 4) {
      throw new Error("O nome do usuário deve ter ao menos 4 caracteres");

    }

    const [checaEmail] = await connection.raw(`
    SELECT * FROM Funcionarios
    WHERE email = "${email}"
    `)

    if (checaEmail[0]) {
      throw new Error("Erro:Email já cadastrado");
    }

    const newUser: Users = {
      id: Date.now(),
      name: name,
      email: email
    }

    await connection.raw(`
  INSERT INTO Funcionarios(id, name, email)
  VALUES (${newUser.id}, "${newUser.name}", "${newUser.email}");
  `)

    res.status(201).send({ mensagem: "Usuario cadastrado com sucesso", user: newUser })

  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message })
  }
})

// Exercicio 3
app.put("/users/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)
    const email = req.body.email

    if (!email) {
      throw new Error("Parâmetro email deve existir");
    }

    if (typeof email !== "string") {
      throw new Error("Parâmetro email deve ser uma string");

    }

    // const validaEmail = email.includes("@")

    // if(!validaEmail) {
    //   throw new Error("Email inválido");
    // }

    if (!email.includes("@")) {
      throw new Error("Erro: email inválido");
    }

    const [checaEmail] = await connection.raw(`
    SELECT * FROM Funcionarios
    WHERE email = "${email}"
    `)

    if (checaEmail[0]) {
      throw new Error("Erro:Email já cadastrado");
    }

    const [funcionarios] = await connection.raw(`
  SELECT * FROM Funcionarios
  WHERE id = ${id}
  `)

    const funcionarioEncontrado = funcionarios[0]

    if (!funcionarioEncontrado) {
      errorCode = 400
      throw new Error("Usuario não encontrado");
    }

    await connection.raw(`
  UPDATE Funcionarios
  SET email = "${email}"
  WHERE id = ${id};
  `)

    res.status(200).send({ mensagem: "Email atualizado com sucesso" })

  } catch (error) {
    res.status(errorCode).send({ mensage: error.message })
  }
})

// Exercicio 4

app.delete("/users/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)

    const [funcionarios] = await connection.raw(`
  SELECT * FROM Funcionarios
  WHERE id = ${id}
  `)

    const funcionarioEncontrado = funcionarios[0]

    if (!funcionarioEncontrado) {
      errorCode = 400
      throw new Error("Usuario não encontrado");
    }

    await connection.raw(`
  DELETE FROM Funcionarios
  WHERE id = ${id}
  `)

    res.status(200).send({ mensagem: "Funcionario deletado com sucesso" })

  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message })
  }
})



