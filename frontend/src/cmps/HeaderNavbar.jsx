import { ReactComponent as Projects } from '../assets/img/projects.svg'
import { ReactComponent as Settings } from '../assets/img/settings.svg'

export const HeaderNavbar = () => {
    return (
        <div className="header-navbar-wrapper">
            <ul>
                <li><Projects className='svg' /><span>Projects</span> </li>
                <li><Settings className='svg' /><span>Settings</span> </li>
            </ul>   
        </div>
    )
}