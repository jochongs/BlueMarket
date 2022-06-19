import './main_circle.scss';

function MainCircle(props) {
    
    return(
        <div className="main_circle_container">
            <div className="main_circle-circle main_circle-circle-first"></div>
            <div className="main_circle-circle main_circle-circle-second"></div>
            <div className="main_circle-circle main_circle-circle-third"></div>
            <div className="main_circle-circle main_circle-circle-fourth"></div>
        </div>
    )
}

export default MainCircle;