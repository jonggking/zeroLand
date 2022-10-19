import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { KAKAO_AUTH_URL } from "./OAuth";
import * as Api from "../../utils/Api";

//프론트는 카카오로부터 인가 코드를 받고 백엔드로 넘겨주는 역할 + 리다이렉팅까지.
//백은 프론트한테 인가 코드 받고 카카오한테 토큰을 발급 받음. 여기에 담긴 유저 정보를 프로젝트 전용 토큰으로 새로 발급해서 프론트한테 줌.


export const KaKaoButton = () => {
    
    
    return (
        <div>
            <a href={KAKAO_AUTH_URL}>
                <img className="kakaologo" src="img/kakaotalk_sharing_btn_small.png" />
            </a>
        </div>
    )
};


export const KakaoLoding = () => {

    const dispatch = useDispatch();
    const [code, setCode] = useState("")

    const Kakao = async (_code) => {
        if (!_code) return;

        const res = await Api.post("kakaoReqToken", {code: _code});
        console.log(res); 
    };

    const getSsoCode = () => {
        const params = new URL(window.location.href).searchParams;
        const _code = params.get("code");
        if (!code) {
            Kakao(_code);
        }
        setCode(_code);
    }

    useEffect(()=> {
        getSsoCode();
    }, [])

    //     try {
    //         const res = await Api.get(KAKAO_AUTH_URL)
    //         console.log(res.data)
    //     }
    //     catch (err) {
    //         console.log(err);
    // }

    // const makeFormData = params => {
    //     const searchParams = new URLSearchParams()
    //     Object.keys(params).forEach(key => {
    //       searchParams.append(key, params[key])
    //     })
    //     return searchParams;
    //   }
    //   return await axios({  
    //     method: 'POST',
    //     headers: {
    //       'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    //     },
    //     url: 'https://kauth.kakao.com/oauth/token',
    //     data: makeFormData({
    //       grant_type: 'authorization_code',
    //       client_id: "b5564c4b0c867f5ffeda4c0d53310fdf",
    //       redirect_uri: "http://127.0.0.1:5173/",
    //       code: code
    //     })
    //   }).then(res => res.data);  


    // const dispatch = useDispatch();

    // window.location.href를 쓰면 현재 주소창으로 주소값을 불러올 수 있다.
    // 인가 코드
    // const href = window.location.href;
    // let code = new URL(href).searchParams.get("code");

    // React.useEffect(async () => {
    //     // await dispatch(userActions.kakaoLogin(code));
    // }, []);

    //api 파일에 kakaoLogin = (code) => api.get(`리다이렉트 되는 주소/?code=${code}`, {}) 이런 식으로 백엔드에 인가 코드를 쿼리 스트링으로 보내줘야 함.
    //userActions 부분은 좀 더 공부를 해야 할 듯...

    // return (
    //     <div>잠시만 기다려주세요. 로그인 중입니다.</div>
    // )
}