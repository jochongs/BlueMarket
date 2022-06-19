import './category_sequence.scss';

function CategorySequence(props) {
    const category_sequence = [
        {
            name : '홈',
            imgPath : "/icon/category/home_icon.svg",
        },
        {
            name : '의류',
            imgPath : "/icon/category/mini_menu_icon.svg",
        },
        {
            name : '남성의류',
            imgPath : "/icon/category/mini_menu_icon.svg",
        }
    ]
    return(
        <div className="product_detail-category_sequence_container">
            {
                category_sequence.map((category,index)=>{
                    if(index===0){
                        return(
                            <div className="product_detail-category_sequence">
                                <div className="product_detail-category_sequence-icon">
                                    <img src={category.imgPath} alt="" />
                                </div>
                                <div className="product_detail-category_sequence-name_container">
                                    <p className="product_detail-category_sequence-name">{category.name}</p>
                                </div>
                            </div>
                        )
                    }else{
                        return(
                            <div className="product_detail-category_sequence">
                                <div className="product_detail-category_sequence-arrow_icon_container"> 
                                    <img src="/icon/detail/right-arrow_icon.svg" alt="" />
                                </div>
                                <div className="product_detail-category_sequence-icon">
                                    <img src={category.imgPath} alt="" />
                                </div>
                                <div className="product_detail-category_sequence-name_container">
                                    <p className="product_detail-category_sequence-name">{category.name}</p>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default CategorySequence;