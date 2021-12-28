import { useEffect, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CRlistPreview } from "./CRlistPreview";

export const CRlist = ({ project }) => {
  useEffect(() => {
    checkScrollHeight();
  }, [project]);

  const [tableMargin, setTableMargin] = useState(false);
  const listwrapper = useRef(null);

  const checkScrollHeight = () => {
    if (listwrapper.current.scrollHeight > 500) {
      setTableMargin("1rem");
    }
  };

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
      <div
        className='cr-list-wrapper scroller'
        style={{ marginRight: `${tableMargin}` }}
        ref={listwrapper}>
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
