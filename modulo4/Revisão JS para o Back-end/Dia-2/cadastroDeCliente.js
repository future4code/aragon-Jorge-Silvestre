const listaDeClientes = [
    { id: 1, nome: "Fulano" },
    { id: 2, nome: "Ciclano" },
    { id: 3, nome: "Beltrano" },
    { id: 4, nome: "Fulana" }
]

const cadastraCliente = (novoCliente) => {


    const index = listaDeClientes.findIndex((cliente) => cliente.id === novoCliente.id )

    if (index === -1) {
        listaDeClientes.push(novoCliente)
        return listaDeClientes
    } else {
        return "Erro. Parâmetro inválido (id já existe)."
    }


}

console.log(cadastraCliente({ id: 5, nome: "Fulano" }))
console.log(cadastraCliente({ id: 1, nome: "Ciclana" }))