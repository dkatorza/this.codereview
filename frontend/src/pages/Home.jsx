import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Home = () => {

    const navigate = useNavigate()

    useEffect(() => {
        navigate('/projectspace')
    },[])

    return (
        <h1>g</h1>
    )
}