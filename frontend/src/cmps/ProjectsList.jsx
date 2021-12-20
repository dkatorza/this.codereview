export const ProjectList = () => {
    return (
        <>
            <div className="project-list-header">
                <div className="list-header-item">ID</div>
                <div className="list-header-item">Project Name</div>
                <div className="list-header-item">Importance</div>
                <div className="list-header-item">Start date</div>
                <div className="list-header-item">End date</div>
                <div className="list-header-item">Members</div>
                <div className="list-header-item">Last changed</div>
            </div>
            {/* demodata */}
            <div className="project-list-wrapper scroller">
                <div className="project-list-item">Project Demo1</div>
                <div className="project-list-item">Project Demo1</div>
                <div className="project-list-item">Project Demo1</div>
                <div className="project-list-item">Project Demo1</div>
                <div className="project-list-item">Project Demo1</div>
                <div className="project-list-item">Project Demo1</div>
                <div className="project-list-item">Project Demo1</div>
                <div className="project-list-item">Project Demo1</div>
                <div className="project-list-item">Project Demo1</div>
                <div className="project-list-item">Project Demo1</div>
            </div>
        </>

    )

}