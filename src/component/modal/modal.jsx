import { useEffect } from 'react';
import './modal.scss';

function Modal(props) {
    const {button, direction="center",style={}} = props;
    useEffect(()=>{
        if(props.on === true){
            document.querySelector('body').style.overflow = 'hidden';
        }
        else{
            document.querySelector('body').style.overflow = "none";
        }
        return(
            ()=>{
                document.querySelector('body').style.overflow = 'none';
            }
        )
    },[props.on])
    if(props.on === false){
        return null
    }else{
        return (
            <div className={`modal_container ${props.className}`}>
                <div className={`background-container `} />
                <div className={`modal-dir-${direction}`} style={style}>
                    {
                        props.children
                    }
                </div>
            </div>
        )
    }
}

export default Modal;