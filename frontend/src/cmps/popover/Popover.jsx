import { ReactComponent as Startpath } from "../../assets/img/forward-option.svg";
import { ReactComponent as Close } from "../../assets/img/xmark.svg";
import { useDispatch, useSelector } from "react-redux";
import { closePopover } from "../../store/actions/app.actions";

export const Popover = ({ title, children }) => {
  const { isOverlayOpen } = useSelector((state) => state.appModule);
  const dispatch = useDispatch();

  const onClosePopover = () => {
    dispatch(closePopover());
  };

  return (
    <>
      {isOverlayOpen && (
        <div className='screen-overlay darken' onClick={onClosePopover}></div>
      )}
      <div className='popover-wrapper'>
        <div className='popover-header-container'>
          <div className='header-title'>
            {" "}
            <Startpath className='svg' />
            <span className='path-start'>{title}</span>
          </div>
          <div className='header-close' onClick={onClosePopover}>
            <Close className='svg pointer' />
          </div>
        </div>
        <div className='popover-content'>{children}</div>
      </div>
    </>
  );
};
