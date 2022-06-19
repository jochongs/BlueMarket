import './seller_info.scss';

function SellerInfo(props){
    const sellerInfo = [
        {
            title : "판매자",
            data : "(닉네임)",
        },
        {
            title : "거주지",
            data : "인천광역시",
        },
        {
            title : "거래횟수",
            data : "10회",
        },
        {
            title : "자기소개",
            data : "안녕하세요~~~~~",
        },
    ]
    return(
        <div className="seller_info_container">
            {
                sellerInfo.map((data,index)=>{
                    return(
                        <div className="seller_info">
                            <div className="seller_info-title_container">
                                <p className='seller_info-title'>{data.title} : </p>
                            </div>
                            <div className="seller_info-data_container">
                                <p className='seller_info-title'>{data.data}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SellerInfo;