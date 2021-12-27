import { BreadCrumbs } from "../cmps/Breadcrumbs";
import { ProjectList } from "../cmps/ProjectsList";

export const Projectspace = () => {
  return (
    <>
      <BreadCrumbs />
      <section className='project-space-wrapper'>
        <ProjectList />
      </section>
    </>
  );
};
