import { BreadCrumbs } from "../cmps/Breadcrumbs"
import { ProjectBar } from "../cmps/ProjectBar"

export const Projectspace = () => {
    return (
        <>
            <section className="project-space-wrapper">
                <BreadCrumbs />
                <div className="project-bar">
                    <ProjectBar />
                </div>
            </section>
        </>
    )
}