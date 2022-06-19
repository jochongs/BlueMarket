import axios from 'axios';
import {useEffect} from 'react';
import { Outlet, useNavigate } from 'react-router';


function RequireAuth() {
    const navigate = useNavigate();
    useEffect(()=>{
        const auth_user = async ()=>{
            const user = await axios.post('/auth-user')
            .catch((e)=>{
                alert(e);
                navigate(-1);
                return 0;
            })
            if(user === undefined){
                alert('로그인이 필요한 페이지입니다.');
                navigate('/login');
            }
        }
    },[])
    return <Outlet/>;
}

export default RequireAuth;
    