import { BreadCrumbs } from "./Breadcrumbs"
import { ReactComponent as CreateProject } from '../assets/img/createproject.svg'

export const ProjectBar = () => {
    return (
        <>  
        <BreadCrumbs/>
        <div className="project-add-wrapper"><CreateProject className="svg pointer"/></div>
        </>
    )
}