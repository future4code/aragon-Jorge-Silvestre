// Exercicio 2

const operaçãoMatematica = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

const realizaOperacaoMatematica = () => {
    switch (operaçãoMatematica) {
        case "add":
            return num1 + num2;
        case "sub":
            return num1 - num2;
        case "mult":
            return num1 * num2;
        case "div":
            return num1 / num2;
        default:
            return "Operação matemática inválida"
    }
}

console.log(realizaOperacaoMatematica())