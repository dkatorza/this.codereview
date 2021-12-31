import { DashboardDetails } from "./DashboardDetails";
import { DashboardLog } from "./DashboardLog";
import { DashboardMembers } from "./DashboardMembers";
import { DashboardTasks } from "./DashboardTasks";

export const ProjectDashboard = ({ project }) => {
  if (!project) return <div>loading...</div>;
  return (
    <>
      <section className='project-dashboard'>
        <div className='project-dashboard-header'>
          <div className='list-header-item'>Dashboard</div>
        </div>
        <div className='project-dashboard-wrapper'>
          <div className='project-dashboard-board'>
            <DashboardDetails />
            <DashboardMembers />
            <DashboardTasks />
            <DashboardLog />
            {/* <div className='project-notes'>
              Notes
              <ul>
                <li>Project:</li>
                <li>Created At:</li>
                <li>Created By:</li>
                <li>Stack:</li>
                <li>Start Date:</li>
                <li>End Date:</li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
