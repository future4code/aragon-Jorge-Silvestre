const converteTemperatura = (grausCelsius, escala) => {

    if (typeof grausCelsius !== "number") {

        return `Parâmetro inválido (${grausCelsius})`

    } else if (escala !== "F" && escala !== "K") {

        return `Parâmetro inválido (${escala})`
    
    } else if (escala === "F") {
        const converteGrausParaF = (grausCelsius * 9 / 5) + 32
        return `${grausCelsius}° Celsius é equivalente a ${converteGrausParaF}° Farenheit. `
    } else {
        const converteGrausParaK = grausCelsius + 273.15
        return `${grausCelsius}° Celsius é equivalente a ${converteGrausParaK}° Kelvin.`
    }

}

converteTemperatura(30, "F")