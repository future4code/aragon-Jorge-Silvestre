import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { goToLogin } from "../routes/coordinator";

export default function FeedPage() {
    const navigate = useNavigate()

    useEffect(() => {
        const token = window.localStorage.getItem("token-labeddit")
        if(!token) {
            goToLogin(navigate)
        }
    },[])

    return(
        <>
        <Header/>
        <hr/>
        <h2>Crie um novo Post</h2>
        <hr/>
        <h2>Lista de Posts</h2>
        </>
    )
}