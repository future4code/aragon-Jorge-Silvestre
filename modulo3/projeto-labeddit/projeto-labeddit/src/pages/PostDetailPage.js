import { useParams } from "react-router-dom"

export default function PostDetailPage() {
    const params = useParams()

    return(
        <>
        Pagina de detalhes do post {params.postId}
        </>
    )
}