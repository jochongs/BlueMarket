import './hash_input.scss';
import {useState} from 'react';
import { useEffect } from 'react';

function HashInput(props) {
    const hash = props.hash;
    const setHash = props.setHash;
    const [word, setWord] = useState("");

    const addHash = ()=>{
        let temp = [...hash];
        temp.push(word);
        setHash(temp);
    }
    const overHashCheck = ()=>{
        if(hash.length >= 5){
            return true;
        }
        else{
            return false;
        }
    }
    return(
        <div className='hashInput_container'>
            <div className="hashInput_max_container">
                <p>최대 5개까지</p>
            </div>
            <input type="text" placeholder='제품과 관련된 해쉬태그를 등록해주세요.' maxLength={10} onInput={(e)=>{
                const inputValue = e.target.value;
                const inputLastValue = inputValue.charAt(inputValue.length-1);
                if(inputLastValue === " "){
                    e.preventDefault();
                    if(!overHashCheck()){
                        addHash(word); 
                    }else{
                        alert('해쉬태그는 5개까지 등록가능합니다.');
                    }
                    e.target.value = "";
                }
                else{
                    setWord(e.target.value);
                }
                //spaceBar 32   Enter13
            }} onKeyPress={(e)=>{
                if(e.key=="Enter"){
                    e.preventDefault();
                    if(!overHashCheck()){
                        addHash(word); 
                    }else{
                        alert('해쉬태그는 5개까지 등록가능합니다.');
                    }
                    e.target.value = "";
                }
            }} />
        </div>
    )
}

export default HashInput;