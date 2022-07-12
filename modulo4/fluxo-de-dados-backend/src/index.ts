import express, { Request, Response } from "express"
import cors from "cors"
import { Produtos, produtos } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

// Exercicio 1
app.get("/test", (req: Request, res: Response) => {
    res.send("A api esta funcionando!")
})

// Exercicio 3
app.get("/produtos", (req: Request, res: Response) => {
    try {
        res.send({ mensagem: "ok", produtos: produtos })

    } catch (error) {
        res.send({ mensagem: error.message })
    }
})

// Exercicio 4
app.post("/produto", (req: Request, res: Response) => {
    try {
        const { name, price } = req.body

        if (!name) {
            throw new Error("Erro: a propriedade 'name' não pode estar vazia")
        } else if (typeof name !== "string") {
            throw new Error("Erro: a propriedade 'name', deve ser uma string")
        }

        if (price.length === 0) {
            throw new Error("Erro: a propriedade 'price' não pode estar vazia")
        } else if (typeof price !== "number") {
            throw new Error("Erro: a propriedade 'price', deve ser um number")
        } else if (price < 1) {
            throw new Error("Erro: a propriedade 'price' deve ser um numero maior do que 0");
        }

        const novoProduto: Produtos = {
            id: Date.now().toString(),
            name: name,
            price: price
        }

        produtos.push(novoProduto)

        res.status(201).send({ mensage: "ok", produtos: produtos })
    } catch (error) {
        res.send({ mensagem: error.message })
    }

})

// Exercicio 5
app.put("/produto/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const { price } = req.body

        if(!price && price.length === 0) {
            throw new Error("Erro: a propriedade 'price' não pode estar vazia");
            
        } else if (typeof price !== "number") {
            throw new Error("Erro: a propriedade 'price', deve ser um number");
        }

        if (price < 1) {
            throw new Error("Erro: a propriedade 'price' deve ser um numero maior do que 0");
        }

        const alteraPrecoProduto = produtos.map((produto) => {
            if (produto.id === id) {
                produto.price = price

            }
        })

        const produtoAtualizado = produtos.filter((produto) => {
            return produto.id === id
        })

        res.send({ mensagem: "ok", resultado: produtoAtualizado })
    } catch (error) {
        res.send({ mensagem: error.message })
    }

})

// Exercicio 6

app.delete("/produto/del/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const index = produtos.findIndex((produto) => {
            return produto.id === id
        })
    
        if (index === -1) {
            return res.send("Erro: produto não encontrado");
        }
    
        produtos.splice(index, 1)
    
        res.send({mensagem: "Produto deletado com sucesso"})        
    } catch (error) {
        res.send({mensagem: error.mensage})
    }

})