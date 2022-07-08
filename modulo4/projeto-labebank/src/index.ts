import express, { Request, Response } from "express"
import cors from "cors"
import { AccountPaid, User } from "./types"
import { currentDate, currentYear, users } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => { console.log("Servidor rodando na porta 3003") })

app.post("/users", (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const { name, cpf, birthDate } = req.body
        const age = birthDate.slice(birthDate.length - 4);
        const ageToNumber = Number(age)

        const ValidatesIfCpfAlreadyExists = users.forEach((user) => {
            if (user.cpf === cpf) {
                errorCode = 409
                throw new Error("CPF already exists.");
            }
        })

        if (!name || !cpf || !birthDate) {
            errorCode = 422;
            throw new Error("Missing data in order to create user.");
        }

        if (typeof name !== "string") {
            errorCode = 422;
            throw new Error("Invalid name.");
        } else if (name.length < 3) {
            throw new Error(" Username must be at least 3 characters long")
        }

        if (typeof cpf !== "string") {
            errorCode = 422;
            throw new Error("Invalid cpf.")
        }

        if (typeof birthDate !== "string") {
            errorCode = 422;
            throw new Error("Invalid birthDate.")
        } else if (currentYear - ageToNumber < 18) {
            throw new Error("To create an account you must be over 18 years old.")
        }

        const newUser: User = {
            id: Date.now().toString(),
            accountBalance: 0,
            name: name,
            cpf: cpf,
            birthDate: birthDate,
            paidAccountStatementList: []
        }

        users.push(newUser)

        res.status(201).send({
            message: "User created successfuly!",
            users
        })
    } catch (error) {
        if (error.statusCode === 200) {
            res.status(500).end();
        } else {
            res.status(errorCode).send(error.message);
        }
    }
})

app.get("/users/:id", (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const id = req.params.id

        const index = users.findIndex((user) => {
            return user.id === id
        })

        if (index === -1) {
            throw new Error("id does not exist!");
        }

        const returnAccountBalanceById = users.filter((user) => {
            const selectedUser = user.id === id
            return selectedUser
        })

        const accountBalance = returnAccountBalanceById.map((userBalance) => {
            return userBalance.accountBalance
        })

        res.send(
            {
                accountBalance: accountBalance
            }
        )
    } catch (error) {
        if (error.statusCode === 200) {
            res.status(500).end();
        } else {
            res.status(errorCode).send(error.message);
        }
    }
})

app.put("/users/:id", (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const id = req.params.id
        const { balance } = req.body

        const index = users.findIndex((user) => {
            return user.id === id
        })

        if (index === -1) {
            throw new Error("id does not exist!");
        }

        if (typeof balance !== "number") {
            errorCode = 422;
            throw new Error("Invalid balance.")
        } else if (balance < 1) {
            throw new Error("balance must be greater than zero.")
        }

        const user = users.filter((user) => {
            return user.id === id
        })

        const addBalance = user.map((userBalance) => {
            const updatedAccountBalance = userBalance.accountBalance + balance
            userBalance.accountBalance = updatedAccountBalance
        })



        res.send(
            { message: "Success", user }
        )
    } catch (error) {
        if (error.statusCode === 200) {
            res.status(500).end();
        } else {
            res.status(errorCode).send(error.message);
        }
    }
})

app.put("/users/:id/pay", (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const id = req.params.id
        const { value, description } = req.body

        const index = users.findIndex((user) => {
            return user.id === id
        })

        if (index === -1) {
            throw new Error("id does not exist!");
        }

        if (value.length === 0 || !description) {
            errorCode = 422;
            throw new Error("Missing data in order to pay bill user.");
        }

        if (typeof value !== "number") {
            errorCode = 422;
            throw new Error("Invalid value.")
        } else if (value < 1) {
            throw new Error("value must be greater than zero.")
        }

        if (typeof description !== "string") {
            errorCode = 422;
            throw new Error("Invalid description.")
        } else if (description.length < 6) {
            throw new Error(" Description must be longer than 6 letters.")
        }


        const returnAccountById = users.filter((user) => {
            return user.id === id
        })

        const payTheBill = returnAccountById.map((user) => {
            if (value > user.accountBalance) {
                throw new Error("insufficient funds")
            } else {
                const pay = user.accountBalance - value
                return user.accountBalance = pay
            }

        })

        const accountPaid: AccountPaid = {
            accountValue: value,
            accountPayableDescription: description,
            accountPaymentDate: currentDate
        }

        returnAccountById.map((user) => {
            user.paidAccountStatementList.push(accountPaid)
        })

        res.send({ message: "Success", returnAccountById })
    } catch (error) {
        if (error.statusCode === 200) {
            res.status(500).end();
        } else {
            res.status(errorCode).send(error.message);
        }
    }
})