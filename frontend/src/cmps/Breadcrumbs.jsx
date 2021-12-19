export const BreadCrumbs = () => {
    return (
        <div className="breadcrumbs-wrapper">
            <div className="path" style={{backgroundColor:'whitesmoke'}}>tcr:\</div>
            <div className="path" style={{backgroundColor:'gold'}}>demoproject</div>
            <div className="path" style={{backgroundColor:'tomato'}}>demofile</div>
            <div className="path" style={{backgroundColor:'lightblue'}}>democr <span>></span></div>
        </div>
    )
}