// Exercícios de interpretação de código 1

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
  
// a) O que vai ser impresso no console?
// Vai aparecer impresso no console o primeiro objeto da lista a posição dele na lista e a lista completa, depois em outro console o segundo objeto da lista a posição dele na lista e a lista completa e mais um console com o terceiro objeto da lista a posição dele na lista e a lista completa.

// Exercícios de interpretação de código 2

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

  // a) O que vai ser impresso no console?
  // Vai ser impresso no console uma lista com o nome de cada usuario ou seja vai aparecer Amanda Rangel, Laís Petra, Letícia Chijo.

// Exercícios de interpretação de código 3

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

//   a) O que vai ser impresso no console?
//   Vai aparecer no console um novo array com cada objeto que o apelido não seja Chijo ou seja    vai aparecer [{nome:"amanda Rangel", apelido:"Mandi
//             nome:"Laís Petra", apelido: "Laura"}]

// Exercícios de escrita de código 1
// Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// a) Crie um novo array que contenha apenas o nome dos doguinhos

// const nomeDogs = pets.map((item) => {
//     return item.nome
// })

// console.log(nomeDogs)

// b) Crie um novo array apenas com os cachorros salsicha

// const onlySalsichas = pets.filter((item) => {
//     return item.raca === "Salsicha"
// })

// console.log(onlySalsichas)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

// const onlyPoodlesTemDesconto = pets.filter((animal) => {
//     return animal.raca === "Poodle"
// })

// const poodlesDaArray = onlyPoodlesTemDesconto.filter((racaWithDesconto) => {
//     if (racaWithDesconto.raca === "Poodle"){
//         console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${racaWithDesconto.nome}!`)
//     }
// })

// console.log(poodlesDaArray)

// Exercícios de escrita de código 2
// Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

// a) Crie um novo array que contenha apenas o nome de cada item

// const nomeCadaProduto = produtos.map((produto) => {
//     return produto.nome
// })
// console.log(nomeCadaProduto)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// const adicionaDesconto = produtos.map((produto) => {
//     let objeto = {}
//     objeto = {nome: produto.nome,
//     preco: produto.preco - produto.preco * 0.05
//     }
//     return objeto
// })

// console.log(adicionaDesconto)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// const categoriaBebidas = produtos.filter((produto) => {
//     let bebidas = {}
//     bebidas = produto.categoria === "Bebidas"
//     return bebidas
// })

// console.log(categoriaBebidas)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

//  const marcaYpe = produtos.filter((produto) => {
//      let produtosYpe = {}
//      produtosYpe = produto.nome.includes("Ypê")
//      return produtosYpe
//  })

// console.log(marcaYpe)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

// const frase = marcaYpe.map((produto) => {
//      return `Compre ${produto.nome} por ${produto.preco}`
//     })

//     console.log(frase)