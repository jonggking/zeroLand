import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation, useAsyncError } from "react-router-dom";
import * as Api from "../../utils/Api";
import { UserStateContext, DispatchContext } from "../../App";


const KakaoAuth = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // const kakao_code = location.search.split("=")[1];

    const {user} = useContext(UserStateContext)
    const dispatch = useContext(DispatchContext);


    //여기서 코드 받아오고
    const [code, setCode] = useState("");

    const kakaoRegister = async (_code) => {
            if (!_code) return;
            const res = await Api.post("kakaoOauth", {code: _code});
            
            const kakaoUser = res.data;
            const kakaoToken = kakaoUser.token;

            sessionStorage.setItem("userToken", kakaoToken);

            dispatch({
                type: "LOGIN",
                payload: kakaoUser,
            })
            
            // if (res.data.errorCause === "email") {
            //     const loginRes = await Api.post("kakaoLogin", {code: _code});
            //     console.log(loginRes);

            //     const kakaoUser = loginRes.data;
            //     const kakaoToken = kakaoUser.token;

            //     sessionStorage.setItem("userToken", kakaoToken);

            //     dispatch({
            //         type: "LOGIN",
            //         payload: kakaoUser,
            //     })
            //     // navigate("/");
            // }
        };
      
        const getSourceCode = () => {
            const params = new URL(window.location.href).searchParams;
            const _code = params.get("code");
            if (!code) {
              kakaoRegister(_code);
            }
            setCode(_code);
        }
      
        useEffect(()=> {
          getSourceCode();

        }, [])


        // const kakaoLogin = async () => {
            
        //     const res = await Api.post("kakaoLogin", {kakao_code});
    
        //     const kakaoUser = res.data;
        //     const kakaoToken = kakaoUser.token;
            
        //     sessionStorage.setItem("userToken", kakaoToken);

        //     dispatch({
        //     type: "LOGIN",
        //     payload: kakaoUser,
        //     })
        // }
        // useEffect(() => {
        //     // kakaoLogin();
        //     navigate("/");
        // }, [])


    return (
        <div>로그인 중입니다. 잠시만 기다려주세요.</div>
    )
}

export default KakaoAuth;