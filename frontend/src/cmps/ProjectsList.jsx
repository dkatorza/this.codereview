import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { loadProjects } from "../store/actions/project.actions"



export const ProjectList = () => {

    const dispatch = useDispatch()
    const { projects } = useSelector(state => state.projectModule)
    
    useEffect(() => {
        dispatch(loadProjects())
    }, [projects])

    
   

    return (
        <>
            <div className="project-list-header">
                <div className="list-header-item">Project Name</div>
                <div className="list-header-item">Importance</div>
                <div className="list-header-item">Start date</div>
                <div className="list-header-item">End date</div>
                <div className="list-header-item">Members</div>
                <div className="list-header-item">Last changed</div>
            </div>
            <div className="project-list-wrapper scroller">
                {projects.map(project => (
                    <div
                        className="project-list-item"
                        key={project._id}
                    >
                        <div className="list-item-field">{project.title}</div>
                        <div className="list-item-field">{project.importance}</div>
                        <div className="list-item-field"> {project.startDate}</div>
                        <div className="list-item-field">{project.endDate}</div>
                        <div className="list-item-field"> {project.members}</div>
                        <div className="list-item-field"> {project.lastChanged}</div>
                    </div>
                ))}
            </div>
        </>

    )

}