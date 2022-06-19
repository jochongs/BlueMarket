import './blue_button.scss';

function BlueButton({children,onClick}) {
    return(
        <button className='blueButton' onClick={onClick}>
            {children}
        </button>
    )
}

export default BlueButton;


