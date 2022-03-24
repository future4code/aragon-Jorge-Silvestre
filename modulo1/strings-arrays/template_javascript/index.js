// Exercícios de interpretação de código 1

/* 
    Letra A

    let array
    console.log('a. ', array) 
    Ele vai imprimir no console undefined, porque a variavel array não foi definida.

    Letra B 

    array = null
    console.log('b. ', array)
    Ele vai imprimir no console null, porque a variavel array foi definida como null.

    Letra C

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length)
    Ele vai imprimir no console 11, porque a variavel array tem 11 caracteres.

    Letra D

    let i = 0
    console.log('d. ', array[i])
    Ele vai imprimir no console 3, porque na variavel array o numero 3 está na primeira posição que é 0.

    Letra E 
    array[i+1] = 19
    console.log('e. ', array)
    Ele vai imprimir no console a lista da variavel array, e subistituir o valor da posição 1 que é o 4 por 19.

    Letra F
    const valor = array[i+6]
    console.log('f. ', valor)
    Ele vai imprimir no console o valor da lista na posição de numero 6 que é 9.

*/

// Exercícios de interpretação de código 2

/*
    const frase = prompt("Digite uma frase")
    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
    Vai imprimir no console a frase digitada com todas as letras maiusculas, subistituir todas as letras A pela letra I e mostrar quantos caracteres tem a frase digitada.
    Exemplo se o usuario digitar a frase: Subi num ônibus em Marrocos, vai imprimir no console: SUBI NUM ÔNIBUS EM MIRROCOS 27
*/

// Exercícios de escrita de código 1

    // const nome = prompt("Qual é o seu nome?")
    // const email = prompt("Qual é o seu email?")
    // console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem vinda(o),${nome}!`)

// Exercícios de escrita de código 2

    // const minhasComidasFavoritas = ["Pastel", "Batata Frita", "Pizza", "Coxinha", "Lasanha"]
    // console.log(minhasComidasFavoritas)
    // console.log(`Essas são as minhas comidas preferidas 
    // ${minhasComidasFavoritas[0]}
    // ${minhasComidasFavoritas[1]}
    // ${minhasComidasFavoritas[2]}
    // ${minhasComidasFavoritas[3]}
    // ${minhasComidasFavoritas[4]}`)
    // const comidaFavoritaUsuario = prompt("Qual é a sua comida favorita?")
    // minhasComidasFavoritas.splice(1,1, comidaFavoritaUsuario)
    // console.log(minhasComidasFavoritas)

// Exercícios de escrita de código 3

    const listaDeTarefas = []
    const tresTarefasDoUsuario = prompt("Digite 1 tarefa que você precisa realizar hoje!")
    const tresTarefasDoUsuario2 = prompt("Digite outra tarefa que você precisa realizar hoje!")
    const tresTarefasDoUsuario3 = prompt("Digite mais uma tarefa que você precisa realizar hoje!")
    listaDeTarefas.push(tresTarefasDoUsuario)
    listaDeTarefas.push(tresTarefasDoUsuario2)
    listaDeTarefas.push(tresTarefasDoUsuario3)
    console.log(listaDeTarefas)
    let indiceDoUsuario = Number(prompt("Digite um numero de um a 3 para remover umas das 3 tarefas que você ja digitou anteriormente!"))
    indiceDoUsuario -= 1
    listaDeTarefas.splice(indiceDoUsuario,1)
    console.log(listaDeTarefas)
    