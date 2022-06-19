import './main_product.scss';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';


function MainProduct(props) {
    const [product, setProduct] = useState(props.product);
    const [timestring,setTimestring] = useState("???");
    useEffect(()=>{
        if(product.time.type === "hour"){
            setTimestring(product.time.number.toString() + "시간 전");
        }else if(product.time.type === "minute"){
            setTimestring(product.time.number.toString() + "분 전");
        }else if(product.time.type === "day"){
            setTimestring(product.time.number.toString() + "일 전");
        }else if(product.time.type === "week"){
            setTimestring(product.time.number.toString() + "주 전");
        }else if(product.time.type === "month"){
            setTimestring(product.time.number.toString() + "달 전");
        }else if(product.time.type === "year"){
            setTimestring(product.time.number.toString() + "년 전");
        }else{
            setTimestring("???");
        }
    },[]);
    const navigate = useNavigate();
    return(
        <div className="main_product_container">
            <div className="main_product-img_container" onClick={(e)=>{
                navigate(`/product/detail/${product.product_id}`);
            }}>
                <img src={product.imgPath} alt="error" />
            </div>
            <div className="main_product-name_container">
                <p className="main_product-name">{product.name}</p>
            </div>
            <div className="main_product-info_container">
                <div className="main_proudct-info-price_container">
                    <p className="main_product-info-price">{product.price.toLocaleString()}원</p>
                </div>
                <div className="main_product-info-time_container">
                    <p className="main_product-info-time">{timestring}</p>
                </div>
            </div>
        </div>
    )
}

export default MainProduct;