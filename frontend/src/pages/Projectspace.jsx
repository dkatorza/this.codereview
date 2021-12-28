import { ProjectBar } from "../cmps/ProjectBar";
import { ProjectList } from "../cmps/ProjectsList";

export const Projectspace = () => {
  return (
    <>
      <ProjectBar />
      <section className='project-space-wrapper'>
        <ProjectList />
      </section>
    </>
  );
};
