import { useSelector } from "react-redux";

export const DashboardDetails = () => {
  const { project } = useSelector((state) => state.projectModule);
  return (
    <div className='project-details'>
      <ul>
        <li>Project: {project.title}</li>
        <li>Created At: {new Date(project.createdAt).toLocaleDateString()}</li>
        <li>Created By: {project.createdBy}</li>
        <li>Stack:</li>
        <li>Start Date: {new Date(project.startDate).toLocaleDateString()}</li>
        <li>End Date: {new Date(project.endDate).toLocaleDateString()}</li>
        <li>Importance: {project.importance}</li>
        <li>
          Progress: <progress id='test' value='32' max='100' />
        </li>
      </ul>
    </div>
  );
};
