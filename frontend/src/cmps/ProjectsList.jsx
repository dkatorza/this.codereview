import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProjects } from "../store/actions/project.actions";
import { ProjectListPreview } from "./ProjectListPreview";

export const ProjectList = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projectModule);
  const [tableMargin, setTableMargin] = useState(false);
  const listwrapper = useRef(null);

  useEffect(() => {
    dispatch(loadProjects());
  }, []);

  useEffect(() => {
    checkScrollHeight();
  }, [projects]);

  const checkScrollHeight = () => {
    if (listwrapper.current.scrollHeight > 600) {
      setTableMargin("1rem");
    }
  };

  return (
    <>
      <div className='project-list-header'>
        <div className='list-header-item'>Project Name</div>
        <div className='list-header-item'>Importance</div>
        <div className='list-header-item'>Start date</div>
        <div className='list-header-item'>End date</div>
        <div className='list-header-item'>Members</div>
        <div className='list-header-item'>Last changed</div>
      </div>
      <div
        className='project-list-wrapper scroller'
        style={{ marginRight: `${tableMargin}` }}
        ref={listwrapper}>
        {projects.map((project) => (
          <Link to={`/projectspace/project/${project._id}`} key={project._id}>
            <ProjectListPreview project={project} />
          </Link>
        ))}
      </div>
    </>
  );
};
