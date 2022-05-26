import axios from "axios"
import { useEffect, useState } from "react"


export const useRequestData = (url, initialState) => {

    const [data, setData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(true)

    const getData = () => {
        const header = { 
            headers: {
                auth: localStorage.getItem("token")
            }
        }

        axios
            .get(url,header)
            .then((res) => {
                setData(res.data)
                setIsLoading(false)
            })
            .catch((err) => {
                console.error("Erro de requisição")
                console.log(err.response.data)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return [data, isLoading, getData]
}

