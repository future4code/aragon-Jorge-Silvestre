// -------------  Exercícios de interpretação de código  -------------

// Exercicio 1

/*
 No primeiro console vai ser impresso Matheus Nachtergaele, que está dentro da variavel filme, dentro da propriedade elenco na posição 0 da lista.
*/

/*
 No segundo console vai ser impresso o nome Virginia Cavendish que é o ultimo item da lista 
*/ 

/*
 No terceiro console vai ser impresso a segunda propriendade dentro da lista transmissões hoje que é {canal: 'Globo', horario: '14h'}.
*/

// Exercicio 1
// Letra A

/*
 No primeiro console vai ser impresso a variavel cachorro que é cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}
*/

/*
 No segundo console vai ser impresso a variavel gato que é  a variavel cachorro subistituindo o nome Juca por Juba = {
	nome: "Juba", 
	idade: 3, 
	raca: "SRD"
}
*/

/*
 No terceiro console vai ser impresso a variavel tartaruga que é a variavel gato e substituir na propriedade nome todas letras a por o = {
	nome: "Jubo", 
	idade: 3, 
	raca: "SRD"
}
*/

// Letra B

/*
A sintaxe dos três pontos antes do nome de um objeto é a sintaxe espalhamento ou spread que realizar uma cópia de um objeto (ou array) inteiro
Feita essa cópia, podemos manipular ela da maneira que quisermos (ex: mudar ou adicionar propriedades)
*/

// Exercicio 2
// Letra A

/*
 No primeiro console vai ser impresso false
*/

/*
 No segundo console vai ser impresso undefined
*/

// Letra B

// -------------  Exercícios de escrita de código  -------------
// Exercicio 1
// Letra A

const pessoa = {
    nome: "Jorge",
    apelidos: ["Jó","Jorginho","Jórjão"]
}

function alteraFrase(objetoCriado){
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)

}

alteraFrase(pessoa)

// Letra B

const pessoa2 = {...pessoa,
	apelidos: ["Jó","Jó2","Jó3"]
}

alteraFrase(pessoa2)

// Exercicio 2

// Letra A

const objeto1 = {
	nome: "Fernanda",
	idade: 28,
	profissao: "medica"
}

const objeto2 = {
	nome: "Lucia",
	idade: 24,
	profissao: "professora"
}

// Letra B

function editaInfo(objeto){
	const infoDosObjetos = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
	console.log(infoDosObjetos)
}

editaInfo(objeto1)
editaInfo(objeto2)

// Exercicio 3

// Letra A

const varGlobal = carrinho = []

// Letra B

const frutasSacolao1 = {
	nome:"laranja",
	disponibilidade: true
}

const frutasSacolao2 = {
	nome:"pera",
	disponibilidade: true
}

const frutasSacolao3 = {
	nome:"banana",
	disponibilidade: true
}

// Letra C

function frutaNoCarrinho(fruta) {
	const colocaNoCarrinho = varGlobal.push(fruta)
}

frutaNoCarrinho(frutasSacolao1)
frutaNoCarrinho(frutasSacolao2)
frutaNoCarrinho(frutasSacolao3)

// Letra D

console.log(varGlobal)