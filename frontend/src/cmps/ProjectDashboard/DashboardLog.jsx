import { useSelector } from "react-redux";
import { DashboardLogItem } from "./DashboardLogItem";

export const DashboardLog = () => {
  const activities = useSelector(
    (state) => state.projectModule.project.activities
  );

  return (
    <div className='log'>
      Log:
      {activities.map((activity, idx) => (
        <DashboardLogItem text={activity} key={idx} />
      ))}
    </div>
  );
};
