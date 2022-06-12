import { useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import CommentCard from "../components/CommentCard"
import Header from "../components/Header"
import PostCard from "../components/PostCard"
import GlobalStateContext from "../global/GlobalStateContext"
import useForm from "../hooks/useForm"
import useProtectedPage from "../hooks/useProtectedPage"
import { goBack, goToFeed } from "../routes/coordinator"
import { requestCreateComment } from "../services/requests"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import CssBaseline from '@mui/material/CssBaseline'
import Footer from "../components/Footer"


function PostDetailsPage() {

    useProtectedPage()

    const navigate = useNavigate()

    const params = useParams()

    const { form, onChange, clear } = useForm(({ body: "" }))

    const { states, getters } = useContext(GlobalStateContext)

    const { post, postComments } = states

    const { getPostComments } = getters

    useEffect(() => {
        if (post.id && post.id === params.postId) {
            getPostComments(post.id)
        } else {
            alert("Um erro ocorreu! Você será redirecionado para o Feed.")
            goToFeed(navigate)
        }
    }, [])

    const createComment = (event) => {
        event.preventDefault()
        requestCreateComment(form, clear, getPostComments, post.id)
    }

    const showComments = postComments.length ? postComments.map((comment) => {
        return (
            <CommentCard
                key={comment.id}
                comment={comment}
            />
        )
    }) : <p>Não há comentários para este post. Seja a primeira pessoa a comentar!</p>

    return (
        <>
            <Header
                isProtected={true}
            />
            <Container>
                <CssBaseline />

                <Box
                    fullWidth
                    sx={{
                        textAlign: "center",
                        marginTop: 7,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& .MuiTextField-root': { margin: 1 },
                        '& .MuiButton-root': { margin: 1 }
                    }}
                >
                    <main>
                        <Button variant="outlined" onClick={() => goBack(navigate)}>Voltar</Button>
                        <section>
                            <h2>Informações do Post</h2>
                            <PostCard
                                key={post.id}
                                post={post}
                                isFeed={false}
                            />
                        </section>
                        <section>
                            <h2>Escreva o seu comentário</h2>
                            <form onSubmit={createComment}>
                                <label htmlFor="body">Comentário: </label>
                                <input
                                    id="body"
                                    type={"text"}
                                    name="body"
                                    value={form.body}
                                    onChange={onChange}
                                    title="O nome deve ter no mínimo 5 caracteres"
                                    required
                                />
                                <br />
                                <Button variant="outlined" type="submit">Criar Post</Button>
                            </form>
                        </section>
                        <hr />
                        <section>
                            <h2>Lista de Comentários</h2>
                            {showComments}
                        </section>
                    </main>
                </Box>
            </Container>
            <Footer/>
        </>
    )
}

export default PostDetailsPage