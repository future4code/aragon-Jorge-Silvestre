type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

function clientesNegativos(clientes: Cliente[]) {
    const debitos = clientes.map((cliente) => {
        const arrayDebitos = cliente.debitos
        const somaDebitos = arrayDebitos.reduce((total, numero) => total + numero, 0)
        return somaDebitos
    })

    return debitos
    
}

console.log(clientesNegativos([
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]))