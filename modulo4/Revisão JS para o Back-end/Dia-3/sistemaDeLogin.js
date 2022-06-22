const contas = [
    {
        email: "astrodev@labenu.com",
        password: "abc123"
    },
    {
        email: "bananinha@gmail.com",
        password: "bananinha"
    }
]

const login = (Email = "", senha = "") => {

    const validaEmail = Email.indexOf("@")
    const validaSenha = senha.length

    if(validaEmail === -1) {
        return "e-mail inválido"
    } else if (validaSenha < 6) {
        return "senha deve possuir no mínimo 6 caracteres"
    }

    for(var i = 0; i < contas.length; i++) {
        if (contas[i].email === Email && contas[i].password === senha) {
            return "login bem-sucedido"
        } else {
            return "e-mail ou senha incorretos"
        }
    }
}



console.log(login("astrodev@labenu.com", "abc123"))
console.log(login("bananinha@gmail.com", "banana"))
console.log(login("astrodev.labenu.com", "abc123"))
console.log(login("bananinha@gmail.com”, “ba"))