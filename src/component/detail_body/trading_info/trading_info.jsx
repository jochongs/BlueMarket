import './trading_info.scss';
import HashTag from '../product_info/hash_tag/hash_tag';
import ProductDescription from '../product_info/product_description/product_description';
import TradingMap from './trading_map/trading_map';
import {useState,useEffect} from 'react';

function TradingInfo(props){
    return(
        <div className="trading_info_container">
            <TradingMap></TradingMap>
            <div className="trading_info-trade_area_container">
                <p className='trading_info-trade_area'>대한민국 경기도 인천광역시</p>
            </div>
            <ProductDescription></ProductDescription>
            <HashTag></HashTag>
        </div>
    )
}

export default TradingInfo;