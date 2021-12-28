import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CRlist } from "../cmps/CRlist";
import { ProjectBar } from "../cmps/ProjectBar";
import { ProjectDashboard } from "../cmps/ProjectDashboard";
import { loadProject } from "../store/actions/project.actions";

export const ProjectDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { project } = useSelector((state) => state.projectModule);

  useEffect(() => {
    dispatch(loadProject(params.id));
  }, [params.id]);

  return (
    <>
      <ProjectBar />
      <section className='project-details-wrapper'>
        <div>
          <CRlist project={project} />
        </div>
        <div>
          <ProjectDashboard />
        </div>
      </section>
    </>
  );
};
