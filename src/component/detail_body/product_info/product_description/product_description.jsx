import './product_description.scss';
import {useState,useEffect} from 'react';

function ProductDescription(props){
    const [description, setDescription] = useState("판매자가 글  쓰는 부분");
    //데이터 바인딩 필요
    return(
        <div className="product_description_container">
            <div className="product_description">
                판매자가 글 쓰는 부분
            </div>
        </div>
    )
}
export default ProductDescription;