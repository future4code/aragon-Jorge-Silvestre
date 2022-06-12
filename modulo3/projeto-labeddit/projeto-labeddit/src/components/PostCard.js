import { format } from "date-fns"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import GlobalStateContext from "../global/GlobalStateContext"
import { goToPostDetailsPage } from "../routes/coordinator"
import { requestChangePostVote, requestCreatePostVote, requestDeletePostVote } from "../services/requests"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button"



function PostCard(props) {

    const navigate = useNavigate()

    const { setters, getters } = useContext(GlobalStateContext)

    const [isDownVoted, setIsDownVoted] = useState(false)

    const [isUpVoted, setIsUpVoted] = useState(false)

    const { setPost } = setters

    const { getPosts } = getters

    const { id, userId, title, body, createdAt, voteSum, commentCount, userVote } = props.post

    const date = createdAt && format(new Date(createdAt), 'dd/MM/yyyy')

    useEffect(() => {
        if (userVote) {
            userVote === 1 ? setIsUpVoted(true) : setIsDownVoted(true)
        }
    }, [userVote])

    const goToComments = () => {
        setPost(props.post)
        goToPostDetailsPage(navigate, id)
    }

    const chooseVote = (typeVote) => {
        if (typeVote === "up") {
            if (isDownVoted) {
                requestChangePostVote(id, 1, getPosts)
                setIsUpVoted(true)
                setIsDownVoted(false)
            } else {
                requestCreatePostVote(id, 1, getPosts)
                setIsUpVoted(true)
            }
        } else {
            if (isUpVoted) {
                requestChangePostVote(id, -1, getPosts)
                setIsDownVoted(true)
                setIsUpVoted(false)
            } else {
                requestCreatePostVote(id, -1, getPosts)
                setIsDownVoted(true)
            }
        }
    }

    const removeVote = (typeVote) => {
        requestDeletePostVote(id, getPosts)
        typeVote === "up" ? setIsUpVoted(false) : setIsDownVoted(false)
    }

    const showVoteButtons = props.isFeed && (
        <>
            {userVote && isDownVoted ?
                <Button variant="outlined" onClick={() => removeVote("down")}>Remover Voto "Não Gostei"</Button>
                : <Button variant="outlined" onClick={() => chooseVote("down")}>
                    {isUpVoted ? `Mudar voto para "Não gostei"` : `Votar em "Não Gostei"`}
                </Button>
            }
            <br />
            {userVote && isUpVoted ?
                <Button variant="outlined" onClick={() => removeVote("up")}>Remover voto "Gostei"</Button>
                : <Button variant="outlined" onClick={() => chooseVote("up")}>
                    {isDownVoted ? `Mudar voto para "Gostei"` : `Votar em "Gostei"`}
                </Button>
            }
        </>
    )

    return (
        <Card sx={{ maxWidth: 345 }}>
            <h3>{title}</h3>
            <span><b>Autor: </b>{userId}</span>
            <p>Criado em {date}</p>
            <CardMedia component="img"
                height="194" src={"https://picsum.photos/200/300?random=" + id} alt="Imagem aleatória do post"
            >
            </CardMedia>
            <p><b>Descrição: </b>{body}</p>
            <p>Votos: {voteSum ? voteSum : 0}</p>
            {showVoteButtons}
            <p>Comentários: {commentCount ? commentCount : 0}</p>
            {props.isFeed && <Button variant="outlined" onClick={goToComments}>Ver comentários</Button>}
        </Card>
    )
}

export default PostCard