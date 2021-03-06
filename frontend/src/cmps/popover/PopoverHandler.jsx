import { useDispatch, useSelector } from "react-redux";
import { PopoverAddProject } from "./PopoverAddProject";

export const PopoverHandler = () => {
  const { name } = useSelector((state) => state.appModule.currPopover);
  switch (name) {
    case "CREATE_PROJECT":
      return <PopoverAddProject />;
    default:
      return "";
  }
};
