import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Perfis.css"

function PerfisPage () {

    const [perfil,setPerfil] = useState({})
    const [mudarPerfil, setMudarPerfil] = useState(0)

    
    useEffect (() => {
        buscaPerfil()
    },[mudarPerfil])

    const buscaPerfil = () => {
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jorge-silvestre-aragon/person")
            .then((res) => {
                setPerfil(res.data.profile)
            })
            .catch((err) => {
                console.error(err.data)
            })
    }

    const proximoPerfil = () => {
        setMudarPerfil(mudarPerfil + 1)
    }

    const escolhePerfil = (perfilId,escolha) => {
        const body = {
            id: perfilId,
            choice: escolha
        }

        axios
        .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jorge-silvestre-aragon/choose-person",body)
        .then(() => {
            buscaPerfil()
        })
        .catch((err) => {
            console.error(err.data)
        })
    }

    const resetarPerfis = () => {
        axios
        .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jorge-silvestre-aragon/clear")
        .then(() => {
            alert("Perfis resetados com sucesso")
            buscaPerfil()
        })
        .catch((err) => {
            console.error(err.data)
        })
    }

    return(
        <div>
            <h3>Perfis</h3>
            <img src={perfil.photo} alt={perfil.photo_alt}/>
            <p>Nome: {perfil.name}</p>
            <p>Idade: {perfil.age}</p>
            <p>Biografia: {perfil.bio}</p>
            <button onClick={() => {escolhePerfil(perfil.id,false)}}>Deslike</button>
            <button onClick={() => {escolhePerfil(perfil.id,true)}}>Like</button>
            <br/>
            <button onClick={resetarPerfis}>Resetar Perfis</button>
            <button onClick={proximoPerfil}>Próximo perfil</button>
        </div>
    )
}

export default PerfisPage