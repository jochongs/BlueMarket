import './detail_btnset.scss';

function DetailBtnset(props){
    return(
        <div className="detail_btnset_container">
            <div className="buy_button_conatiner">
                <button className='buy_button'>
                    <img src="/icon/detail/btnset/buy_icon.svg" alt="" />
                    <p className="button-content">구매하기</p>
                </button>
            </div>
            <div className="chat_button_conatiner">
                <button className='chat_button'>
                    <img src="/icon/detail/btnset/chat_icon.svg" alt="" />
                    <p className="button-content">채팅하기</p>
                </button>
            </div>
            <div className="select_product_button_conatiner">
                <button className='select_product_button'>
                    <img src="/icon/detail/btnset/heart_icon.svg" alt="" />
                    <p className="button-content">찜</p>
                    <p className="button-content-sub">1234</p>
                </button>
            </div>
        </div>
    )
}

export default DetailBtnset;