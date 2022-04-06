/*
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const fraseBoasVindas = console.log("Boas vindas ao jogo de Blackjack!")   

if(confirm("Quer iniciar uma nova rodada?")) {
	const carta1Usuario = comprarCarta()
   const carta2Usuario = comprarCarta()

   let pontosUsuario = carta1Usuario.valor + carta2Usuario.valor

   const carta1Computador = comprarCarta()
   const carta2Computador =comprarCarta()

   let pontosComputador = carta1Computador.valor + carta2Computador.valor

console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto}  - pontuação ${pontosUsuario}`)

console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto}  - pontuação ${pontosComputador}`)
	
if (pontosUsuario > pontosComputador) {
      console.log("O usuário ganhou!")
   } else if (pontosComputador > pontosUsuario) {
      console.log("O computador ganhou!")
   }  else {
      console.log("Empate!")
   }

} else {
	console.log("O jogo acabou.")
}


