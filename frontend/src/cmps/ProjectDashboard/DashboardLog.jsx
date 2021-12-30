import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { DashboardLogItem } from "./DashboardLogItem";

export const DashboardLog = () => {
  const activities = useSelector(
    (state) => state.projectModule.project.activities
  );

  return (
    <>
      {activities.map((activity, idx) => (
        <DashboardLogItem text={activity} key={idx} highlight={"Done"} />
      ))}
    </>
  );
};
