import { useEffect, useState } from 'react';

export const DashboardLogItem = ({ text }) => {
  const [style, setStyle] = useState('');
  const [criteria, setCriteria] = useState('');

  useEffect(() => {
    setTextColor();
  });

  useEffect(() => {
    setTextCriteria();
  });

  const setTextCriteria = () => {
    if (text.text.includes('Done')) {
      setCriteria('Done');
    }
    if (text.text.includes('In work')) {
      setCriteria('In work');
    }
    if (text.text.includes('Opend Issue')) {
      setCriteria('Opend Issue');
    }
  };

  const setTextColor = () => {
    if (criteria === 'Done') setStyle('SpringGreen');
    if (criteria === 'In work') setStyle('Cyan');
    if (criteria === 'Opend Issue') setStyle('tomato');
  };

  const regex = new RegExp(`(${criteria})`, 'gi');
  const parts = text.text.split(regex);

  return (
    <ul>
      <li style={{ fontSize: '14px' }}>
        {'>> '}
        {new Date(text.date).toLocaleDateString()}
        {' - '}
        {parts &&
          parts.filter(String).map((part, idx) => {
            return regex.test(part) ? (
              <span style={{ color: `${style}` }} key={idx}>
                {part}
              </span>
            ) : (
              <span key={idx}>{part}</span>
            );
          })}
      </li>
    </ul>
  );
};
