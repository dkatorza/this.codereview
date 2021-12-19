import { SideNavbar } from "../cmps/HeaderNavbar"
import { ProjectFile } from "../cmps/ProjectFile"

export const Projectspace = () => {
    return (
        <>
            <section className="project-space-wrapper">
                <div className="project-bar">
                    <ProjectFile />
                </div>
            </section>
        </>
    )
}