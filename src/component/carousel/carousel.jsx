import React from "react";
import { useState } from "react";
import './carousel.scss';

function Carousel(props) {
    const [carouselCount, setCarouselCount] = useState(2);
    const [buttonType, setButtonType] = useState(false);
    const [rightData,setRgihtData] = useState(0);
    const carousel_className = [
        {
            name : "carousel-left-hidden",
        },
        {
            name : "carousel-left",
        },
        {
            name : "carousel-center",
        },
        {
            name : "carousel-right",
        },
        {
            name : "carousel-right-hidden",
        }
    ];
    const carousel_data = [
        {
            imgPath : "/img/carousel/carousel_img_1.jpg",
            temp : "first_element",
        },
        {
            imgPath : "/img/carousel/carousel_img_2.jpg",  
            temp : "second_element",
        },
        {
            imgPath : "/img/carousel/carousel_img_3.jpg",
            temp : "third_element",
        },
        {
            imgPath : "/img/carousel/carousel_img_4.jpg",
            temp : "fourth_element",
        },
        {
            imgPath : "/img/carousel/carousel_img_5.jpg",
            temp : "fifth_element",
        },
    ];

    const carousel_data_count = carousel_data.length; //carousel_data.size
    function mod(a,b){
        if(a%b===0){
            return 0;
        }
        if(a<0){
            return b + a%b;
        }
        return a%b;
    }
    return(
        <div className="carousel_container">
            <div className="carousel-button carousel-button-left" onClick={()=>{
                setButtonType(true);
                setCarouselCount(carouselCount+1);
                setRgihtData(rightData-1);

                const left_hidden = document.querySelector('.carousel-left-hidden');
                const left_hidden_child = document.querySelector('.carousel-left-hidden img'); //div -> img
                left_hidden.removeChild(left_hidden_child);
                const add_data = document.createElement('img'); //div -> img    
                const a = mod(rightData-1,carousel_data_count);
                add_data.setAttribute("src",carousel_data[a].imgPath); // classList -> url 속성으로 변경 , temp를 path로 변경
                left_hidden.appendChild(add_data);
                
                
            }}> <img src="/icon/carousel/left_arrow.svg" alt="" /></div>
            <div className="carousel"> 
                <div className={carousel_className[mod(carouselCount-2,5)].name==='carousel-center' ? buttonType===false ? "carousel-center-left" : 'carousel-center-right' : carousel_className[mod(carouselCount-2,5)].name}>
                    <img src="" alt="" />
                </div>
                <div className={carousel_className[mod(carouselCount-1,5)].name==='carousel-center' ? buttonType===false ? "carousel-center-left" : 'carousel-center-right' : carousel_className[mod(carouselCount-1,5)].name}>
                    <img src={carousel_data[0].imgPath} alt="" />
                </div>
                <div className={carousel_className[mod(carouselCount,5)].name==='carousel-center' ? buttonType===false ? "carousel-center-left" : 'carousel-center-right' : carousel_className[mod(carouselCount,5)].name}>
                    <img src={carousel_data[1].imgPath} alt="" />       
                </div>
                <div className={carousel_className[mod(carouselCount+1,5)].name==='carousel-center' ? buttonType===false ? "carousel-center-left" : 'carousel-center-right' : carousel_className[mod(carouselCount+1,5)].name}>
                    <img src={carousel_data[2].imgPath} alt="" />
                </div>
                <div className={carousel_className[mod(carouselCount+2,5)].name==='carousel-center' ? buttonType===false ? "carousel-center-left" : 'carousel-center-right' : carousel_className[mod(carouselCount+2,5)].name}>
                    <img src="" alt="" />
                </div>
            </div>
            <div className="carousel-button carousel-button-right" onClick={()=>{
                setButtonType(false);
                setCarouselCount(carouselCount-1);
                setRgihtData(rightData+1);

                const right_hidden = document.querySelector('.carousel-right-hidden');
                const right_hidden_child = document.querySelector('.carousel-right-hidden img'); //div -> img
                right_hidden.removeChild(right_hidden_child)
                const add_data = document.createElement('img'); //div -> img  
                const a = mod(rightData+3,carousel_data_count);
                add_data.setAttribute("src",carousel_data[a].imgPath); // classList -> url 속성으로 변경 , temp를 path로 변경
                right_hidden.appendChild(add_data);                
            }}> 
            <img src="/icon/carousel/right_arrow.svg" alt="" />
            </div>
            
        </div>
    )
}

export default Carousel;
