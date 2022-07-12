import express, { Request, Response } from "express"
import cors from "cors"
import { User, users } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => { console.log("Servidor rodando na porta 3003") })

// Exercicio 2
app.get("/usuario", (req: Request, res: Response) => {
    try {
        const { role } = req.query


        if (!role) {
            return res.send({ users })

        } else if (role !== "NORMAL" && role !== "ADMIN") {
            throw new Error("Erro: a propriedade 'role' deve ser NORMAL OU ADMIN.");
        }

        const usuario = users.filter((user) => {
            return user.role === role
        })

        res.send({ mensagem: "ok", usuario })

    } catch (error) {
        res.send({ mensagem: error.message })
    }


})

// Exercicio 3

app.post("/novo/usuario", (req: Request, res: Response) => {
    try {
        const { name, email, age, role } = req.body

        if (!name) {
            throw new Error("Erro: a propriedade 'name' não pode estar vazia");
        } else if (!email) {
            throw new Error("Erro: a propriedade 'email' não pode estar vazia");
        } else if (!age) {
            throw new Error("Erro: a propriedade 'age' não pode estar vazia");
        } else if (!role) {
            throw new Error("Erro: a propriedade 'role' não pode estar vazia");
        } else if (typeof name !== "string") {
            throw new Error("Erro: a propriedade 'name' deve ser do tipo string");
        } else if (typeof email !== "string") {
            throw new Error("Erro: a propriedade 'email' deve ser do tipo string");
        } else if (typeof age !== "number") {
            throw new Error("Erro: a propriedade 'age' deve ser do tipo number");
        } else if (role !== "ADMIN" && role !== "NORMAL") {
            throw new Error("Erro: a propriedade 'role' deve ser ADMIN OU NORMAL");
        }

        const verificaEmailJaExiste = users.map((user) => {
            if (user.email === email) {
                throw new Error("Erro: email já existe");
            }
        })


        const usuario: User = {
            id: Date.now(),
            name: name,
            email: email,
            role: role,
            age: age
        }

        users.push(usuario)

        res.status(201).send(users)
    } catch (error) {
        res.status(400).send({ mensagem: error.message })
    }
})

// Exercicio 4

app.put("/usuario/:id", (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const { email } = req.body

        if(!id) {
            throw new Error("Erro: a propriedade 'id' não pode estar vazia");
        } else if (!email) {
            throw new Error("Erro: a propriedade 'email' não pode estar vazia");
        } else if (typeof email !== "string") {
            throw new Error("Erro a propriedade 'email' deve ser do tipo string");
        } else if (typeof id !== "number") {
            throw new Error("Erro: a propriedade 'id deve ser do tipo number'");
            
        }

        const index = users.findIndex((user) => {
            return user.id === id
        })

        if (index === -1) {
            throw new Error("Erro: o 'id' informado não existe");
            
        }

        const verificaEmailJaExiste = users.map((user) => {
            if (user.email === email) {
                throw new Error("Erro: email já existe");
            }
        })

        const editaEmailUsuario = users.map((user) => {
            if (user.id === id) {
                user.email = email
            } 
        })

        const retornaUsuarioEditado = users.filter((user) => {
            return user.id === id
        })

        res.send(retornaUsuarioEditado)
    } catch (error) {
        res.send({ mensagem: error.message })
    }
})

// Exercicio 5

app.delete("/del/usuario/:id", (req: Request, res: Response) => {
   try {
    const id = Number(req.params.id)

    if(typeof id !== "number") {
        throw new Error("Erro: a propriedade 'id deve ser do tipo number'")
    }

    const index = users.findIndex((user) => {
        return user.id === id
    })

    if (index === -1) {
        throw new Error("Erro: o 'id' informado não existe");
        
    }

    users.splice(index, 1)

    res.send({mensagem:"Usuario deletado com sucesso!"})
   } catch (error) {
    res.send({mensagem: error.message})
   }
})