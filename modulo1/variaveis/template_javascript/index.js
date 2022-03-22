/* Exercícios de interpretação de código 1
    let a = 10
    let b = 10

    console.log(b)

    b = 5
    console.log(a, b)

    Primeiro ele vai imprimir no console o valor da variavel b que é 10, depois mudou o valor da variavel b para 5, e pediu para imprimir o valor da variavel a que é 10 e da variavel b que passou a ser 5, ou seja vai imprimir no console 10, 5. 
*/

/* Exercícios de interpretação de código 2
    let a = 10
    let b = 20
    c = a
    b = c
    a = b

    console.log(a, b, c)

    Vai imprimir no console o valor de a, b e c ou seja: 10, 10, 10
*/

/* Exercícios de interpretação de código 3
    let p = prompt("Quantas horas você trabalha por dia?")
    let t = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${t/p} por hora`)

    Um melhor nome para as variaveis São no lugar de p > horasTrabalhadasPorDia e no lugar de t > valorRecebidoPorDia
*/    

// Exercícios de escrita de código 1

    let nome 
    let idade 
    console.log("Tipo da variavel nome:", typeof nome, "Tipo da variavel idade:", typeof idade)
    /* O typeof das duas variaveis nome e idade retornou undefined porque as duas variaveis ainda não teve um valor definido*/
    nome = prompt("Qual é o seu nome?")
    idade = prompt("Qual é a sua idade?")
    console.log("Tipo da variavel nome",typeof nome,"Tipo da variavel idade",typeof idade)
    /* O typeof das duas variaveis retornou string, porque tudo que é digitado no prompt ele retorna em forma de string*/
    console.log("Olá", nome, "Você tem", idade,"anos")

// Exercícios de escrita de código 2
    let isusuarioEstaUsandoUmaRoupaAzul = prompt("Você está usando uma roupa azul hoje")    
    let ismaisQueUmESetentaDeAltura = prompt("Você tem mais de 1.70 de altura?")
    let ismaiorDeIdade = prompt("Você é maior de idade?")

    let respostaDaVarUm = isusuarioEstaUsandoUmaRoupaAzul
    let respostaDaVarDois = ismaisQueUmESetentaDeAltura
    let respostaDaVarTres = ismaiorDeIdade
    console.log("Você está usando uma roupa azul hoje? Resposta:", respostaDaVarUm)
    console.log("Você tem mais de 1.70 de altura? Resposta:", respostaDaVarDois)
    console.log("Você é maior de idade? Resposta:", respostaDaVarTres)

// Exercícios de escrita de código 3
    let a = 10
    let b = 25

    let c 
    c = a
    a = b 
    b = c

    console.log("O novo valor de a é", a)
    console.log("O novo valor de b é", b)

//  Desafio
    let primeiroNumDigitado = Number(prompt("Digite um número"))
    let segundoNumDigitado = Number(prompt("Digite outro número"))
    console.log("O primeiro número somado ao segundo número resulta em:", primeiroNumDigitado + segundoNumDigitado)
    console.log("O primeiro número multiplicado pelo segundo número resulta em:", primeiroNumDigitado * segundoNumDigitado)