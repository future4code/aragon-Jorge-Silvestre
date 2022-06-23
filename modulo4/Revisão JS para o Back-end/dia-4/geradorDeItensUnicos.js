const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}
]

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	}
]


const geraItensUnicos = (array1, array2) => {
    const arrConcatenado = array1.concat(array2)
    const resultado = []

    for (let itemConcatenado of arrConcatenado) {
        const itemResultado = resultado.find((item) => item.nome === itemConcatenado.nome)

        if(!itemResultado) {
            resultado.push(itemConcatenado)
        }
    }
    return resultado
}


console.log(geraItensUnicos(primeiraLista, segundaLista))