import { ReactComponent as Startpath } from '../../assets/img/forward-option.svg'
import { ReactComponent as Close } from '../../assets/img/xmark.svg'
import { useDispatch } from 'react-redux';
import {closePopover} from '../../store/actions/app.actions'


export const Popover = ({ title, children }) => {

    const dispatch = useDispatch()

    const onClosePopover = () => {
        console.log('close');
        dispatch(closePopover())
    }

    return (
        <div className="popover-wrapper">
            <div className="popover-header-container">
                <div className="header-title"> <Startpath className='svg' /><span className='path-start'>{title}</span></div>
                <div className="header-close" onClick={onClosePopover}><Close className='svg pointer' /></div>
            </div>
            <div className="popover-content">
                {children}
            </div>
        </div>
    )
}