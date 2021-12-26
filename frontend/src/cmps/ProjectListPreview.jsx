export const ProjectListPreview = ({ project }) => {
  return (
    <div className='project-list-item'>
      <div className='list-item-field'>{project.title}</div>
      <div className='list-item-field'>{project.importance}</div>
      <div className='list-item-field'>
        {" "}
        {new Date(project.startDate).toLocaleDateString()}
      </div>
      <div className='list-item-field'>
        {new Date(project.endDate).toLocaleDateString()}
      </div>
      <div className='list-item-field'> {project.members}</div>
      <div className='list-item-field'>
        {" "}
        {new Date(project.lastChanged).toLocaleString()}
      </div>
    </div>
  );
};
