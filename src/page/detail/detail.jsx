import './detail.scss';
import Nav from '../../component/nav/nav';
import axios from 'axios';
import {useEffect} from 'react';
import DetailHead from '../../component/detail_head/detail_head';
import DetailBody from '../../component/detail_body/detail_body';
import CategorySequence from '../../component/category_sequence/category_sequence';

function Detail(props){
    return(
        <div className="product_detail_container">
            <Nav></Nav>
            <div className="product_detail">
                <CategorySequence></CategorySequence>
                <DetailHead></DetailHead>
                <DetailBody></DetailBody>
            </div>
            
        </div>
    )
}

export default Detail;