import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';

export const Avatars = () => {
  const { members } = useSelector((state) => state.projectModule.project);

  return (
    <div className='members'>
      {members.map((member, idx) => (
        <Avatar
          key={idx}
          alt={member.fullname}
          src={member.imgUrl}
          className='avatar'
        />
      ))}
    </div>
  );
};
