import { ReactComponent as PathTcrIcon } from '../assets/img/path-tcr.svg'
import { ReactComponent as PathProjectsIcon } from '../assets/img/path-project.svg'
import { ReactComponent as PathFileIcon } from '../assets/img/path-file.svg'
import { ReactComponent as PathCRIcon } from '../assets/img/path-review.svg'

export const BreadCrumbs = () => {
    return (
        <div className="breadcrumbs-wrapper">
            <div className="path-start"><PathTcrIcon style={{ marginLeft: '1.5rem' }} class='icons' /><span>tcr:</span></div>
            <div className="path-projects"><PathProjectsIcon class='icons' /><span>demoproject</span> </div>
            <div className="path-project-file"><PathFileIcon class='icons' /><span>demofile</span> </div>
            <div className="path-project-cr"><PathCRIcon class='icons' /><span>democr</span></div>
        </div>
    )
}