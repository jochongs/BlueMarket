import './main_market.scss';
import MainProduct from '../main_product/main_proudct';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function MainMarket(props) {
    const tempData = [
        {
            name : "제품명~~~",
            price : 10000,
            product_id : 123,
            time : {
                type : "hour",
                number : "1"
            }
        },
        {
            name : "제품명~~~",
            price : 10000,
            product_id : 123,
            time : {
                type : "hour",
                number : "1"
            }
        },
        {
            name : "제품명~~~",
            price : 10000,
            product_id : 123,
            time : {
                type : "hour",
                number : "1"
            }
        },
        {
            name : "제품명~~~",
            price : 10000,
            product_id : 123,
            time : {
                type : "hour",
                number : "1"
            }
        },
        {
            name : "제품명~~~",
            price : 10000,
            product_id : 123,
            time : {
                type : "hour",
                number : "1"
            }
        },
        {
            name : "제품명~~~",
            price : 10000,
            product_id : 123,
            time : {
                type : "hour",
                number : "1"
            }
        },
        {
            name : "제품명~~~",
            price : 10000,
            product_id : 123,
            time : {
                type : "hour",
                number : "1"
            }
        },
        {
            name : "제품명~~~",
            price : 10000,
            product_id : 123,
            time : {
                type : "hour",
                number : "1"
            }
        },
        {
            name : "제품명~~~",
            price : 10000,
            product_id : 123,
            time : {
                type : "hour",
                number : "1"
            }
        },
        {
            name : "제품명~~~",
            price : 10000,
            product_id : 123,
            time : {
                type : "hour",
                number : "1"
            }
        },
        {
            name : "제품명~~~",
            price : 10000,
            product_id : 123,
            time : {
                type : "hour",
                number : "1"
            }
        },
        {
            name : "제품명~~~",
            price : 10000,
            product_id : 123,
            time : {
                type : "hour",
                number : "1"
            }
        },
        {
            name : "제품명~~~",
            price : 10000,
            product_id : 123,
            time : {
                type : "hour",
                number : "1"
            }
        },
        {
            name : "제품명~~~",
            price : 10000,
            product_id : 123,
            time : {
                type : "hour",
                number : "1"
            }
        },
        {
            name : "제품명~~~",
            price : 10000,
            product_id : 123,
            time : {
                type : "hour",
                number : "1"
            }
        },
        {
            name : "제품명~~~",
            price : 10000,
            product_id : 123,
            time : {
                type : "hour",
                number : "1"
            }
        },
        {
            name : "제품명~~~",
            price : 10000,
            product_id : 123,
            time : {
                type : "hour",
                number : "1"
            }
        },
        {
            name : "제품명~~~",
            price : 10000,
            product_id : 123,
            time : {
                type : "hour",
                number : "1"
            }
        },
        {
            name : "제품명~~~",
            price : 10000,
            product_id : 123,
            time : {
                type : "hour",
                number : "1"
            }
        },
        {
            name : "제품명~~~",
            price : 10000,
            product_id : 123,
            time : {
                type : "hour",
                number : "1"
            }
        },
    ]
    tempData.map(()=>{
        tempData.imgPath = "";
    })
    const [products, setProducts] = useState(tempData);
    useEffect(()=>{
        setProducts(tempData);
        const data = {
            count : 20,
            type : "latest",
        }
        axios.post("/product",data)
        .then((results)=>{
            if(results.data !== undefined){
                setProducts(results.data);
            }
        })
        .catch((e)=>{
            console.log('데이터를 가져오는데 실패했습니다.');
        });
    },[]);
    return(
        <div className="main_market">
            <div className="main_market-title_container">
                <p className="main_market-title">실시간 마켓신상</p>
            </div>
            {
                [0,1,2,3].map((i)=>{
                    return(
                        <div className="main_market-products_line_container">
                            {
                                [0,1,2,3,4].map((j)=>{
                                    return(
                                        <div>
                                            <MainProduct product={products[i*5+j]} ></MainProduct>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MainMarket;