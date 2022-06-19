import firts_category from '../category_contents/first_category';
import { useEffect } from 'react';
import './selectbox.scss';


function SelectBox(props) {
    const setNextCategory = props.setNextCategory;
    const name = props.name;
    const title = props.title;
    let contents = [];
    const errorStyle = props.style;
    if(undefined !== props.contents){
        contents = props.contents;
    }
    return(
    <div className="selectbox_container">
        <label className="selectbox-icon_container" for="select">
            <img src="/icon/register/bottom-arrow_icon.svg" alt="" />
        </label>
        <select style={errorStyle} name={name} id="select" onChange={(e)=>{
            const selectedCategoryNumber = e.target.selectedOptions[0].getAttribute('data');
            setNextCategory(selectedCategoryNumber);
            //console.log(e.target.selectedOptions[0].getAttribute('data'));
        }}>
            <option value="default"  >{title}</option>
            {
                contents.map((data,index)=>{
                    return (<option data={index} value={data.value}>{data.content}</option>);
                })
            }
        </select>
    </div>
    )
}



export default SelectBox;

