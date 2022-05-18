import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Perfis.css"

function PerfisPage () {

    const [img, setImg] = useState("")
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState(0)
    const [biografia, setBiografia] = useState("")
    const [alt, setAlt] = useState("")
    const [mudarPerfil, setMudarPerfil] = useState(0)

    useEffect(() => {
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jorge-silvestre-aragon/person")
            .then((res) => {
                setImg(res.data.profile.photo)
                setNome(res.data.profile.name)
                setIdade(res.data.profile.age)
                setBiografia(res.data.profile.bio)
                setAlt(res.data.profile.alt)
            })
            .catch((err) => {
                console.error(err.data)
            })
    },[mudarPerfil])

    const proximoPerfil = () => {
        setMudarPerfil(mudarPerfil + 1)
    }

    return(
        <div>
            <h3>Perfis</h3>
            <img src={img} alt={alt}/>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Biografia: {biografia}</p>
            <button onClick={proximoPerfil}>Próximo perfil</button>
        </div>
    )
}

export default PerfisPage