import './nav.scss';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import { useState } from "react";

function Nav(props) {
    const navigate = useNavigate();
    const [sidebarState, setSidebarState] = useState(false);
    return(
        <div className="nav_container">
            <div className="nav">
                <div className="nav-top_container">
                    <div className="nav-top">
                        <div className="nav-top-login_container">
                            <button className="nav-top-login" onClick={()=>{
                                navigate('/login');
                            }}>로그인/회원가입</button>
                        </div>
                        <div className="nav-top-proudct_interest_container">
                            <button className="nav-top-product_interest">관심상품</button>
                        </div>
                    </div>
                </div>
                <div className="nav-center_container">
                    <div className="nav-center">
                        <div className="nav-center-title_container" onClick={()=>{
                            navigate('/');
                        }}>
                            <p className="nav-center-title">푸른마켓</p>
                        </div>
                        <div className="nav-center-search_input_container">
                            <input type="text" className="nav-center-search_input" placeholder="상품명, 지역명, 분야" /> 
                            <div className="nav-center-search_input-icon_container">
                                <img src={`/icon/nav/search_icon.svg`} alt="" />
                            </div>  
                        </div>
                        <div className="nav-center-category_container">
                            <Link to="/product/register">
                                <div className="nav-center-category-registe_container">
                                    <div className="nav-center-category-registe-icon">
                                        <img src="/icon/nav/registe_icon.svg" alt="" />
                                    </div>
                                    <p>판매하기</p>
                                </div>
                            </Link>
                            <Link to="/mypage">
                                <div className="nav-center-category-mypage_container">
                                    <div className="nav-center-category-mypage-icon">
                                        <img src="/icon/nav/mypage_icon.svg" alt="" />
                                    </div>
                                    <p>마이페이지</p>
                                </div>
                            </Link>
                            <Link to="chatting">
                                <div className="nav-center-category-chatting">
                                    <div className="nav-center-category-chatting-icon">
                                        <img src="/icon/nav/chatting_icon.svg" alt="" />
                                    </div>
                                    <p>채팅하기</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="nav-bottom_container">
                    <div className="nav-bottom">
                        <div className="nav-bottom-menu-icon_container">
                            <img src="/icon/nav/menu_icon.svg" alt="" onClick={()=>{
                                setSidebarState(!sidebarState);
                            }}/>
                            {
                                sidebarState === true 
                                ? <Sidebar></Sidebar>
                                : null
                            }
                        </div>
                        <div className="nav-bottom-popular_item_container">
                            <div className="nav-bottom-popular_item-title_container">
                                <p className="nav-bottom-popular_item-title">인기상품</p>
                            </div>
                            <div className="nav-bottom-popular_item-content_container">
                                <p className="nav-bottom-popular_item_content">아이패드/000,000원...</p>
                            </div>
                        </div>
                        <div className="nav-bottom-nearby_area_product_container">
                            <div className="nav-bottom-nearby_area_product_title_container">
                                <p className="nav-bottom-nearby_area_product_title">지역근처</p>
                            </div>
                            <div className="nav-bottom-nearby_area-content_container">
                                <p className="nav-bottom-nearby_area">퀵보드/000,000원...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default Nav;