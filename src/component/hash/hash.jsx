import './hash.scss';

function HashGroup(props) {
    const hashArray = props.content;
    const setHashArray = props.setContent;

    const deleteHash = (index) =>{
        let temp = [];
        for (let i = 0; i < hashArray.length; i++) {
            if(i !== index){
                temp.push(hashArray[i]);
            }
        }
        setHashArray(temp);
    }

    return(
        <div className="hash_group_container">
            {
                hashArray.map((hash,index)=>{
                    return(
                        <div className="hash_container">
                            <div className="hash-p_container">
                                <p className='hash' id='register_hash' style={{color:'white'}}>{hash}</p>
                            </div>
                            <button className='hash_close_button' onClick={()=>{
                                deleteHash(index);
                            }}>
                                <img src="/icon/register/x_icon.svg" alt="" />
                            </button>
                        </div>
                    ) 
                })
            }
        </div>
    )
}

export default HashGroup;