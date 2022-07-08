export type AccountPaid = {
    accountValue: number,
    accountPayableDescription: string,
    accountPaymentDate: string
}

export type User = {
    id: string,
    accountBalance: number
    name: string,
    cpf: string,
    birthDate: string,
    paidAccountStatementList:AccountPaid[]
}

