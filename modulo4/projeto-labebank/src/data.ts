import { User } from "./types";

export const date = new Date();
export const currentYear = date.getFullYear()
export const currentMonth = date.getMonth() + 1
export const currentDay = date.getDate()
export const currentDate = `${currentDay}/${currentMonth}/${currentYear}`

export const users:User[] = [
    {
        id: "User1",
        accountBalance: 999999999,
        name: "Daenerys Targaryen",
        cpf: "123-456-789-01",
        birthDate: "23/10/1986",
        paidAccountStatementList: [
            {
                accountValue: 500000,
                accountPayableDescription: "Bought a three headed dragon at walmart",
                accountPaymentDate: currentDate
            }
        ]
    },
    {
        id: "User2",
        accountBalance: 80000,
        name: "Jon Snow",
        cpf: "123-456-789-02",
        birthDate: "28/12/1986",
        paidAccountStatementList: [
            {
                accountValue: 50000,
                accountPayableDescription: "Bought the long claw sword at walmart",
                accountPaymentDate: currentDate
            }
        ]
    },
    {
        id: "User3",
        accountBalance: 500000,
        name: "Tyrion Lannister",
        cpf: "123-456-789-03",
        birthDate: "11/06/1969",
        paidAccountStatementList: [
            {
                accountValue: 5000,
                accountPayableDescription: "Bought a peg leg at walmart",
                accountPaymentDate: currentDate
            }
        ]
    }
]