function comparaDoisNumeros(num1:number, num2:number):number {
    let maiorNumero
    let menorNumero

    if (num1 > num2) {
        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1
    }

    const diferena:number = maiorNumero - menorNumero
    return diferena
}

console.log(comparaDoisNumeros(20, 50))