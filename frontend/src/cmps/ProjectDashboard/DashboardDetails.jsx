import { useSelector } from 'react-redux';
import { DashboardStack } from './DashboardStack';

export const DashboardDetails = () => {
  const { project } = useSelector((state) => state.projectModule);
  return (
    <div className='dashboard-project-details'>
      <ul>
        <li>
          <h4>Project:</h4> {project.title}
        </li>
        <li>
          <h4>Created At:</h4>
          {new Date(project.createdAt).toLocaleDateString()}
        </li>
        <li>
          <h4>Created By:</h4> {project.createdBy}
        </li>
        <li>
          <h4>Stack:</h4> <DashboardStack />
        </li>
        <li>
          <h4>Start Date:</h4>
          {new Date(project.startDate).toLocaleDateString()}
        </li>
        <li>
          <h4>End Date</h4>: {new Date(project.endDate).toLocaleDateString()}
        </li>
        <li>
          <h4>Importance:</h4> {project.importance.level}
        </li>
        <li>
          <h4>Progress:</h4> <progress id='test' value='32' max='100' />
        </li>
      </ul>
    </div>
  );
};
