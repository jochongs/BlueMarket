import './signup.scss';
import Nav from '../../component/nav/nav';
import RequireBox from '../../component/require_box/require_box';
import SelectBox from '../../component/selectbox/selectbox';
import ChoiceBox from '../../component/choice_box/choice_box';
import { useState } from 'react';
import HashGroup from '../../component/hash/hash';
import prdCategory from '../../category_data/prd_category';
import mergeCategory from '../../funcs/mergeCategory';
import BlueButton from '../../component/blue_button/blue_button';
import DataList from '../../component/datalist/datalist';
import Modal from '../../component/modal/modal';
import { useEffect } from 'react';
import PastelBlueBox from '../../component/pastel_blue_box/pastel_blue_box';

function Signup(props) {
    const prdMergedCategory = mergeCategory(prdCategory, "merge");
    const errorFontStyle = {
        color: "#ff0000",
        fontSize: "20px",
        marginLeft: "16px",
    }
    const errorBorderStyle = {
        border: "2px solid #ff0000",
    }
    const CHECK_ICON_SRC = [
        '/icon/signup/check_icon0.svg',
        '/icon/signup/check_icon1.svg',
        '/icon/signup/check_icon2.svg',
        '/icon/signup/check_icon2.svg',
    ]
    const ID_MESSAGE = [
        "아이디를 정확히 기입해주시고 중복확인 버튼을 눌러주세요",
        "사용 가능한 아이디입니다.",
        "사용 불가능한 아이디입니다.",
        "필수로 입력해야하는 항목입니다.",
    ]
    const ID_ERROR_FONT_STYLE = [
        { fontSize: "20px", color: "#7f7f7f" },
        { fontSize: "20px", color: "#3e3eff" },
        { fontSize: "20px", color: "#ff0000" },
        { fontSize: "20px", color: "#ff0000" },
    ]

    

    //mapModal
    const [mapModal, setMapModal] = useState(false);
    const [searchMapKeyword, setSearchMapKeyword] = useState("인하대");
    const [searchMapResults, setSearchMapResults] = useState([]);
    const [selectedMap, setSelectedMap] = useState({}); //이건 맵 모달에서 클릭했을 때 선택되는 주소
    const [choosedMap,setChoosedMap] = useState({});//확인 버튼을 눌렀을 때 선택되는 주소
    const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
    };
    const {kakao} = window;
    
    useEffect(() => {
        try{
            const container = document.querySelector('.kakao-map')
            const map = new kakao.maps.Map(container,options);
            const places = new kakao.maps.services.Places();
            places.keywordSearch(searchMapKeyword,(result,status)=>{
                if(status === kakao.maps.services.Status.OK){
                    console.log(result);
                    setSearchMapResults(result);
                    result.map((data)=>{
                        const marker = new kakao.maps.Marker({
                            map : map,
                            position : new kakao.maps.LatLng(data.y,data.x),
                            title : data.address_name,
                        });
                        kakao.maps.event.addListener(marker,'click',(e)=>{
                            setSelectedMap(data);
                        })
                        marker.setMap(map);
                    })
                }
                else{
                    map.setCenter(new kakao.maps.LatLng(37.537183, 127.005454));
                }
                map.setCenter(new kakao.maps.LatLng(result[0].y, result[0].x))
            });
        }
        catch{
            console.error();
        }
        }, [searchMapKeyword,mapModal]);

    useEffect(()=>{ //모달 열렸을때 스크롤 방지 훅 
        if(mapModal){
            document.body.style.overflow ="hidden";
        }else{
            document.body.style.overflow ="unset";
        }
    },[mapModal])




    //기본정보
    const [emailId, setEmailId] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [pw, setPw] = useState("");
    const [pwCheck, setPwCheck] = useState("");
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [frontSSN, setFrontSSN] = useState("");
    const [backSSN, setBackSSN] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState({});

    //추가정보
    const [sex, setSex] = useState(true); //성별//true:남자 false:여자
    const [age, setAge] = useState(-1);
    const [introduce, setIntroduce] = useState("");//자기소개
    const [selectedCategory, setSelectedCategory] = useState([]);//선호상품


    const [idError, setIdError] = useState({ //얘만 특별히 state 값이 다르니 꼭 확인 
        state: 1, //0은 아무것도 디폴트상태 , 1은 사용가능한 아이디 , 2은 사용 불가능한 아이디, 3는 필수로 입력해야하는 항목
        message: "",
    });
    const [pwError, setPwError] = useState({   //체크아이콘이 있는경우 0이 디폴트 1이 파란색 2가 빨간색
        state: 0,
        message: "",
    })
    const [pwCheckError, setPwCheckError] = useState({
        state: 0,
        message: "",
    })
    const [nameError, setNameError] = useState({
        state: 0,
        message: "",
    });
    const [nicknameError, setNicknameError] = useState({
        state: 0,
        message: "",
    })
    const [SSNError, setSSNError] = useState({
        state: 0,
        message: "",
    })
    const [phonenumberError, setPhonenumberError] = useState({
        state: 0,
        message: "",
    })
    const [certificationError, setCertificationError] = useState({
        state: 0,
        message: "",
    })
    const [addressError, setAddressError] = useState({
        state: 0,
        message: "",
    })
    const infoHookInitialize = () => { //초기화 시켜주는 함수
        let temp = {
            state: 0,
            message: "",
        };
        setIdError(temp);
        setPwError(temp);
        setPwCheckError(temp);
        setNameError(temp);
        setNicknameError(temp);
        setSSNError(temp);
        setPhonenumberError(temp);
        setCertificationError(temp);
        setAddressError(temp);
    }



    function signupButton(props) { //가입하기 버튼을 눌렀을때 실행되는 함수
        //infoHookInitialize(); //초기화 해주는 함수
        console.log(pwError);
        if (idError.state !== 1) {
            if (emailId === "") {
                let temp = {
                    state: 3,
                    message: "필수로 입력해야하는 항목입니다.",
                };
                setIdError(temp);
                document.querySelector('.id-top_container input').scrollIntoView(true);
            }
            else {
                alert('이메일 아이디의 중복확인이 필요합니다.');
                document.querySelector('.id-top_container input').scrollIntoView(true);
            }
        } else if (pwError.state !== 1) {
            if (pwError.state === 3) {
                let temp = {
                    state: 2,
                    message: "조건에 맞는 비밀번호를 입력해주십시오.",
                }
                setPwError(temp);
                document.querySelector('.signup-essential_info-pw_container input').scrollIntoView(true);
            } else {
                let temp = {
                    state: 2,
                    message: "반드시 필요한 항목입니다.",
                }
                setPwError(temp);
                document.querySelector('.signup-essential_info-pw_container input').scrollIntoView(true);
            }
        } else if (pwCheckError.state !== 1) {
            let temp = {
                state: 2,
                message: "반드시 필요한 항목입니다.",
            }
            setPwCheckError(temp);
            document.querySelector('.signup-essential_info-pw_check_container input').scrollIntoView(true);
        } else if (nameError.state !== 1) {
            let temp = {
                state: 2,
                message: "반드시 필요한 항목입니다.",
            }
            setNameError(temp);
            document.querySelector('.signup-essential_info-name_container input').scrollIntoView(true);
        } else if (nicknameError.state !== 1) {
            let temp = {
                state: 2,
                message: "반드시 필요한 항목입니다.",
            }
            setNicknameError(temp);
            document.querySelector('.signup-essential_info-nickname_container input').scrollIntoView(true);
        } else if (SSNError.state !== 1) {
            let temp = {
                state: 2,
                message: "반드시 필요한 항목입니다.",
            }
            setSSNError(temp);
            document.querySelector('.signup-essential_info-SSN-container input').scrollIntoView(true);
        }

    }




    return (
        <div className="signup_page_container">
            <Nav />
            <div className="signup-title_container">
                <p>회원가입</p>
            </div>
            <div className="signup-essential_info_container">
                <div className="signup-essential_info-title_container">
                    <div>
                        <h1>기본정보</h1>
                        <RequireBox />
                    </div>
                </div>
                <div className="signup-essential_info-id_container">
                    <div>
                        <p>이메일 아이디</p>
                    </div>
                    <div>
                        <div className="id-top_container">
                            <input type="text" placeholder='이메일 아이디' className='signup-input' style={idError.state === 3 ? errorBorderStyle : {}} onChange={(e) => {
                                let temp = {
                                    state: 0,
                                    message: "",
                                }
                                setIdError(temp);
                                setEmailId(e.target.value);
                            }} />
                            <p>@</p>
                            <input type="text" placeholder='직접입력' className='signup-input' style={idError.state === 3 ? errorBorderStyle : {}} />
                            <SelectBox title="선택" style={idError.state === 3 ? errorBorderStyle : {}} />
                            <button>중복 확인</button>
                        </div>
                        <div className="id-error_container">
                            <p style={ID_ERROR_FONT_STYLE[idError.state]}>{ID_MESSAGE[idError.state]}</p>
                        </div>
                    </div>
                </div>
                <div className="signup-essential_info-pw_container">
                    <div>
                        <p>비밀번호</p>
                    </div>

                    <div>
                        <input type="password" placeholder='8-10자의 영문 소문자/특수기호만 사용 가능' className='signup-input signup-password-input' style={pwError.state === 2 ? errorBorderStyle : null} maxLength={10} onChange={(e) => {
                            setPw(e.target.value);
                            document.querySelector(".signup-essential_info-pw_check_container input").value = "";
                            setPwCheckError({
                                state: 0,
                                message: "",
                            })
                            const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

                            if (!regExp.exec(e.target.value)) {
                                setPwError({
                                    state: 3,
                                    message: "",
                                })
                            } else {
                                setPwError({
                                    state: 1,
                                    message: ""
                                })
                            }
                        }} />
                        <div className="pw-icon_container check_icon_container">
                            <img src={CHECK_ICON_SRC[pwError.state]} alt="" />
                        </div>
                        <div className="pw-error_container">
                            {
                                pwError.state === 2
                                    ? <p style={errorFontStyle}>{pwError.message}</p>
                                    : null
                            }
                        </div>
                    </div>
                </div>
                <div className="signup-essential_info-pw_check_container border-top-none">
                    <div>
                        <p>비밀번호 확인</p>
                    </div>
                    <div>
                        <input type="password" placeholder='비밀번호 확인' className='signup-input' style={pwCheckError.state === 2 ? errorBorderStyle : null} maxLength={10} onChange={(e) => {
                            setPwCheck(e.target.value);
                            if (e.target.value !== pw) {
                                setPwCheckError({
                                    state: 2,
                                    message: "비밀번호와 일치하지 않습니다.",
                                })
                            } else {
                                setPwCheckError({
                                    state: 1,
                                    message: "",
                                })
                            }
                        }} />
                        <div className="pw_check-icon_container check_icon_container">
                            <img src={CHECK_ICON_SRC[pwCheckError.state]} alt="" />
                        </div>
                        <div className="pw_check-error_container">
                            {
                                pwCheckError.state === 2
                                    ? <p style={errorFontStyle}>{pwCheckError.message}</p>
                                    : null
                            }
                        </div>
                    </div>
                </div>
                <div className="signup-essential_info-name_container">
                    <div>
                        <p>이름</p>
                    </div>
                    <div>
                        <input type="text" placeholder='홍길동' maxLength={7} className='signup-input' style={nameError.state === 2 ? errorBorderStyle : null} onChange={(e) => {
                            setName(e.target.value);
                            if (e.target.value.length > 0) {
                                setNameError({
                                    state: 1,
                                    message: "",
                                })
                            } else {
                                setNameError({
                                    state: 3,
                                    message: "",
                                })
                            }
                        }} />
                        <div className="name-icon_container check_icon_container">
                            <img src={CHECK_ICON_SRC[nameError.state]} alt="" />
                        </div>
                        <div className="name-error_container">
                            {
                                nameError.state === 2
                                    ? <p style={errorFontStyle}>{nameError.message}</p>
                                    : null
                            }
                        </div>
                    </div>
                </div>
                <div className="signup-essential_info-nickname_container">
                    <div>
                        <p>닉네임</p>
                    </div>
                    <div>
                        <div className="signup-input-nickname_container">
                            <input type="text" placeholder='홍길동' className='signup-input' maxLength={6} style={nicknameError.state === 2 ? errorBorderStyle : null} onChange={(e) => {
                                const regExp = /^[a-zA-Zㄱ-힣0-9]*$/;
                                setNickname(e.target.value);
                                if (regExp.test(e.target.value)) {
                                    if (e.target.value.length > 6) {
                                        e.preventDefault();
                                    } else {
                                        if (e.target.value.length > 0) {
                                            const regNum = /^[0-9]*$/;
                                            if (regNum.test(e.target.value)) {
                                                setNicknameError({
                                                    state: 3,
                                                    message: "",
                                                })
                                            } else {
                                                setNicknameError({
                                                    state: 1,
                                                    message: "",
                                                })
                                            }
                                        } else {
                                            setNicknameError({
                                                state: 3,
                                                message: "",
                                            })
                                        }
                                    }
                                } else {
                                    setNicknameError({
                                        state: 3,
                                        message: "",
                                    })
                                }
                            }} />
                            <p>{`${nickname.length}/6`}</p>
                        </div>
                        <div className="nickname-icon_container check_icon_container">
                            <img src={CHECK_ICON_SRC[nicknameError.state]} alt="" />
                        </div>
                        <div className="nickname-error_container">
                            {
                                nicknameError.state === 2
                                    ? <p style={errorFontStyle}>{nicknameError.message}</p>
                                    : null
                            }
                        </div>
                    </div>
                </div>
                <div className="signup-essential_info-SSN-container margin-22">
                    <div>
                        <p>주민번호</p>
                    </div>
                    <div>
                        <div className="SSN-top">
                            <input type="text" maxLength={6} placeholder='0 0 0 0 0 0' className='signup-input' style={SSNError.state === 2 ? errorBorderStyle : null} onChange={(e) => {
                                const regNum = /^[0-9]*$/;
                                if (regNum.test(e.target.value)) {
                                    setFrontSSN(e.target.value);
                                    if (backSSN !== "" && e.target.value.length === 6) {
                                        setSSNError({
                                            state: 1,
                                            message: "",
                                        })
                                    } else {
                                        setSSNError({
                                            state: 3,
                                            message: "",
                                        })
                                    }
                                }
                            }} />
                            <p>ㅡ</p>
                            <input type="text" placeholder='0' maxLength={1} className='signup-input SSN-behind-input' style={SSNError.state === 2 ? errorBorderStyle : null} onChange={(e) => {
                                const regNum = /^[0-9]*$/;
                                if (regNum.test(e.target.value)) {
                                    setBackSSN(e.target.value);
                                    if (frontSSN.length === 6 && e.target.value.length === 1) {
                                        setSSNError({
                                            state: 1,
                                            message: "",
                                        })
                                    } else {
                                        setSSNError({
                                            state: 3,
                                            message: "",
                                        })
                                    }
                                }
                            }} />
                            <p className='XXXXXX'>X X X X X X</p>
                        </div>
                        <div className="SSN-icon_container check_icon_container">
                            <img src={CHECK_ICON_SRC[SSNError.state]} alt="" />
                        </div>
                        <div className="SSN-error_container">
                            {
                                SSNError.state === 2
                                    ? <p style={errorFontStyle}>{SSNError.message}</p>
                                    : null
                            }
                        </div>
                    </div>
                </div>
                <div className='signup-essential_info-phoneNumber_container margin-22'>
                    <div>
                        <p>전화번호</p>
                    </div>
                    <div>
                        <div className='signup-phoneNumber-top_container'>
                            <input type="text" placeholder='+82' maxLength={11} className='signup-input' style={phonenumberError.state === 2 ? errorBorderStyle : null} />
                            <input type="text" placeholder='-없이 입력' className='signup-input' style={phonenumberError.state === 2 ? errorBorderStyle : null} />
                            <button>인증번호 전송</button>
                            <div className="phonenumber-icon_container check_icon_container">
                                <img src={CHECK_ICON_SRC[phonenumberError.state]} alt="" />
                            </div>
                            <div className="phonenumber-error_container">
                                {
                                    phonenumberError.state === 2
                                        ? <p style={errorFontStyle}>{phonenumberError.message}</p>
                                        : null
                                }
                            </div>
                        </div>
                        <div className="signup-phoneNumber-bottom_container">
                            <input type="text" placeholder='인증번호 입력' maxLength={6} className='signup-input' style={certificationError.state === 2 ? errorBorderStyle : null} />
                            <button>인증번호 확인</button>
                            <div className="certification-icon_container check_icon_container">
                                <img src={CHECK_ICON_SRC[phonenumberError.state]} alt="" />
                            </div>
                            <div className="certification-error_container">
                                {
                                    certificationError.state === 2
                                    ? <p style={errorFontStyle}>{certificationError.message}</p>
                                    : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="signup-essential_info-address_container">
                    <div>
                        <p>거주지</p>
                    </div>
                    <div>
                        <div>
                            <div className='address-search-button_container'>
                                <button className='address-search-button' onClick={()=>{
                                    setMapModal(true);
                                }}>
                                    <div className='address-search-button-icon_container'>
                                        <img src="/icon/signup/search_icon.svg" alt="" />
                                    </div>
                                    . 주소 검색
                                </button>
                            </div>
                            <div className='address-display_container'>
                                <div className="address-display" style={addressError.state === 2 ? errorBorderStyle : null}>
                                    {
                                        choosedMap !== ""
                                        ? <p style={{color:'black'}}>{choosedMap.address_name}</p>
                                        : <p>주소를 선택해주세요.</p>
                                    }
                                    <p>
                                        
                                    </p>
                                </div>
                                <div className="address-iconCOntainer check_icon_container">
                                    <img src={CHECK_ICON_SRC[addressError.state]} alt="" />
                                </div>
                                <div className="address-error_container">
                                    {
                                        addressError.state === 2
                                            ? <p style={errorFontStyle}>{addressError.message}</p>
                                            : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="signup-unnecessary_info_container">
                <div className="title_container" style={{ border: "none" }}>
                    <div>
                        <p>추가정보</p>
                        <ChoiceBox />
                    </div>
                    <div></div>
                </div>
                <div className="sex_container">
                    <div>
                        <p>성별</p>
                    </div>
                    <div>
                        <div className='sex-male'>
                            <p>남</p>
                            <div className="male-icon_container" onClick={() => {
                                setSex(true);
                            }}>
                                {
                                    sex === true
                                        ? <img src="/icon/signup/select_icon.svg" alt="" />
                                        : <img src="/icon/signup/unselect_icon.svg" alt="" />
                                }
                            </div>
                        </div>
                        <div className="sex-female" onClick={() => {
                            setSex(false);
                        }} >
                            <p>여</p>
                            <div className="female-icon_container">
                                {
                                    sex === false
                                        ? <img src="/icon/signup/select_icon.svg" alt="" />
                                        : <img src="/icon/signup/unselect_icon.svg" alt="" />
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="age_container margin-22" style={{display : "none"}}>
                    <div>
                        <p>나이</p>
                    </div>
                    <div>
                        <SelectBox title="선택" />
                        {/* <SelectBox setNextCategory={setFirstCategory} contents={trading_category} title='첫 번째 카테고리' name="first-category" /> */}
                    </div>
                </div>

                <div className="intro_container margin-22">
                    <div>
                        <p>자기소개</p>
                    </div>
                    <div>
                        <div className='intro-input_container'>
                            <input type="text" placeholder='Ex) 직거래를 선호한다. etc...' maxLength={20} onChange={(e) => {
                                if (e.target.value.length <= 20) {
                                    setIntroduce(e.target.value);
                                }
                            }} />
                            <p>{introduce.length}/20</p>
                        </div>
                    </div>
                </div>
                <div className="prefer_container">
                    <div>
                        <p>선호상품</p>
                    </div>
                    <div>
                        <div className='prefer-input_container'>
                            {
                                selectedCategory.length > 0 ?
                                    <div className='prefer-input-group_container'>
                                        <HashGroup content={selectedCategory} setContent={setSelectedCategory} />
                                    </div>
                                    : null
                            }
                            <div className="prefer-input datalist_wrap">
                                <DataList data={prdMergedCategory} title={"관심있는 상품 카테고리를 선택해주세요"} container={selectedCategory} setFunc={setSelectedCategory} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="register-button_container">
                <BlueButton onClick={() => {
                    signupButton();
                }} >등록하기</BlueButton>
            </div>
            {
                mapModal === true 
                ?<Modal on={true} className="map_modal" >
                    <button className='map_close_button' onClick={()=>{
                        setMapModal(false);
                    }}>X</button>
                    <div className="map_container">
                        <div className="kakao-map" style={{width : "1000px", height : "500px"}}/>
                    </div>
                    <div className="kakao_map_search_wrap">
                        <KakaoMapSearch setSearchMapKeyword={setSearchMapKeyword} searchMapResults={searchMapResults} setSelectedMap={setSelectedMap} />
                    </div>
                    <div className='selected_map_info_container'>
                        <p className='selected_map_info'>
                            {
                                selectedMap !== {}
                                ? selectedMap.address_name
                                : null
                            }
                        </p>
                        <div className="selected_map_submit_button_container">
                            <button className='selected_map_submit_button' onClick={()=>{
                                if(selectedMap !== {}){
                                    setChoosedMap(selectedMap);
                                    setMapModal(false);
                                    setAddressError({
                                        state : 1,
                                        message : "",
                                    })
                                }
                            }} >선택</button>
                        </div>
                    </div>
                </Modal>
                :null
            }
        </div>
    )
}


function KakaoMapSearch(props) {
    const {setSearchMapKeyword, searchMapResults,setSelectedMap} = props;
    return(
        <div className="kakao_map_search_container">
            <form action="" onSubmit={(e)=>{
                e.preventDefault();
                setSearchMapKeyword(document.querySelector('.kakao-map-search-input').value);
            }}>
                <p>키워드:</p>
                <input type="text" placeholder='키워드를 입력해주세요' className='kakao-map-search-input' />   
                <button type='submit'>검색하기</button>
            </form>
            {
                searchMapResults.map((data,index)=>{
                    return(
                        <div className="kakao_map_search-result_container" onClick={()=>{
                            setSelectedMap(data);
                        }}>
                            <div className="placename_container">
                                <p className='placename'>{data.place_name}</p>
                            </div>
                            <div className="result-top_container">
                                <PastelBlueBox content="도로명" />
                                <p className='loadname load_content'>{data.address_name}</p>
                            </div>
                            <div className="result-bottom_container">
                                <div className="load_number_container">
                                    <PastelBlueBox content="지번" />
                                    <p className='load_number load_content' >{data.road_address_name}</p>
                                </div>
                                {/* <div className="postcode_container">
                                    <PastelBlueBox content="우편번호" />
                                    <p className='postcode load_content'>22212</p>
                                </div> */}
                            </div>
                            <div className="phonenumber_container">
                                <p>{data.phone}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}



export default Signup;