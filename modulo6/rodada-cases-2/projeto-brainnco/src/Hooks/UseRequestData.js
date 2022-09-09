import axios from 'axios'
import { useEffect, useState } from 'react'

const UseRequestData = (estadoInicial, url) => {
    const [data, setData] = useState(estadoInicial)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
            axios.get(url)
                .then((res) => {
                    setLoading(false)
                    setData(res.data)
                })
                .catch((err) => {

                })
    }, [url])

    return [data, setData, loading]
}

export default UseRequestData