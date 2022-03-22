// Exercicio de Interpretação 1

/*
    const bool1 = true
    const bool2 = false
    const bool3 = !bool2

    let resultado = bool1 && bool2
    console.log("a. ", resultado)

    resultado = bool1 && bool2 && bool3 
    console.log("b. ", resultado) 

    resultado = !resultado && (bool1 || bool2) 
    console.log("c. ", resultado)

    console.log("d. ", typeof resultado)


    O primeiro console.log que é letra A, vai imprimir na tela o resultado False, no caso ele só retorna true quando todos os booleanos forem true, ele esta comparando a variavel bool1 que é true porem a variavel bool2 é false.

    O segundo console.log que é letra B, vai imprimir na tela o resultado False também, porque os booleanos não são todos com o valor true.

    O terceiro console.log que é letra C, vai imprimir True, o resultado anterior era false mas com simbolo de exclamação retorna o oposto então ele compara true com bool1 ou bool2 que também é true, ficaria true && true que é true.

    O quarto console.log que é letra D, vai imprimir boolean que é o tipo da variavel resultado.
*/

// Exercicio de Interpretação 2

/*
    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    const soma = primeiroNumero + segundoNumero

    console.log(soma)

    Vai imprimir na tela o resultado concatenado da variavel primeiroNumero e segundoNumero juntas porque o prompt recebe o valor em forma de string por exemplo nesse caso primeiroNumero = 5 + segundoNumero = 5 no console ele imprimiria 55, precisaria converter de string para o tipo number para o resultado ser 10. 
*/

// Exercicio de Interpretação 3

/*  O correto seria converter as 2 variaveis de string para number veja o exemplo a seguir:

    let primeiroNumero = Number(prompt("Digite um numero!"))
    let segundoNumero = Number(prompt("Digite outro numero!"))

    const soma = primeiroNumero + segundoNumero

    console.log(soma)
*/

// Exercícios de escrita de código 1

    const idade = Number(prompt("Quantos anos você tem?"))
    const idadeMelhorAmigo = Number(prompt("Quantos anos tem o seu melhor amigo ou melhor amiga?"))
    console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeMelhorAmigo)
    console.log("A diferença de idade sua e do seu melhor amigo é:", idadeMelhorAmigo - idade, "anos")

// Exercícios de escrita de código 2

    const numeroPar = Number(prompt("Digite um número par"))
    console.log("O resto da divisão do numero digitado por 2 é:", numeroPar % 2)
    // Percebi que digitando um numero par o console imprime o resultado sempre 0.
    // Se o usuario inserir um numero impar o console imprime o resultado sempre 1.

// Exercícios de escrita de código 3

    const idadeusuario = Number(prompt("Quantos anos você tem?"))
    console.log("A sua idade convertida em meses são:", idadeusuario * 12, "meses")
    console.log("A sua idade convertida em dias são:", idadeusuario * 365, "dias")
    console.log("A sua idade convertida em horas são:", idadeusuario * 8760, "horas")

// Exercícios de escrita de código 4

    const valorNumero1 = Number(prompt("Digite um número"))
    const valorNumero2 = Number(prompt("Digite outro número"))
    console.log("O primeiro número é maior que segundo?", valorNumero1 > valorNumero2)
    console.log("O primeiro número é igual ao segundo?", valorNumero1 === valorNumero2)
    let restodaporcentagem = valorNumero1 % valorNumero2
    let restodaporcentagem2 = valorNumero2 % valorNumero1
    console.log("O primeiro número é divisível pelo segundo?", restodaporcentagem === 0)
    console.log("O segundo número é divisível pelo primeiro?", restodaporcentagem2 === 0)