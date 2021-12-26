import { BreadCrumbs } from "./Breadcrumbs";
import { ReactComponent as CreateProject } from "../assets/img/createproject.svg";
import { useDispatch, useSelector } from "react-redux";
import { openPopover } from "../store/actions/app.actions";

export const ProjectBar = () => {
  const dispatch = useDispatch();

  const onOpenPopover = (popoverName) => {
    console.log("popoverName", popoverName);
    dispatch(openPopover(popoverName));
  };

  return (
    <>
      <BreadCrumbs />
      <div
        className='project-add-wrapper'
        onClick={() => onOpenPopover("CREATE_PROJECT")}>
        <CreateProject className='svg pointer' />
      </div>
    </>
  );
};
