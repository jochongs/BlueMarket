import './hash_tag.scss';

function HashTag(props){
    const hash_data = [
        {
            name : "중고거래",
            
        },
        {
            name : "중고",
            
        },
        {
            name : "제품",
            
        },
        {
            name : "거래",
            
        },
    ]
    return(
        <div className="hash_tag_container">
            {
                hash_data.map((hash,index)=>{
                    return(
                        <div className="hash_tag">
                            <p>#{hash.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HashTag;