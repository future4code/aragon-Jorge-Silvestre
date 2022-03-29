// ---------- Exercícios de interpretação de código 1 ----------

// Letra A 

// O código ve se o numero digitado pelo usuario é par, ele realiza o teste verificando se o resto do numero que o usuario digitou dividido por 2 é igual a zero.

// Letra B

// Para numeros pares digitados ele imprime no console, passou no teste.

// Letra C

// Para numeros impares digitados ele imprime no console, não passou no teste.

// ---------- Exercícios de interpretação de código 2 ----------

// Letra A 

// O codigo serve para informar o valor da fruta digitada pelo usuario.

// Letra B

// Se o valor de fruta for "Maçã" ele imprimira O preço da fruta maçã é R$ 2.25

// Letra C

//  Se retirássemos o break que está logo acima do default a mensagem seria, O preço da fruta Pêra é R$ 5, ele imprime o valor de default.

// ---------- Exercícios de interpretação de código 3 ----------

// Letra A 

// A primeira linha esta pedindo para o usuario digitar o primeiro numero, transformando em tipo number e guardando o valor na variavel numero.

// Letra B

// Se o usuario digitou o número 10 vai aparecer no console Esse numero passou no teste.
// Se o usuario digitou o número -10 vai aparecer no console Undefined.

// Letra C

// Sim há um erro no console, porque o console.log está fora da função e tentando acessar o valor de uma variavel de escopo local que no caso está dentro da função.

// ---------- Exercícios de escrita de código 1 ----------

// function podeDirigir(idadeUsuario) {
//     if (idadeUsuario >= 18)
//         return "Você pode dirigir"
//     else {
//         return "Você não pode dirigir"
//     }    
// }

// const idadeDigitadaUsuaria = Number(prompt("Qual é a sua idade?"))

// console.log(podeDirigir(idadeDigitadaUsuaria))      

// ---------- Exercícios de escrita de código 2 ----------

// function horarioEstudo(periodo) {
//     if (periodo === "M") {
//         return "Bom Dia!"
//     } else if (periodo === "V") {
//         return "Boa Tarde!"
//     } else {
//         return "Boa Noite!"
//     }
// }

// const horarioUsuarioEstuda = prompt("Qual horario você estuda? M/matutino V/vespertino N/noturno")

// console.log(horarioEstudo(horarioUsuarioEstuda))

// ---------- Exercícios de escrita de código 3 ----------

// function horarioEstudo(periodo) {
//     switch (periodo) {
//         case 'M':
//             return "Bom dia!"
//         case 'V':
//             return "Boa Tarde!"
//         case 'N': 
//             return "Boa Noite!"
//     }
// }

// const horarioUsuarioEstuda = prompt("Qual horario você estuda? M/matutino V/vespertino N/noturno")
// console.log(horarioEstudo(horarioUsuarioEstuda))

// ---------- Exercícios de escrita de código 4 ----------

// function assistirFilme(genero,preço) {
//     if (genero === "fantasia" && preço < 15) {
//      return "Bom Filme!"
//     }  else {
//          return "Escolha outro filme"
//     }
// }

// const generoDoFilme = prompt("Digite o genero de filme que você ira assistir")
// const precoDoIngresso = Number(prompt("Digite o preço do ingresso"))

// console.log(assistirFilme(generoDoFilme,precoDoIngresso))