import './datalist.scss';

function DataList(props) {
    const {data,title,id ="temp"} = props;
    const container = props.container;
    const setFunc = props.setFunc;
    let dataArray = []; //데이터의 content만 뽑아서 만든 배열 / 객체로 이루어진 배열이 아님
    data.map((data)=>{
        dataArray.push(data.content);
    });

    const findKey = (content,array)=>{ 
        array.map((data,i)=>{
            if(data.content === content){
                return data.key;
            } 
        })
        return 0;
    }

    return(
        <div className="datalist_container">
            <input type="text" placeholder={title} list={id} onKeyPress={(e)=>{
                if(e.key === "Enter"){
                    const inputValue = e.target.value;   
                    if(dataArray.includes(inputValue)){
                        if(container.includes(inputValue)){
                            alert('이미 선택된 카테고리입니다.');
                            e.target.value = "";
                        }else{
                            let temp = [...container];
                            temp.push(inputValue);
                            setFunc(temp);
                            e.target.value = "";
                        }
                    }
                }
            }}  />
            <datalist id={id} >
                {
                    data.map((data,index)=>{
                        return <option value={data.content} className={toString(index)+"_op"}></option>
                    })
                }
            </datalist>
        </div>
    )
}

export default DataList;