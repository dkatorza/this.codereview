import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProjects } from "../store/actions/project.actions";
import { ProjectListPreview } from "./ProjectListPreview";

export const ProjectList = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projectModule);

  useEffect(() => {
    dispatch(loadProjects());
  }, []);

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
      <div className='project-list-wrapper scroller'>
        {projects.map((project) => (
          <Link to={`/projectspace/project/${project._id}`} key={project._id}>
            <ProjectListPreview project={project} />
          </Link>
        ))}
      </div>
    </>
  );
};
