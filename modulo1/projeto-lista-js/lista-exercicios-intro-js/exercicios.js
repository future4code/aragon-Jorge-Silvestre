// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite a altura do retanguo"))
  const largura = Number(prompt("Digite a largura do retanguo"))
  const areaDoRetangulo = altura * largura
  console.log(areaDoRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite em que ano estamos!"))
  const anoDeNascimento = Number(prompt("Digite em que ano você nasceu!"))
  const idadeUsuario = anoAtual - anoDeNascimento
  console.log(idadeUsuario)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const pesoDigitado = peso
  const alturaDigitada = altura
  const imcUsuario = peso / (altura * altura)
  return imcUsuario

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt("Qual o seu nome?")
  const idadeUsuario = Number(prompt("Quantos anos você tem?"))
  const emailUsuario = prompt("Digite o seu email!")
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite uma cor favorita!")
  const cor2 = prompt("Digite mais uma cor favorita!")
  const cor3 = prompt("Digite outra cor favorita!")
  const tresCoresFavoritasUsuario = [cor1,cor2,cor3]
  console.log(tresCoresFavoritasUsuario)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const textoDigitado = string.toUpperCase()
  return textoDigitado
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const custoDoEspetaculo = custo
  const custoDoIngresso = valorIngresso
  const ingressosNecessario = custo / valorIngresso
  return ingressosNecessario
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const texto1 = string1
  const texto2 = string2
  const oTamanhoEIgualEmCaracteres = string1.length === string2.length
  return oTamanhoEIgualEmCaracteres
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const lista1 = array
  const primeiroElemento = lista1[0]
  return primeiroElemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const lista2 = array
  const ultimoElemento = lista2.slice(-1,)[0]
  return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const lista3 = array
  const primeiroEUltimoElementoTrocado = lista3
  return primeiroEUltimoElementoTrocado

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const text1 = string1.toLowerCase()
  const text2 = string2.toLowerCase()
  const verificaSeEIgual = text1 === text2
  return verificaSeEIgual
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idadeUsuario = prompt("Você tem mais de 18 anos?")
  const usuarioTemEnsinoMedio = prompt("Voce possui ensino medio completo?")
  const usuarioTemDisponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  
}