import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeed } from "../routes/coordinator"

export const requestLogin = (form, clear, navigate) => {
    const body = {
        email: form.email,
        password: form.password
    }

    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token-labeddit", res.data.token)
            localStorage.setItem("userEmail", form.email)
            alert("Login realizado com sucesso!")
            goToFeed(navigate)
        })
        .catch((err) => {
            alert("Email e/ou senha inválidos! Tente novamente")
            clear()
        })
}

export const requestSignup = (form, clear, navigate) => {
    const body = {
        username: form.name,
        email: form.email,
        password: form.password
    }

    axios.post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token-labeddit", res.data.token)
            localStorage.setItem("userEmail", form.email)
            alert("Usuário criado com sucesso! Seja bem-vindo!")
            goToFeed(navigate)
        })
        .catch((err) => {
            alert("Algo deu errado! Tente novamente")
            clear()
        })
}

export const requestCreatePost = (form, clear, getPosts) => {
    const header = {
        headers: {
            authorization: localStorage.getItem("token-labeddit")
        }
    }

    const body = {
        title: form.title,
        body: form.body
    }

    axios.post(`${BASE_URL}/posts`, body, header)
        .then((res) => {
            alert(res.data)
            getPosts()
            clear()
        })
        .catch((err) => {
            console.error(err.message)
        })
}

export const requestCreateComment = (form, clear, getPostComments, postId) => {
    const header = {
        headers: {
            authorization: localStorage.getItem("token-labeddit")
        }
    }

    const body = {
        body: form.body
    }

    axios.post(`${BASE_URL}/posts/${postId}/comments`, body, header)
        .then((res) => {
            alert(res.data)
            getPostComments(postId)
            clear()
        })
        .catch((err) => {
            console.error(err.message)
        })
}