import './product_info.scss';
import ImgScroll from './img_scroll/img_scroll';
import ProductDescription from './product_description/product_description';
import HashTag from './hash_tag/hash_tag';

function ProductInfo(props){
    return(
        <div className="product_info_conatiner">
            <ImgScroll></ImgScroll>
            <ProductDescription></ProductDescription>
            <HashTag></HashTag>
        </div>
    )
}

export default ProductInfo;