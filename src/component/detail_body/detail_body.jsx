import { useState } from 'react';
import './detail_body.scss';
import ProductInfo from './product_info/product_info'; 
import SellerInfo from './seller_info/seller_info';
import TradingInfo from './trading_info/trading_info';

function DetailBody(props){
    const [selectedDiv,setSelectedDiv] = useState(0);
    const selected_div_style = {
        backgroundColor :  "#3e3eff",
        color : "white",
    }
    return(
        <div className="detail_body_conatiner">
            <div className="detail_body_menu_container">
                <div className="product_info_title_container" style={selectedDiv===0 ? selected_div_style : null} onClick={()=>{
                    setSelectedDiv(0);
                }}>
                    <p className='product_info_title' >상품정보</p>
                </div>
                <div className="trading_info_title_container" style={selectedDiv===1 ? selected_div_style : null} onClick={()=>{
                    setSelectedDiv(1);
                }}>
                    <p className='trading_info_title'>거래정보</p>
                </div>
                <div className="seller_info_title_container" style={selectedDiv===2 ? selected_div_style : null} onClick={()=>{
                    setSelectedDiv(2);
                }}>
                    <p className='seller_info_title'>판매자정보</p>
                </div>
            </div>
            <div className="detail_info">
                {
                    selectedDiv === 0
                    ? <ProductInfo></ProductInfo>
                    : selectedDiv === 1 ? <TradingInfo></TradingInfo> : <SellerInfo></SellerInfo>
                }
            </div>
        </div>
    )
}

export default DetailBody;