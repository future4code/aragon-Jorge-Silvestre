function retornaFrase(nome:string, dataNacsimento:string):string {
    
    const data:string[] = dataNacsimento.split("/")

    return `Olá, me chamo ${nome}, nasci no dia ${data[0]}, no mês ${data[1]} e ano de ${data[2]}`
}

console.log(retornaFrase("Jorge","04/01/1999"))
