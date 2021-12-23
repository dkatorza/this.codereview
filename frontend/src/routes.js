import { Home } from './pages/Home'
import { ProjectDetails } from './pages/ProjectDetails'
import { Projectspace } from './pages/Projectspace'


export const routes = [

    {
        path: '/',
        component: <Home/>,
    },
    {
        path: '/projectspace',
        component: <Projectspace />
    },
    {
        path: 'projectspace/project/:id',
        component: <ProjectDetails />
    }

]