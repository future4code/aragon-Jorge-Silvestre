enum ROLE {
    ADMIN = "admin",
    USER = "user"
}

type Usuarios = {
    name:string,
    email:string,
    role:ROLE
}

function imprimeUsuariosAdmin(usuarios:Usuarios[]):string[] {
    const usuariosAdmin = usuarios.filter((usuario) => {
        return usuario.role === "admin"
    })
    
    const emailUsuariosAdmin = usuariosAdmin.map((usuario) => {
        return usuario.email
    })

    return emailUsuariosAdmin
}

console.log(imprimeUsuariosAdmin([
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
]))