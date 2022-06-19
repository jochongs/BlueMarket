function mergeCategory(category,type="each"){ //merge랑 each
    let first = [];
    let second = [];
    let third = [];
    category.map((data,index)=>{
        let temp = {
            content : data.content,
            value : data.value,
            path : data.path,
            key : data.key,
        };
        if(data?.next_category !== undefined){
            data.next_category.map((data2,index)=>{
                let temp2 = {
                    content : data2.content,
                    value : data2.value,
                    path : data2.path,
                    key : data2.key,
                };
                if(data2?.next_category !== undefined){
                    data2.next_category.map((data3,index)=>{
                        let temp3 = {
                            content : data3.content,
                            value : data3.value,
                            path : data3.path,
                            key : data3.key,
                        };
                        third.push(temp3);
                        if(temp3.key === undefined){
                            console.log(temp3);
                        }
                    })
                }
                second.push(temp2);
            });
        }
        first.push(temp);
    });
    if(type === "merge"){
        let categoryArray = [];
        first.map((data)=>{
            categoryArray.push(data);
        });
        second.map((data)=>{
            categoryArray.push(data);
        });
        third.map((data)=>{
            categoryArray.push(data);
        });
        return categoryArray;
    }
    if(type==="each"){
        let categoryArray = {
            first : first,
            second : second,
            third : third,
        }
        return categoryArray;
    }
}

export default mergeCategory;