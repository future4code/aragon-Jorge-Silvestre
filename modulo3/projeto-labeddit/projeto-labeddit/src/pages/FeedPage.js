import { useContext, useEffect } from "react";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import GlobalStateContext from "../global/GlobalStateContext";
import useForm from "../hooks/useForm";
import useProtectedPage from "../hooks/useProtectedPage";
import { requestCreatePost } from "../services/requests";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import styled from "styled-components";
import TextField from "@mui/material/TextField"
import  Container  from "@mui/material/Container"
import CssBaseline from '@mui/material/CssBaseline';
import Footer from "../components/Footer";



const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2em;
    h3 {
        background-color: #66b0f9;
    }
`


export default function FeedPage() {


    useProtectedPage()

    const { form, onChange, clear } = useForm({ title: "", body: "" })

    const { states, setters, getters } = useContext(GlobalStateContext)

    const { posts, page, isLoading } = states

    const { setPage } = setters

    const { getPosts } = getters

    useEffect(() => {
        getPosts()
    }, [])

    const createPost = (event) => {
        event.preventDefault()

        requestCreatePost(form, clear, getPosts)
    }

    const showPosts = posts.length && posts.map((post) => {
        return (
            <PostCard
                key={post.id}
                post={post}
                isFeed={true}
            />
        )
    })

    const changePage = (sum) => {
        const nextPage = page + sum
        setPage(nextPage)
        getPosts(nextPage)
    }

    return (
        <>
            <Header
                isProtected={true}
            />
            <Container>
            <CssBaseline/>
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
                
                    <section>
                        <h2>Crie um novo Post</h2>
                        <form onSubmit={createPost}>
                            <TextField
                                label="Título:"
                                id={"title"}
                                name={"title"}
                                value={form.title}
                                onChange={onChange}
                                title={"O nome deve ter no mínimo 5 caracteres"}
                                required
                                variant="outlined"
                            />
                            <br />
                            <TextField
                                label="Texto do post:"
                                id={"body"}
                                type={"text"}
                                name={"body"}
                                value={form.body}
                                onChange={onChange}
                                title={"O nome deve ter no mínimo 5 caracteres"}
                                required
                                variant="outlined"
                            />
                            <br />
                            <Button variant="outlined" type={"submit"}>Criar Post</Button>
                        </form>
                    </section>
                    <hr />
                    <section>
                        <h2>Lista de Posts</h2>
                        <nav>
                            <h2>Selecione uma página</h2>
                            {page !== 1 &&
                                <Button variant="outlined" onClick={() => changePage(-1)}>Voltar página</Button>
                            }
                            <span> Página {page} </span>
                            {posts.length &&
                                <Button variant="outlined" onClick={() => changePage(1)}>Próxima página</Button>
                            }
                        </nav>
                        <hr />
                        <Section>
                            {isLoading ? <p>Carregando...</p> : showPosts}
                        </Section>
                    </section>
                </main>
            </Box>
            </Container>
            <Footer/>
        </>
    )
}