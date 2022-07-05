import express, { Request, Response } from "express"
import cors from "cors"
import { Afazeres, afazeres } from "./afazeres"

const app = express()

app.use(cors())
app.use(express.json())

// Exercici 1 
app.listen(3003, () => {console.log("Servidor rodando na porta 3003.")})

app.get("/ping", (req: Request, res: Response) => {
    res.send({mensagem:"Pong"})
})

// Exercicio 3 
app.get("/afazer/:userId", (req: Request, res: Response) => {
    const idUsuario = Number(req.params.userId)

    const filtrarUsuarioPorId = afazeres.filter((afazer) => afazer.userId === idUsuario)

    res.status(200).send(filtrarUsuarioPorId)
})

// Exercicio 4 
app.post("/afazer", (req: Request, res: Response) => {
    const {userId, title} = req.body

    const ultimoAfazer = afazeres[afazeres.length - 1]

    const novoAfazer: Afazeres = {
        userId: userId,
        id: ultimoAfazer.id + 1,
        title: title,
        completed: false
    }

    afazeres.push(novoAfazer)

    res.send({
        mensagem: "Produto criado com sucesso",
        afazer: novoAfazer
    })
})

// Exercicio 5
app.put("/afazer/isCompleto/:id", (req: Request, res: Response) => {
    const idAfazer = Number(req.params.id)
    const {completed} = req.body

    const alteraAfazer = afazeres.map((afazer) => {
        if (afazer.id === idAfazer) {
            afazer.completed = completed
        }
    })

    res.send({
        mensagem: "Editado com sucesso!",
        afazeres
    })
})

// Exercicio 6
app.delete("/afazer/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const index = afazeres.findIndex((afazer) => {
        return afazer.id === id
    })

    if (index === -1) {
        return res.send({
            mensagem:"Afazer não encontrado",
            id:id
        })
    }

    afazeres.splice(index, 1)

    res.send({
        mensage: "Produto deletado com sucesso",
        afazeres: afazeres
    })
})

// Exercicio 7
app.get("/afazeres/completo", (req: Request, res: Response) => {
    const busca = req.query.busca

    if (busca !== "true" && busca !== "false") {
        return res.send({
            busca: busca,
            afazeres: afazeres
        })
    }

    if (busca === "true") {
        const resultado = afazeres.filter((afazer) => {
            return afazer.completed === true
        })

        return res.send({
            busca: busca,
            afazeres: resultado
        })
    } else {
        const resultado = afazeres.filter((afazer) => {
            return afazer.completed === false
        })

        return res.send({
            busca: busca,
            afazeres: resultado
        })
    }
})