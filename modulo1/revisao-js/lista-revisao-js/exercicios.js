// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   const tamanhoArray = array.length
   return tamanhoArray
}

const array1 = [1,2,3,4,5,6,7,8,9]

console.log(retornaTamanhoArray(array1))

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    const arrayInvertido = array.reverse()
    return arrayInvertido
}

const array2 = [1,2,3,4,5,6,7,8,9]

console.log(retornaArrayInvertido(array2))

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const arrayOrdenado = array.sort((a,b) => {
        if (a > b) return 1;
        if (a < b) return - 1;
        return 0;
    })
    return arrayOrdenado
}

const array3 = [36,12,56,7,3]

console.log(retornaArrayOrdenado(array3))

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}