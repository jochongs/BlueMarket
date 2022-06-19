import './product_register.scss';
import Nav from '../../component/nav/nav';
import axios from 'axios';
import CategorySequence from '../../component/category_sequence/category_sequence';
import { useState } from 'react';
import SelectBox from '../../component/selectbox/selectbox';
//import prd_category from '../../component/category_contents/first_category';
import trading_category from '../../component/category_contents/trading_category';
import HashInput from '../../component/hash_input/hash_input';
import HashGroup from '../../component/hash/hash';
import prd_category from '../../category_data/prd_category';
import { useEffect } from 'react';
import prdState from '../../component/category_contents/product_state';

function ProductRegister(props) {
    const [imgset, setImgset] = useState([]);

    const [prdTitle, setPrdTitle] = useState("");

    const [prdDesc, setPrdDesc] = useState("");

    const [firstCategory, setFirstCategory] = useState(-1);
    const [secondCategory, setSecondCategory] = useState(-1);
    const [thirdCategory, setThirdCategory] = useState(-1)

    const [firstarea, setFirstarea] = useState(-1);
    const [secondarea, setSecondarea] = useState(-1);
    const [thirdarea, setThirdarea] = useState(-1);

    const [productState, setProductState] = useState(-1); //제품상태

    const [deliveryCharge, setDeliveryCharge] = useState(false); 
    const [negotiation, setNegotiation] = useState(false);

    const [prdPrice, setPrdPrice] = useState(-1);

    const [hash, setHash] = useState([]);

    const [imgsrc, setImgsrc] = useState([]); //얘는 꼭 여기서 관리할  필요가 없을 수도 있음
    
    const [imgRegisterWarning, setImgRegisterWarning] = useState({
        state : false,
        message : "",
    })

    const [prdTitleWarning, setPrdTitleWarning] = useState({
        state : false,
        message : "",
    });

    const [prdDescWarning, setPrdDescWarning] = useState({
        state : false,
        message : "",
    })

    const [prdCategory, setPrdCategory] = useState({
      state : false,
      message : "",  
    })

    const [prdAreaWarning,setPrdAreaWarning] = useState({
        state : false,
        message : "",
    });

    const [prdStateWarning, setPrdStateWarning] = useState({
        state : false,
        message : "",
    })

    const [prdPriceWarning, setPrdPriceWarning] = useState({
        state : false,
        message : "",
    })
    
    const registerPrdSubmit = ()=>{
        const registerContainer = document.querySelector('.product_register');
        const registerImg = registerContainer.children[1];
        const registerTitle = registerContainer.children[2];
        const registerDesc = registerContainer.children[3];
        const registerCategory = registerContainer.children[4];
        const registerArea = registerContainer.children[5];
        const registerState = registerContainer.children[6];
        const registerPrice = registerContainer.children[7];
        //const registerHash = registerContainer.children[8];

        let temp = {...imgRegisterWarning};
        temp.state = false;
        temp.message = "";
        setImgRegisterWarning(temp);
        setPrdTitleWarning(temp);
        setPrdDescWarning(temp);
        setPrdCategory(temp);
        setPrdAreaWarning(temp);
        setPrdStateWarning(temp);
        setPrdPriceWarning(temp);

        if(imgset.length === 0 ){
            let temp = {...imgRegisterWarning};
            temp.state = true;
            temp.message = "상품 사진을 등록해주세요";
            setImgRegisterWarning(temp);
            registerImg.scrollIntoView(true);
        }else if(prdTitle.length === 0){
            let temp = {...prdTitleWarning};
            temp.state = true;
            temp.message = "상품 제목을 등록해주세요";
            setPrdTitleWarning(temp);
            registerTitle.scrollIntoView(true);
        }else if(prdDesc.length === 0){
            let temp = {...prdDescWarning};
            temp.state = true;
            temp.message = "제품설명을 등록해주세요";
            setPrdDescWarning(temp);
            registerDesc.scrollIntoView(true);
        }else if(firstCategory < 0 || firstCategory === null){
            console.log(firstCategory);
            let temp = {...prdCategory};
            temp.state = true;
            temp.message = "상품 카테고리를 등록해주세요";
            setPrdCategory(temp);
            registerCategory.scrollIntoView(true);
        }else if(thirdarea < 0 || thirdarea === null){
            let temp = {...prdAreaWarning};
            temp.state = true;
            temp.message = "거래지역의 든 카테고리를 등록해주세요";
            setPrdAreaWarning(temp);
            registerArea.scrollIntoView(true);
        }else if(prdState === -1){
            let temp = {...prdStateWarning};
            temp.state = true;
            temp.message = "제품 상태를 등록해주세요";
            setPrdStateWarning(temp);
            registerState.scrollIntoView(true);
        }else if(prdPrice < 0){
            let temp = {...prdPriceWarning};
            temp.state = true;
            temp.message = "제품 가격을 등록해주세요";
            setPrdPriceWarning(temp);
            registerPrice.scrollIntoView(true);
        }else{
            const productData = {
                user: {},
                img : imgset,
                title : prdTitle,
                desc : prdDesc,
                category : {
                    first : firstCategory,
                    second : secondCategory,
                    third : thirdCategory,
                },
                area : {
                    first : firstarea,
                    second : secondarea,
                    third : thirdarea,
                },
                state : prdState,
                price : prdPrice,
                hash : hash,
            }
            console.log(productData);
            axios.put('/product',productData)
            .then((result)=>{

            })
            .catch(()=>{
                console.log('failed to send the product data to server');
            })
        }
    }
    return(
        <div>
            <Nav/>
            <div className="product_register_container">
                <div className="product_register-category_container">
                    <CategorySequence/>
                </div>
                <div className="product_register">
                    <RegisterTitle/>
                    <RegisterPrdImg imgRegisterWarning={imgRegisterWarning} imgset={imgset} setImgset={setImgset} imgsrc={imgsrc} setImgsrc={setImgsrc}/>
                    <RegisterPrdTitle prdTitleWarning={prdTitleWarning} prdTitle={prdTitle} setPrdTitle={setPrdTitle}/>
                    <RegisterPrdDesc prdDescWarning={prdDescWarning} prdDesc={prdDesc} setPrdDesc={setPrdDesc}/>
                    <RegisterPrdCategory prdCategory={prdCategory} firstCategory={firstCategory} setFirstCategory={setFirstCategory} secondCategory={secondCategory} setSecondCategory={setSecondCategory} thirdCategory={thirdCategory} setThirdCategory={setThirdCategory} />
                    <RegisterPrdTradingArea prdAreaWarning={prdAreaWarning} firstCategory={firstarea} setFirstCategory={setFirstarea} secondCategory={secondarea} setSecondCategory={setSecondarea} thirdCategory={thirdarea} setThirdCategory={setThirdarea} />
                    <RegisterPrdState prdStateWarning={prdStateWarning} productState={productState} setProductState={setProductState}/>
                    <RegisterPrdPrice prdPriceWarning={prdPriceWarning} prdPrice={prdPrice} setPrdPrice={setPrdPrice} deliveryCharge={deliveryCharge} setDeliveryCharge={setDeliveryCharge} negotiation={negotiation} setNegotiation={setNegotiation} />
                    <RegisterPrdHash  hash={hash} setHash={setHash} />
                </div>
                <RegisterButton registerPrdSubmit={registerPrdSubmit} />
            </div>
        </div>
    )
}
function RegisterTitle() {
    return(
        <div className="register_title_container">
            <p className='register_title'>제품정보</p>
        </div>
    )
}

function RegisterPrdImg(props){
    const imgset = props.imgset;
    const setImgset = props.setImgset;
    const imgsrc = props.imgsrc;
    const setImgsrc = props.setImgsrc;
    const imgNum = 3;  
    const imgRegisterWarning = props.imgRegisterWarning;
    const addImgSet = (imgData) => {
        let temp = [...imgset];
        temp.push(imgData);
        setImgset(temp);
    }
    const warningStyle = {
        border : "2px solid #e78331",
    }
    return(
        <div className='register_prdImg_container'>
            <div className="register_prdImg_left_container">
                <div className="register_prdImg_left_title_container">
                    <p>제품이미지</p>
                    <p>({imgset.length}/{imgNum})</p>
                </div>
            </div>
            <div className="register_prdImg_center_container">
                <div className="register_prdImg_center">
                    <label id="register_prdImg_center-label" style={imgRegisterWarning.state === true ? warningStyle : null} for="registe_prd_img">
                        <img src="/icon/register/camera.svg" alt="" />
                    </label>
                    <input name="register_prd_img" id='registe_prd_img' type="file" onChange={(e)=>{
                        if(e.target.value){
                            if(imgset.length === 3){
                                alert("사진은 3장까지 등록할 수 있습니다.");
                            }
                            else{
                                addImgSet(e.target.files[0]);
                                let reader = new FileReader();
                                reader.onload = ()=>{
                                    let temp = [...imgsrc];
                                    temp.push(reader.result);
                                    setImgsrc(temp);
                                };
                                reader.readAsDataURL(e.target.files[0]);
                            }
                        }
                    }} />   
                    <div className='register_prdImg_center-warning_container'>
                        {
                            imgRegisterWarning.state === true 
                            ? <p className='register_prdImg_center-warning'>{imgRegisterWarning.message}</p>
                            : null 
                        }
                    </div>
                </div>
            </div>
            <div className="register_prdImg_right_container">
                <div className="register_prdImg_right-top">
                    {
                        imgsrc.map((src,index)=>{
                            return (
                                <div className={`register_prdImg_right-top-img_container register-preview-${index}`}>
                                    <img src={src} alt="" />
                                    <button onClick={()=>{
                                        const delImg = (i) =>{
                                            let tempSrc = [];
                                            let tempImg = [];
                                            let num = 0;
                                            for (let j = 0; j < imgset.length; j++) {
                                                if(index !== j){
                                                    tempSrc.push(imgsrc[j]);
                                                    tempImg.push(imgset[j]);
                                                }
                                            }
                                            setImgsrc(tempSrc);
                                            setImgset(tempImg);
                                        }
                                        delImg(index);
                                    }}>X</button>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="register_prdImg_right-bottom">
                    <div className="register_prdImg_right-bottom-contents_container">
                        <p className='register_prdImg_right-bottom-title_contents'>상품이미지 사이즈 : 640 X 640</p>
                        <p className='register_prdImg_right-bottom-contents'>-큰 이미지들은 사이즈에 맞게 잘려서 올라갑니다.</p>
                        <p className='register_prdImg_right-bottom-contents'>-이미지 클릭 후 이미지 순서 변경 가능합니다.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function RegisterPrdTitle(props) {
    const [titleLength,setTitleLength] = useState(0);
    const prdTitleWarning = props.prdTitleWarning;
    const warningStyle = {
        border : "2px solid #e78331",
    }
    return(
        <div className="register_prd_title_conatiner">
            <div className="register_prd_title-title_container">
                <p className='register_prd_title-title'>제목</p>
            </div>
            <div className="register_prd_title-input_container" style={prdTitleWarning.state===true 
            ? {border : "2px solid #e78331",}
            : null}
            >
                <input type="text" className='register_prd_title-input' maxLength={20} placeholder='Ex) 티셔츠 한 장 10000원에 팝니다.' onChange={(e)=>{
                    setTitleLength(e.target.value.length);
                    props.setPrdTitle(e.target.value);
                }}/>
                <p>{titleLength}/20</p>
                {
                    prdTitleWarning.state === true 
                    ? <div className="register_prd_title-warning_container">
                        <p className='register_prd_title-warning'>*{prdTitleWarning.message}</p>
                     </div>
                    : null
                }
            </div>
        </div>
    )
}

function RegisterPrdDesc(props) {
    const prdDescWarning = props.prdDescWarning;
    const warningStyle = {
        border : "2px solid #e78331",
    }
    return(
        <div className="register_prd_desc_container">
            <div className="register_prd_desc-title_container">
                <p className='register_prd_desc'>제품소개</p>
            </div>  
            <div className="register_prd_desc-contents_container">  
                <textarea style={prdDescWarning.state === true ? warningStyle : null} maxLength={50} placeholder='Ex) 한 번 밖에 안입은 세제품입니다.' onChange={(e)=>{
                    props.setPrdDesc(e.target.value)
                }} />
                {
                    prdDescWarning.state === true
                    ?<div className="register_prd_desc-warning_container">
                        <p className='register_prd_desc-warning'>*{prdDescWarning.message}</p>
                    </div>
                    :null
                }
                
            </div>
        </div>
    )
}

function RegisterPrdCategory(props) {
    let second_category = [];
    const {prdCategory,firstCategory,setFirstCategory,secondCategory,setSecondCategory,setThirdCategory} = props;
    useEffect(() => {
        setSecondCategory(-1);
    }, [firstCategory])

    useEffect(() => {
        setThirdCategory(-1);
    }, [secondCategory]); //문제 : 마운트시에 보여지는 옵션에 해당하는 index랑 category인덱스랑 다를 수도 있음 해결방법 : selectbox컴포넌트에서 useEffect 훅으로 마운트시에 첫 번째 옵션을 선택하게 만들면 됨

    return(
        <div className="register_prd_category_container">
            <div className="register_prd_category-title_container" title='카테고리'>
                <p>제품종류</p>
            </div>
            <div className="register_prd_category">
                <SelectBox setNextCategory={setFirstCategory} contents={prd_category} title='첫 번째 카테고리' name="first-category" />
                {
                    firstCategory !== -1 && prd_category?.[firstCategory]?.next_category !== undefined  
                    ? <SelectBox setNextCategory={setSecondCategory} contents={prd_category[firstCategory].next_category} title="두 번째 카테고리"/>  
                    : null
                }
                {
                    secondCategory !== -1 && prd_category?.[firstCategory]?.next_category?.[secondCategory]?.next_category !== undefined 
                    ? <SelectBox setNextCategory={setThirdCategory} contents={prd_category[firstCategory].next_category[secondCategory].next_category} title='세 번째 카테고리' name="third-category" />
                    : null
                }
                {
                    prdCategory.state === true 
                    ?<div className="register_prd_category-warning_container">
                        <p>*{prdCategory.message}</p>
                    </div>
                    : null
                }                
            </div>
        </div>
    )
}

function RegisterPrdTradingArea(props) {
    let second_category = [];
    
    const {prdAreaWarning,firstCategory,setFirstCategory,secondCategory,setSecondCategory,setThirdCategory} = props;
    useEffect(()=>{
        console.log(firstCategory);
    },[firstCategory]);
    return(
        <div className="register_prd_trading_area_category_container">
            <div className="register_prd_trading_area_category-title_container" title='카테고리'>
                <p>거래장소</p>
            </div>
            <div className="register_prd_trading_area_category">
                <SelectBox setNextCategory={setFirstCategory} contents={trading_category} title='첫 번째 카테고리' name="first-category" />
                {
                    trading_category?.[firstCategory]?.next_category !== undefined
                    ? <SelectBox setNextCategory={setSecondCategory} contents={trading_category[firstCategory].next_category} title="두 번째 카테고리" name="first-category" />  
                    : null
                }
                {
                    trading_category?.[firstCategory]?.next_category?.[secondCategory]?.next_category !== undefined 
                    ? <SelectBox setNextCategory={setThirdCategory} contents={trading_category[firstCategory].next_category[secondCategory].next_category} title='세 번째 카테고리' name="third-category" />
                    : null
                }
                {
                    prdAreaWarning.state === true
                    ? <div className="register_prd_trading_area_category-warning_container">
                        <p>*{prdAreaWarning.message}</p>
                    </div>
                    :null
                }
            </div>
        </div>
    )
}

function RegisterPrdState(props) {
    const {prdStateWarning,productState,setProductState} = props;
    const state = prdState;
    return (
        <div className="register_prd_state_container">
            <div className="register_prd_state-title_container">
                <p>제품 상태</p>
            </div>
            <div className="register_prd_state">
                <SelectBox setNextCategory={setProductState} title="상태 선택" contents={state} value="productState"/>
            </div>
        </div>
    )
}

function RegisterPrdPrice(props) {
    const {prdPriceWarning,prdPrice,setPrdPrice,deliveryCharge,setDeliveryCharge,negotiation,setNegotiation} = props;
    return (
        <div className="register_prd_price_container">
            <div className="register_prd_price-title_container">
                <p>가격</p>
            </div>
            <div className="register_prd_price">
                {
                    prdPriceWarning.state === true 
                    ? <div className="register_prd_price-warning_container">
                        <p>{prdPriceWarning.message}</p>
                    </div>
                    :null
                }
                <div className="register_prd_price-input_container">
                    <input type="number" 
                    style={ prdPriceWarning.state === true  ? {border : "2px solid #e78331"}:null}
                    onChange={(e)=>{
                        //정규표현식으로 숫자만 입력됐는지도 확인
                        var regexp = /^[0-9]*$/;
                        if(regexp.test(e.target.value)){
                            setPrdPrice(e.target.value);
                        };
                    }} />
                    <p>원</p>
                </div>
                <div className="register_prd_price-additional_cost-container">
                    <div className="register_prd_price-additional_cost-delivery_charge_conatiner" onClick={()=>{
                        setDeliveryCharge(!deliveryCharge);
                    }}>
                        <div className="delivery_charge-icon_container">
                            {
                                deliveryCharge === true
                                ? <img src="/icon/register/check_fill.svg" alt="" />
                                : <img src="/icon/register/check_unfill.svg" alt="" />
                            }
                        </div>
                        <div className="delivery_charge-title_container">
                            <p className='delivery_charge-title'>택배비 포함</p>
                        </div>
                    </div>
                    <div className="register_prd_price-addional_cost-negotiation_container" onClick={()=>{
                        setNegotiation(!negotiation);
                    }}>
                        <div className="negotiation-icon_container">
                            {
                                negotiation === true
                                ? <img src="/icon/register/check_fill.svg" alt="" />
                                : <img src="/icon/register/check_unfill.svg" alt="" />
                            }
                        </div>
                        <div className="negotiation-title_container">
                            <p className='negotiation-title'>가격조정 가능</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function RegisterPrdHash(props) {

    const {hash,setHash} = props;
    return(
        <div className="register_prd_hash_container">
            <div className="register_prd_hash-title_container">
                <p>해쉬태그</p>
            </div>
            <div className="register_prd_hash">
                {
                    hash.length>0
                    ? <div className="register_prd_hash-hashTag_container">
                        <HashGroup setContent={setHash} content={hash}/>
                    </div>
                    : null
                }
                <div className='register_prd_hash-input_container'>
                    <HashInput hash={hash} setHash={setHash}/>
                </div>
            </div>
        </div>
    )
}

function RegisterButton(props) {
    return(
        <div className="register_button_wrap">
            <div className="register_button_container">
                <button onClick={props.registerPrdSubmit}>등록하기</button>
            </div>
        </div>
    )
}
export default ProductRegister;