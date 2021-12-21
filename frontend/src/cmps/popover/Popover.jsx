import { ReactComponent as Startpath } from '../../assets/img/forward-option.svg'
import { ReactComponent as Close } from '../../assets/img/xmark.svg'

export const Popover = ({title}) => {
    return (
        <div className="popover-wrapper">
            <div className="popover-header-container">
                <div className="header-title"> <Startpath className='svg'/>{title}</div>
                <div className="header-close"><Close className='svg pointer'/></div>
            </div>
            {children}
        </div>
    )
}