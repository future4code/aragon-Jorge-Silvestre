const geraTabuada = (numberOneToTen) => {

    if (numberOneToTen > 0 && numberOneToTen < 11) {

        for (let i = 1; i < 11; i++) {
            console.log(`${numberOneToTen} x ${i} = ${numberOneToTen * i}`)
        }

    } else {
        return "Erro. Parâmetro inválido (’número precisa valer entre 1 e 10’)."
    }

}

console.log(geraTabuada(5)) 
console.log(geraTabuada(50))