import { BreadCrumbs } from "../cmps/Breadcrumbs"
import { ProjectBar } from "../cmps/ProjectBar"
import { ProjectList } from "../cmps/ProjectsList"


export const Projectspace = () => {

   

    return (
        <>
            <section className="project-space-wrapper">
    
                <div className="project-bar">
                    <ProjectBar />
                </div>
                <ProjectList/>
            </section>
        </>
    )
}