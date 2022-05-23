import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Perfis.css"

function PerfisPage() {

    const [perfil, setPerfil] = useState({})
    


    useEffect(() => {
        buscaPerfil()
    }, [])

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


    const escolhePerfil = (perfilId, escolha) => {
        const body = {
            id: perfilId,
            choice: escolha
        }

        axios
            .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jorge-silvestre-aragon/choose-person", body)
            .then((res) => {
                if (body.choice && res.data.isMatch) {
                    alert("Deu Match!")
                }
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

    const cardDePerfis = perfil ? (
        <figure>
            <img src={perfil.photo} alt={perfil.photo_alt} />
            <p>Nome: {perfil.name}</p>
            <p>Idade: {perfil.age}</p>
            <p>Biografia: {perfil.bio}</p>
            <button className="glow-on-hover2" onClick={() => { escolhePerfil(perfil.id, false) }}>❌</button>
            <button className="glow-on-hover2" onClick={() => { escolhePerfil(perfil.id, true) }}>❤️‍🔥</button>
            
        </figure>
    ) :(
        <>
        <h3>Acabaram os matches! Clique em 'Resetar Perfis' para reiniciar</h3>
        <button className="glow-on-hover" onClick={() => resetarPerfis()}>Resetar Perfis</button>
        </>
    )
    
    return (
        <div>
            <h2>Perfis</h2>
            {cardDePerfis}
        </div>
    )
}

export default PerfisPage