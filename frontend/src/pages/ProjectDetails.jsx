import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BreadCrumbs } from "../cmps/Breadcrumbs";
import { CRlist } from "../cmps/CRlist";
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
      <BreadCrumbs />
      <section className='project-details-wrapper'>
        <CRlist project={project} />
      </section>
    </>
  );
};
