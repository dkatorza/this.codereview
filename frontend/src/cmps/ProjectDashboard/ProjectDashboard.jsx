import { Avatars } from "../Avatars";
import { DashboardLog } from "./DashboardLog";
import { DashboardTodo } from "./DashboardTodo";

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
            <div className='1'>
              <ul>
                <li>Project: {project.title}</li>
                <li>
                  Created At: {new Date(project.createdAt).toLocaleDateString()}
                </li>
                <li>Created By: {project.createdBy}</li>
                <li>Stack:</li>
                <li>
                  Start Date: {new Date(project.startDate).toLocaleDateString()}
                </li>
                <li>
                  End Date: {new Date(project.endDate).toLocaleDateString()}
                </li>
                <li>
                  Progress: <progress id='test' value='32' max='100' />
                </li>
              </ul>
            </div>
            <div>
              Members:
              <Avatars />
            </div>
            <div className='3'>
              Recent tasks:
              <DashboardTodo />
            </div>
            <div className='log'>
              Log:
              <DashboardLog />
            </div>
            <div className='5'>
              Notes
              <ul>
                <li>Project:</li>
                <li>Created At:</li>
                <li>Created By:</li>
                <li>Stack:</li>
                <li>Start Date:</li>
                <li>End Date:</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
