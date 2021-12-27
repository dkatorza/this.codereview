import { Link } from "react-router-dom";
import { CRlistPreview } from "./CRlistPreview";

export const CRlist = ({ project }) => {
  return (
    <>
      <div className='cr-list-header'>
        <div className='list-header-item'>Id</div>
        <div className='list-header-item'>Importance</div>
        <div className='list-header-item'>Members</div>
        <div className='list-header-item'>Due date</div>
        <div className='list-header-item'>Status</div>
        <div className='list-header-item'>Last changed</div>
      </div>
      <div className='cr-list-wrapper scroller'>
        {project?.codeReview.map((cr) => (
          <Link
            to={`/projectspace/project/${project._id}/cr/${cr.id}`}
            key={cr.id}>
            <CRlistPreview cr={cr} />
          </Link>
        ))}
      </div>
    </>
  );
};
