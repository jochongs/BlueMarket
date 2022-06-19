import './detail_head.scss';
import DetailBtnset from './detail_btnset/detail_btnset';

function DetailHead(props){
    const product_name = "ABCDEFGHIJKLMNOPQRSTUVWXYZABC"
    const sub_info = [
        {
            className : "postedDate",
            title : "게시일",
            data : "2021년 11월 23일",
        },
        {
            className : "product_state",
            title : "상품 상태",
            data : "좋음",
        },
        {
            className : "trading_area",
            title : "지역",
            data : "인천",
        },
        {
            className : "delivery_charge",
            title : "배송비",
            data : "배송비 포함",
        },
        {
            className : "trading_state",
            title : "거래 현황",
            data : "예약중",
            style : {
                color : "#3e3eff",
                fontWeight:"300"
            }
        }
    ]
    return(
        <div className="product_detail-head">
            <div className="product_detail-head-img_container">
                <img className='product_detail-head-img_container-representation_icon' src="/icon/detail/representation.svg" alt="" />
                <img src="" alt="" />
            </div>
            <div className="product_detail-head-info_container">
                <div className="product-title_container">
                    <p className='product-title'>{product_name}</p>
                </div>
                <div className="product-info-main_container">
                    <div className="product-info-main-price_container">
                        <p className='product-info-main-price'>10,000</p>원
                    </div>
                    <div className="product-info-main-sub">
                        <div className="product-info-main-sub-heart_container">
                            <div className="heart_icon_container">
                                <img src="/icon/detail/heart_icon.png" alt="" />
                            </div>
                            <p className='heart'>1234</p>
                        </div>
                        <div className="product-info-main-sub-view_container">
                            <div className="view_icon_container">
                                <img src="/icon/detail/view_icon.png" alt="" />
                            </div>
                            <p className='view'>1234</p>
                        </div>
                        <div className="product-info-main-sub-chat_container">
                            <div className="chat_icon_container">
                                <img src="/icon/detail/chat_icon.svg" alt="" />
                            </div>
                            <p className='chat'>1234</p>
                        </div>
                    </div>
                </div>
                <div className="product-info-sub_container">
                    {
                        sub_info.map((info)=>{
                            return(
                                <div className={`product-info-${info.className}_container`}>
                                    <div className="product-info-sub-icon"></div>
                                    <div className="product-info-sub-title_container">
                                        <p className="product-info-sub-title">{info.title} : </p>
                                    </div>
                                    <div className={`product-info-${info.className}_container`}>
                                        <p className={`product-info-${info.className}`} style={info.style !== undefined ? info.style :null} >{info.data}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <DetailBtnset></DetailBtnset>
            </div>
            
        </div>
    )
}

export default DetailHead;