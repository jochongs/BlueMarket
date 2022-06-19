import axios from "axios";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

function LogoutAuth(props) {
    const navigate = useNavigate();
    useEffect(()=>{
        const logout_auth = async ()=>{
            const result = await axios.post('/ogout-auth')
            .catch((e)=>{
                alert(e);
                navigate(-1);
            })
            if(result === undefined){
                alert('failed to access : you have to Logout');
                navigate(-1);
            }
        }
        console.log('로그아웃 훅 검사');
    },[]);
    return <Outlet/>
}

export default LogoutAuth;