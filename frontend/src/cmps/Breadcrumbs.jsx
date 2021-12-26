import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as PathTcrIcon } from "../assets/img/path-tcr.svg";
import { ReactComponent as PathProjectsIcon } from "../assets/img/path-project.svg";
import { ReactComponent as PathFileIcon } from "../assets/img/path-file.svg";
import { ReactComponent as PathCRIcon } from "../assets/img/path-review.svg";

export const BreadCrumbs = () => {
  const { loggedInUser } = useSelector((state) => state.appModule); // for now with dummy username
  const { project } = useSelector((state) => state.projectModule);
  const { pathname } = useLocation();

  useEffect(() => {}, [pathname]);

  return (
    <div className='breadcrumbs-wrapper'>
      <div className='path-start'>
        <PathTcrIcon style={{ marginLeft: "1.5rem" }} className='icons' />
        <span>tcr:</span>
      </div>
      {pathname.includes("projectspace") && (
        <div className='path-projects'>
          <PathProjectsIcon className='icons' />
          <span>
            <Link to={`/projectspace`}>{loggedInUser} @ Projects</Link>
          </span>
        </div>
      )}
      {pathname.includes("projectspace/project") && (
        <div className='path-project-file'>
          <PathFileIcon className='icons' />
          <span>
            <Link to={`/projectspace/project/${project?._id}`}>
              {project?.title}
            </Link>
          </span>
        </div>
      )}
      {pathname.includes("/cr") && (
        <div className='path-project-cr'>
          <PathCRIcon className='icons' />
          <span>democr</span>
        </div>
      )}
    </div>
  );
};
