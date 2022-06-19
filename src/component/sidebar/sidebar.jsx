import './sidebar.scss'   
import firts_category from '../category_contents/first_category'

function Sidebar(props) {
    //const navigate = useNavigate();
    return(
        <div className="sidebar_container">
            <div className="sidebar">
                {
                    firts_category.map((categoryItem,index)=>{
                        return(
                            <div className="categoryItem_container">
                                <p className='categoryItem' id={`first_category_${index}`} onClick={()=>{
                                    //navigate('/'+categoryItem.path);
                                }}>{categoryItem.content}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar;