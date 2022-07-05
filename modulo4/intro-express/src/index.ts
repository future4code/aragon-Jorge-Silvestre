import express, {Request, Response} from "express"
import cors from "cors"

const app = express()

// Exercicio 1 

app.use(cors())
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("Servidor funcionando!")
})

// Exercicio 2 

type Usuarios = {
    id:number,
    name:string,
    phone:number,
    email:string
}

const usuarios:Usuarios[] = [
    {
        id: 123456789,
        name: "Amanda",
        phone: 952345321,
        email: "amanda@email.com"
    },
    {
        id: 12345678,
        name: "Roberto",
        phone: 952345322,
        email: "roberto@email.com"
    },
    {
        id:1234567,
        name: "Lucia",
        phone: 952345323,
        email: "lucia@email.com"
    }
]

// Exercicio 3 

app.get("/users", (req: Request, res: Response) => {
    res.send(usuarios)
})

// Exercicio 4 

app.get("/users/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    
    const filterId = usuarios.filter(usuario => usuario.id === id)

    res.status(200).send(filterId)
})

// Exercicio 5 

app.post("/user/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const {phone} = req.body


    const alteraTelefoneUsuario = usuarios.map((usuario) => {
        const usuarioASerAlterado = usuario.id === id
        if(usuarioASerAlterado) {
            usuario.phone = phone
        }
    
    })

    const usuarioEditado = usuarios.filter(usuario => usuario.id === id)

    res.status(200).send(usuarioEditado)
})




app.listen(3003, () => console.log("O servidor está rodando na porta 3003."))

// Exercicio 6 

app.delete("/user/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const index = usuarios.findIndex(usuario => usuario.id === id)
    usuarios.splice(index, 1)

    res.status(200).send(usuarios)
})