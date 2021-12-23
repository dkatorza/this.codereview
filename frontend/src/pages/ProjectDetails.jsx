import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import { loadProject } from "../store/actions/project.actions"

export const ProjectDetails = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const {pathname} = useLocation()

    useEffect(() => {
        dispatch(loadProject(params.id))
    }, [params.id])

    return (
        <>
            <h1>hello project id {`${params.id}`}</h1>
            <h1>hello project location {pathname}</h1>
            <h1></h1>
        </>

    )
}