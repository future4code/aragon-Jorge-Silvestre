import { useNavigate } from "react-router-dom"
import { goToFeed } from "../routes/coordinator"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"


export default function ErrorPage() {
    const navigate = useNavigate()

    return (
        <Box
        fullWidth
            sx={{
                textAlign: "center",
                marginTop: 7,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& .MuiTextField-root': { margin: 1 },
                '& .MuiButton-root': {margin: 1}
            }}>
            <h1>Error 400 - Página não encontrada!</h1>
            <Button variant="outlined" onClick={() => goToFeed(navigate)}>Ir para Feed</Button>
        </Box>
    )
}