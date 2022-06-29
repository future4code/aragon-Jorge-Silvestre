// Exercicio 3

// Parte 1 - A entrada da função vai ser um array de numbers e a saida é um type que é um objeto com 3 propriedades do tipo number cada um.

// Parte 2 - A outra variavel que compõe a implementação dessa função é a let soma que é do tipo number.

// type SaidaDaFuncao = {
//     maior:number,
//     menor:number,
//     media:number
// }

// function obterEstatisticas(numeros:number[]):SaidaDaFuncao {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma:number = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }