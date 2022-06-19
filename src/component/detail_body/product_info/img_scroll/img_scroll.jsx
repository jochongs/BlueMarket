import './img_scroll.scss';
import {useState,useEffect} from 'react';

function ImgScroll(props){
    const imgData = [
        {
            imgPath : "",   
        },
        {
            imgPath : "",   
        },
        {
            imgPath : "",   
        },
        {
            imgPath : "",   
        },
        {
            imgPath : "",   
        },
        {
            imgPath : "",   
        },
        {
            imgPath : "",   
        },
    ];
    const [scrollValue, setScrollValue] = useState(0)
    const [scrollWidth, setScrollWidth] = useState(imgData.length*452+(imgData.length-1)*10);
    const [scrollRange, setScrollRange] = useState(0);
    useEffect(()=>{
        if(imgData.length<=2){
            return(
                document.querySelector('.img_scroll-range').remove()
            )
        }
        return(
                setScrollRange(document.querySelector('.img_scroll_container').scrollWidth - document.querySelector('.img_scroll_container').clientWidth)
        )
    },[])
    return(
        <div className="img_scroll_wrap">
            <div className="img_scroll_container" onScroll={(e)=>{
                setScrollValue(e.target.scrollLeft);
            }}>
                <div className="img_scroll" style={{ width : scrollWidth}}>
                    {
                        imgData.map((data,index)=>{
                            return(
                                <div className="img_scroll-img_container">
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="img_scroll-range_container">
            <input className='img_scroll-range' type="range" min="0" max={scrollRange} value={scrollValue} onChange={(e)=>{
                setScrollValue(e.target.value);
                document.querySelector('.img_scroll_container').scrollTo(scrollValue,0);
            }}/>
            </div>
        </div>
    )
}

export default ImgScroll;