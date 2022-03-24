// ------------- Exercícios de interpretação de código 1 -------------  

/*

    function minhaFuncao(variavel) {
	return variavel * 5
    }

    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))

    Letra A: Vai imprimir no primeiro console 10 e no segundo 50.
    Letra B: Se  invocasse a função minhaFuncao(2) e minhaFuncao(10) ela iria calcular 2 * 5 e tambem 10 * 5, porem não iria exibir no console.
*/

// ------------- Exercícios de interpretação de código 2 ------------- 

/*
    let textoDoUsuario = prompt("Insira um texto");

    const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)

    Letra A: Essa função vai pegar o texto digitado pelo úsuario no prompt deixar tudo em letra minuscula e verificar se tem palavra cenoura no texto digitado e retornar verdadeiro ou falso, essa função serve para ver se o texto digitado pelo usuario tem a palavra cenoura independente se o usuario escreveu com caracteres maiusculo ou minusculo.

    Letra B i: O console vai imprimir true
    Letra B ii: O console vai imprimir true
    Letra B iii: O console vai imprimir true
*/

// ------------- Exercícios de Escrita de código 1 -------------

//    Letra A:

    // function minhasInformacoes(){
    //     console.log("Eu sou Jorge, tenho 23 anos, moro em São Paulo e sou estudante.")
        
    // } 

    // minhasInformacoes()

//    Letra B:

    // function informacoesDoUsuario(nome,idade,cidade,profissão) {
    // const nomeUsuario = prompt("Qual é o seu nome?",nome)
    // const idadeUsuario = Number(prompt("Qual é a sua idade?",idade))
    // const cidadeUsuario = prompt("Em que cidede você mora?",cidade)
    // const profissaoUsuario = prompt("Qual é a sua profisão?",profissão)
    // const fraseCompleta = console.log(`Eu sou ${nomeUsuario}, tenho ${idadeUsuario} anos, moro em ${cidadeUsuario} e sou ${profissaoUsuario}`)
    // return fraseCompleta
    // }

// informacoesDoUsuario()

// ------------- Exercícios de Escrita de código 2 -------------

//    Letra A:

    // function funcaoParaSomar(numero1,numero2){
    //     const primeiroNumeroDoUsuario = Number(prompt("Digite um número!",numero1))
    //     const segundoNumeroDoUsuario = Number(prompt("Digite mais um número!",numero2))
    //     const resultadoDaSoma = primeiroNumeroDoUsuario + segundoNumeroDoUsuario
    //     return resultadoDaSoma
    // }

    // console.log(`O resultado da soma é :${funcaoParaSomar()}`)

//    Letra B:

    // function qualNumeroEMaior(a,b){
    //     const primeiroNumeroDigitado = prompt("Digite um número!",a)
    //     const segundoNumeroDigitado = prompt("Digite mais um número!",b)
    //     const oPrimeiroNumeroEMaiorQueOsegundo = primeiroNumeroDigitado >= segundoNumeroDigitado
    //     return oPrimeiroNumeroEMaiorQueOsegundo
    // }

    // console.log("O Primeiro numero digitado é maior ou igual ao segundo?",qualNumeroEMaior())

//    Letra C:

    // function eParOuNao(valor){
    //     const valorDigitadoUsuario = Number(prompt("Digite um valor e veja se é par!", valor))
    //     const resultado = (valorDigitadoUsuario % 2) === 0
    //     return resultado    
    // }

    // console.log("O valor digitado pelo usuario é par?", eParOuNao())

//    Letra D:

    // function paraMaiusculaETamanhoDaMensagem(mensagem){
    //     const mensagemDoUsuario = prompt("Digite uma mensagem!", mensagem)
    //     const tamanhoDaMensagem = mensagemDoUsuario.length
    //     const paraMaiuscula = mensagemDoUsuario.toUpperCase()
    //     const tamanhoDaMensagemEMaiuscula = `O mensagem digitada tem ${tamanhoDaMensagem} caracteres, e a frase maiuscula fica:${paraMaiuscula}`
    //     return tamanhoDaMensagemEMaiuscula
    // }

    // console.log(paraMaiusculaETamanhoDaMensagem())

// ------------- Exercícios de Escrita de código 3 -------------

// Função para Somar

    // function soma(valor1,valor2){
    // const valor1Usuario = Number(prompt("Digite um número",valor1))
    // const valor2Usuario = Number(prompt("Digite mais um número",valor2))
    // const somaDosValores = valor1Usuario + valor2Usuario
    // return somaDosValores
    // }

    // console.log("A soma dos valores digitados é", soma())

// Função para Subtração

    // function subtracao(valor1,valor2){
    //     const valor1Usuario = Number(prompt("Digite um número",valor1))
    //     const valor2Usuario = Number(prompt("Digite mais um número",valor2))
    //     const subtracaoDosValores = valor1Usuario - valor2Usuario
    //     return subtracaoDosValores
    //     }
        
    //     console.log("A diferença dos valores digitados é", subtracao())

// Função para Multiplicação

    // function multiplicacao(valor1,valor2){
    //     const valor1Usuario = Number(prompt("Digite um número",valor1))
    //     const valor2Usuario = Number(prompt("Digite mais um número",valor2))
    //     const multiplicacaoDosValores = valor1Usuario * valor2Usuario
    //     return multiplicacaoDosValores
    //     }

    //     console.log("A Multiplicação dos valores digitados é", multiplicacao())

// Função para Divisão

    // function divisao(valor1,valor2){
    //     const valor1Usuario = Number(prompt("Digite um número",valor1))
    //     const valor2Usuario = Number(prompt("Digite mais um número",valor2))
    //     const divisaoDosValores = valor1Usuario / valor2Usuario
    //     return divisaoDosValores
    //     }

    //     console.log("A Divisão dos valores digitados é", divisao())