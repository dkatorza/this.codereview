import logo from '../assets/img/projectsheaderlogo1green.png'
import { HeaderNavbar } from '../cmps/HeaderNavbar'

export const ProjectsHeader = () => {
    return (
        <section className='project-header-wrapper'>
            <div className="projects-header-logo">
                <img src={logo} alt="this.codereview logo" />
            </div>
            <div className="project-header-side">
                <input type="text" placeholder="Search project..." />
                <HeaderNavbar />
            </div>
        </section>
    )
}