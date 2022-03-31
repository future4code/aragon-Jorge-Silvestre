// ------------- Exercícios de interpretação de código 1 -------------

// O que o código abaixo está fazendo? Qual o resultado impresso no console?

    // let valor = 0
    // for(let i = 0; i < 5; i++) {
    // valor += i
    // }
    // console.log(valor)

// O codigo tem uma variavel com o valor 0, depois ele cria um laço de repetição enquanto i for menor que 5 adiciona 1, ai ele pega o valor da variavel valor + i e depois imprimi no console o valor dela, ou seja vai imprimi 10.

// ------------- Exercícios de interpretação de código 2 -------------

// Leia o código abaixo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a) O que vai ser impresso no console?
// Vai ser impresso no console todos os numeros maires que 18 ou seja: 19, 21, 23, 25, 27, 30

// b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
// Sim, é só tirar a condicional numero maior que 18.

// ------------- Exercícios de interpretação de código 3 -------------

// Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

    // const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    // let quantidadeAtual = 0
    // while(quantidadeAtual < quantidadeTotal){
    // let linha = ""
    // for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    //     linha += "*"
    // }
    // console.log(linha)
    // quantidadeAtual++
    // }

    // O resultado seria   *
                        // **
                        // ***
                        // ****

// ------------- Exercícios de escrita de código 1 -------------
//Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

// const quantidadeBichinhosUsuario = Number(prompt("Quantos bichinhos de estimação você tem?"))

// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

// const array = []

// if (quantidadeBichinhosUsuario === 0) {
//     console.log("Que pena! Você pode adotar um pet")
// } else {
//     for (let quantidade = quantidadeBichinhosUsuario; quantidade > 0; quantidade --) {
//         let nomeBichinhosUsuario = prompt("Digite o nome deles, um por vez!")
//         array.push(nomeBichinhosUsuario)
//     }
// }

// console.log(array)

// ------------- Exercícios de escrita de código 2 -------------
//Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
const arrayOriginal = [0,1,2,3,4,5,6,7,8,9]


// a) Escreva um programa que imprime cada um dos valores do array original.

function imprimeValoresArray(arrayCriada) {
    for (valores of arrayCriada) {
    console.log(valores)
}
}

imprimeValoresArray(arrayOriginal)

// b) Escreva um programa que imprime cada um dos valores do array original divididos por 10

function divideValorPorDez(arrayCriada) {
    for (valores of arrayCriada) {
        console.log(valores / 10)
}
}

divideValorPorDez(arrayOriginal)

// c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array

