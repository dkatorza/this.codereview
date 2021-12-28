import { useDispatch } from "react-redux";
import { openPopover } from "../store/actions/app.actions";
import { useParams } from "react-router-dom";
import { BreadCrumbs } from "./Breadcrumbs";
import { ReactComponent as CreateProject } from "../assets/img/createproject.svg";

export const ProjectBar = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const onOpenPopover = (popoverName) => {
    dispatch(openPopover(popoverName));
  };

  return (
    <>
      <div className='project-bar'>
        <BreadCrumbs />
        <div
          className='project-add-wrapper'
          onClick={() => onOpenPopover("CREATE_PROJECT")}>
          {!params.cr_id && !params.id && (
            <CreateProject className='svg pointer' />
          )}
        </div>
      </div>
    </>
  );
};
