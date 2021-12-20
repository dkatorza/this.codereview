export const BreadCrumbs = () => {
    return (
        <div className="breadcrumbs-wrapper">
            <div className="path" style={{color:'whitesmoke'}}>tcr:\</div>
            <div className="path" style={{color:'gold'}}>demoproject\</div>
            <div className="path" style={{color:'tomato'}}>demofile\</div>
            <div className="path" style={{color:'red'}}>democr <span>&gt;</span></div>
        </div>
    )
}