export const CRlistPreview = ({ cr }) => {
  return (
    <div className='cr-list-item'>
      <div className='list-item-field'>{cr.id}</div>
      <div className='list-item-field'>{cr.cr_importance}</div>
      <div className='list-item-field'> {cr.cr_members}</div>
      <div className='list-item-field'>
        {new Date(cr.cr_dueDate).toLocaleDateString()}
      </div>
      <div className='list-item-field'> {cr.cr_status}</div>
      <div className='list-item-field'>
        {new Date(cr.cr_lastChanged).toLocaleString()}
      </div>
    </div>
  );
};
