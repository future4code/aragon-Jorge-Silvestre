import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import { requestChangeCommentVote, requestCreateCommentVote, requestDeleteCommentVote } from "../services/requests";
import Button from "@mui/material/Button"


function CommentCard(props) {

    const { getters } = useContext(GlobalStateContext)

    const [isDownVoted, setIsDownVoted] = useState(false)

    const [isUpVoted, setIsUpVoted] = useState(false)

    const { getPostComments } = getters

    const { id, userId, postId, body, createdAt, voteSum, userVote } = props.comment

    const date = createdAt && format(new Date(createdAt), "dd/MM/yyyy")

    useEffect(() => {
        if (userVote) {
            userVote === 1 ? setIsUpVoted(true) : setIsDownVoted(true)
        }
    }, [userVote])

    const chooseVote = (typeVote) => {
        if (typeVote === "up") {
            if (isDownVoted) {
                requestChangeCommentVote(id, 1, getPostComments, postId)
                setIsUpVoted(true)
                setIsDownVoted(false)
            } else {
                requestCreateCommentVote(id, 1, getPostComments, postId)
                setIsUpVoted(true)
            }
        } else {
            if (isUpVoted) {
                requestChangeCommentVote(id, -1, getPostComments, postId)
                setIsDownVoted(true)
                setIsUpVoted(false)
            } else {
                requestCreateCommentVote(id, -1, getPostComments, postId)
                setIsDownVoted(true)
            }
        }
    }

    const removeVote = (typeVote) => {
        requestDeleteCommentVote(id, getPostComments, postId)
        typeVote === "up" ? setIsUpVoted(false) : setIsDownVoted(false)
    }

    const showVoteButtons = (
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
        <article>
            <h3>{body}</h3>
            <span><b>Autor:</b>{userId}</span>
            <p>Criado em {date}</p>
            <p>Votos: {voteSum ? voteSum : 0}</p>
            {showVoteButtons}
            <hr />
        </article>
    )
}

export default CommentCard