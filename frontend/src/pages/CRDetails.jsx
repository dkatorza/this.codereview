import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProjectBar } from "../cmps/ProjectBar";
import { loadCr, loadProject } from "../store/actions/project.actions";

export const CRDetails = () => {
  const dispatch = useDispatch();
  const { project } = useSelector((state) => state.projectModule);
  const { cr } = useSelector((state) => state.projectModule);
  const params = useParams();

  useEffect(() => {
    setCr();
  }, []);

  const setCr = async () => {
    await dispatch(loadProject(params.id));
    await dispatch(loadCr(params.cr_id, params.id));
  };

  if (!cr) return <h2>loading...</h2>; // change to proper loader
  return (
    <>
      <ProjectBar />
      <section className='cr-details-wrapper'>
        <h1>here in cr #{params.cr_id} details page</h1>
        <pre>{cr && cr[0].cr_review}</pre>
      </section>
    </>
  );
};
