export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToSignUp = (navigate) => {
    navigate("/signup")
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goToFeed = (navigate) => {
    navigate("/")
}

export const goToPostDetailsPage = (navigate, postId) => {
    navigate(`/post/${postId}`)
}