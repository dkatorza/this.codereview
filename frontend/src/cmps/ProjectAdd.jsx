import { useDispatch } from 'react-redux';
import {onSaveProject} from '../store/actions/project.actions'
import { ReactComponent as CreateProject } from '../assets/img/createproject.svg'

export const ProjectAdd = () => {
    const dispatch = useDispatch()

    const onCreateProject = async () => {
        console.log('hi there');
        // const {title} = this.state
        // if (!title) return
        const projectToSave = {
            title: 'testtitle',
            createdBy: 'testuser'
        }
        try {
            await dispatch(onSaveProject(projectToSave))

        } catch (err) {
            console.log('could Not Load Board')
        }
    }

    return (
        <div className="project-add-wrapper" onClick={onCreateProject}><CreateProject className="svg"/></div>
    )
}