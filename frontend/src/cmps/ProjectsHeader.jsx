import logo from '../assets/img/projectsheaderlogo1.png'
import { HeaderNavbar } from '../cmps/HeaderNavbar'

export const ProjectsHeader = () => {
    return (
        <section className='project-header-wrapper'>
            <div className="projects-header-logo">
                <img src={logo} alt="this.codereview logo" />
            </div>
            <HeaderNavbar/>
        </section>
    )
}