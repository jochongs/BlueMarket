import Nav from '../../component/nav/nav';
import Carousel from '../../component/carousel/carousel';
import MainCircle from '../../component/main_circle/main_circle';
import MainMarket from '../../component/main_market/main_market/main_market';

import './main.scss';


function MainPage(props){
    return(
        <div className="main_page_container">
            <Nav></Nav>
            <div className="main_coniainer">
                <Carousel></Carousel>
                <MainCircle></MainCircle>
                <MainMarket></MainMarket>
            </div>
        </div>
    )
}

export default MainPage