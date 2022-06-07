import { useParams } from "react-router-dom"
import Header from "../components/Header"
import useProtectedPage from "../hooks/useProtectedPage"

export default function PostDetailPage() {
    useProtectedPage()
    const params = useParams()

    return(
        <>
        <Header
            isProtected={true} 
        />
        Pagina de detalhes do post {params.postId}
        </>
    )
}