export const DashboardTasks = () => {
  return (
    <div className='project-tasks'>
      <h4>Recent tasks:</h4>
      <div className='dashboard-tasks scroller'>
        <div
          className='task-preview-wrapper'
          style={{ border: '1px solid #bf72ff' }}>
          <div
            className='checkbox'
            style={{ backgroundColor: '#bf72ff' }}></div>
          <div className='title'>Daily team standup</div>
        </div>
        <div
          className='task-preview-wrapper'
          style={{ border: '1px solid aqua' }}>
          <div className='checkbox' style={{ backgroundColor: 'aqua' }}></div>
          <div className='title'>Meeting with product...</div>
        </div>
        <div
          className='task-preview-wrapper'
          style={{ border: '1px solid #00ffba' }}>
          <div
            className='checkbox'
            style={{ backgroundColor: '#00ffba' }}></div>
          <div className='title'>1on1 feedback</div>
        </div>
        <div
          className='task-preview-wrapper'
          style={{ border: '1px solid #ffb703' }}>
          <div
            className='checkbox'
            style={{ backgroundColor: '#ffb703' }}></div>
          <div className='title'>Verify deplyment date</div>
        </div>
        <div
          className='task-preview-wrapper'
          style={{ border: '1px solid #ef476f' }}>
          <div
            className='checkbox'
            style={{ backgroundColor: '#ef476f' }}></div>
          <div className='title'>Strategy meeting</div>
        </div>
        <div
          className='task-preview-wrapper'
          style={{ border: '1px solid aqua' }}>
          <div className='checkbox' style={{ backgroundColor: 'aqua' }}></div>
          <div className='title'>Check roadmap</div>
        </div>
        <div
          className='task-preview-wrapper'
          style={{ border: '1px solid #ffb703' }}>
          <div
            className='checkbox'
            style={{ backgroundColor: '#ffb703' }}></div>
          <div className='title'>Demo staging</div>
        </div>
        <div
          className='task-preview-wrapper'
          style={{ border: '1px solid #ef476f' }}>
          <div
            className='checkbox'
            style={{ backgroundColor: '#ef476f' }}></div>
          <div className='title'>UX improvments</div>
        </div>
      </div>
    </div>
  );
};
