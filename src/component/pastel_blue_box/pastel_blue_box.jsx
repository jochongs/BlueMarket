import './pastel_blue_box.scss';

function PastelBlueBox(props) {
    const {className , style, content = ""} = props;
    return(
        <div className={`pastel_blue_box_container ${className}`} style={style}>
            <p>{content}</p>
        </div>
    )
}

export default PastelBlueBox;