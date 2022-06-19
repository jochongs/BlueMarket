import { useNavigate } from "react-router";
import Nav from "../../component/nav/nav";
import './login.scss';
function Login(props) {
    const navigate = useNavigate();
    return(
        <div className="login_page_container">
            <div className="nav-wrap">
                <Nav/>
            </div>
            <div className="login-wrap">
                <div className="login_container">
                    <div className="login">
                        <div className="login-left">
                            <h1>푸른마켓</h1>
                            <p>푸른마켓은 직거래 및 택배거래도 할 수 있는 마켓입니다 <br/>로그인 후 이용하실 수 있습니다</p>
                        </div>
                        <div className="login-right">
                            <div className="login-right-title_container">
                                <h1>SIGN IN</h1>
                            </div>
                            <div className="login-right-input_container">
                                <div className="login-right-input-id_container">
                                    <img src="/icon/login/mypage_icon.svg" alt="" />
                                    <div className="login-right-input-id-input_container">
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="login-right-input-pw-id_container">
                                    <img src="/icon/login/password_icon.svg" alt="" />
                                    <div className="login-right-input-password-input_container">
                                        <input type="password" />
                                    </div>
                                </div>
                            </div>
                            <div className="login-right-sub_container">
                                <div className="login-right-sub-find_container">
                                    <p>아이디/비밀번호찾기</p>
                                </div>
                                <div className="login-right-sub-signup_container">
                                    <p onClick={()=>{
                                        navigate('/signup');
                                    }}>회원가입</p>
                                </div>
                            </div>
                            <div className="login-right-btn-container">
                                <button>로그인</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;