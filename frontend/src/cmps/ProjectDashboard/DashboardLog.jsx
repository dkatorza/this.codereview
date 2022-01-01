import { useSelector } from 'react-redux';
import { DashboardLogItem } from './DashboardLogItem';

export const DashboardLog = () => {
  const activities = useSelector(
    (state) => state.projectModule.project.activities
  );

  return (
    <div className='dashboard-log-wrapper'>
      <h4>Log:</h4>
      <div className='log-list scroller'>
        {activities.map((activity, idx) => (
          <DashboardLogItem text={activity} key={idx} />
        ))}
      </div>
    </div>
  );
};
