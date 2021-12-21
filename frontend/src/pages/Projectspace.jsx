import { ProjectBar } from "../cmps/ProjectBar"
import { ProjectList } from "../cmps/ProjectsList"


export const Projectspace = () => {

   

    return (
        <>
        <div className="bggg"></div>
            <section className="project-space-wrapper">
                <div className="project-bar">
                    <ProjectBar />
                </div>
                <ProjectList/>
            </section>
        </>
    )
}