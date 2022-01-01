import { DashboardDetails } from './DashboardDetails';
import { DashboardLog } from './DashboardLog';
import { DashboardMembers } from './DashboardMembers';
import { DashboardMenu } from './DashboardMenu';
import { DashboardTasks } from './DashboardTasks';

export const ProjectDashboard = ({ project }) => {
  if (!project) return <div>loading...</div>;
  return (
    <>
      <section className='project-dashboard'>
        <div className='project-dashboard-header'>
          <div className='list-header-item'>Dashboard</div>
        </div>
        <div className='project-dashboard-wrapper'>
          <DashboardMenu />
          <div className='project-dashboard-board'>
            <DashboardDetails />
            <DashboardMembers />
            <DashboardTasks />
            <DashboardLog />
          </div>
        </div>
      </section>
    </>
  );
};
