import { useEffect, useState } from "react";

export const DashboardLogItem = ({ text }) => {
  const [style, setStyle] = useState("");
  const [criteria, setCriteria] = useState("");

  useEffect(() => {
    setTextColor();
  });

  useEffect(() => {
    setTextCriteria();
  });

  const setTextCriteria = () => {
    if (text.includes("Done")) {
      setCriteria("Done");
    }
    if (text.includes("In work")) {
      setCriteria("In work");
    }
    if (text.includes("Opend Issue")) {
      setCriteria("Opend Issue");
    }
  };

  const setTextColor = () => {
    if (criteria == "Done") setStyle("SpringGreen");
    if (criteria == "In work") setStyle("Cyan");
    if (criteria == "Opend Issue") setStyle("tomato");
  };

  const regex = new RegExp(`(${criteria})`, "gi");
  const parts = text.split(regex);

  return (
    <ul>
      <li>
        {parts &&
          parts.filter(String).map((part, i) => {
            return regex.test(part) ? (
              <span style={{ color: `${style}` }} key={i}>
                {part}
              </span>
            ) : (
              <span key={i}>{part}</span>
            );
          })}
      </li>
    </ul>
  );
};
