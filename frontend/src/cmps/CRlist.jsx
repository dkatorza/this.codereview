import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProject } from "../store/actions/project.actions";
import { CRlistPreview } from "./CRlistPreview";
import { useParams } from "react-router-dom";

export const CRlist = ({ project }) => {
  return (
    <>
      <div className='cr-list-header'>
        <div className='list-header-item'>Id</div>
        <div className='list-header-item'>Importance</div>
        <div className='list-header-item'>Members</div>
        <div className='list-header-item'>Due date</div>
        <div className='list-header-item'>Status</div>
      </div>
      <div className='cr-list-wrapper scroller'>
        {project?.codeReview.map((cr) => (
          <Link to={`/projectspace/project/${cr.id}`} key={cr.id}>
            <CRlistPreview cr={cr} />
          </Link>
        ))}
      </div>
    </>
  );
};
