import { ReactComponent as ReactIcon } from '../../assets/img/stackicons/react-original.svg';
import { ReactComponent as ReduxIcon } from '../../assets/img/stackicons/redux-original.svg';
import { ReactComponent as NodeIcon } from '../../assets/img/stackicons/nodejs-original.svg';
import { ReactComponent as ExpressIcon } from '../../assets/img/stackicons/express-original.svg';
import { ReactComponent as MongoIcon } from '../../assets/img/stackicons/mongodb-original.svg';

export const DashboardStack = () => {
  return (
    <div className='dashboard-stack-wrapper'>
      <ReactIcon className='svg' />
      <ReduxIcon className='svg' />
      <NodeIcon className='svg' />
      <ExpressIcon className='svg fill-white' />
      <MongoIcon className='svg fill-white' />
    </div>
  );
};
