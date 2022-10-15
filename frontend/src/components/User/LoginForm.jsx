import React, { useContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import * as LoginStyled from "../StyledComponents/SignStyled";
import { KaKaoButton } from "./KakaoLogin";
import NaverLogin from "./NaverLogin";
import * as api from "../../utils/Api";
import { DispatchContext } from "../../App";

//가입한 정보가 없으면 없다고 말해줘야 함...
//비밀번호 틀렸으면 틀렸다고 말해줘야 함...

function LoginForm () {
    const navigate = useNavigate();
    const dispatch = useContext(DispatchContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(true);

    const [emailMsg, setEmailMsg] = useState("");
    const [pwdMsg, setPwdMsg] = useState('');

    //이메일, 비밀번호 유효성 검사
    const validateEmail = (email) => {
        return email
          .toLowerCase()
          .match(/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
      };
    
      const validatePwd = (password) => {
        return password
          .toLowerCase()
          .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/);
      }

      const isEmailValid = validateEmail(email);
      const isPwdValid = validatePwd(password);

      const isAllValid = isEmailValid && isPwdValid;

      const onSubmit = async (e) => {
        e.preventDefault();

        //여기서 비밀번호나 아이디 틀렸으면 걸러주면 되겠다. 대충 얼럿으로 하셈...

      try {
        const res = await api.post("user/login", {
          email, 
          password,
        });
        const user = res.data;
        const jwtToken = user.token;

        // 토큰 저장
        sessionStorage.setItem("userWToken", jwtToken);

        dispatch({
          type: "LOGIN",
          payload: user,
        });

        navigate("/", { replace: true });
        console.log("로그인 성공");
      } catch (err) {
        setLogin(false);
        console.log("로그인 실패\n" , err)
      }
      }

      const onChangeEmail = useCallback((e) => {
        const currEmail = e.target.value;
        setEmail(currEmail);
    
        if (!validateEmail(currEmail)) {
          setEmailMsg("이메일 형식이 올바르지 않습니다.")} else {
            setEmailMsg("")
          }
        })
    
        const onChangePwd = useCallback((e) =>{
          const currPwd = e.target.value;
          setPassword(currPwd);
    
          if (!validatePwd(currPwd)) {
            setPwdMsg("영문, 숫자, 특수기호 조합으로 10자리 이상 입력해주세요.")
          } else {
            setPwdMsg("")
          }
        }, [])


    return (
        <LoginStyled.FormBox>
            <LoginStyled.LoginInputBox>
                <LoginStyled.FormTitle>로그인</LoginStyled.FormTitle>
                <LoginStyled.InputTitle>이메일 주소 *</LoginStyled.InputTitle>
            <LoginStyled.InputText 
                name="email"
                type="text"
                placeholder="ex) zeroland@zeroland.com"
                onChange={onChangeEmail}/>
                <LoginStyled.OutputText className={isEmailValid ? 'success' : 'error'}>{emailMsg}</LoginStyled.OutputText>
        <LoginStyled.InputTitle>비밀번호 *</LoginStyled.InputTitle>
            <LoginStyled.InputText 
                name="password"
                type="password"
                placeholder="**********"
                onChange={onChangePwd}/>
                <LoginStyled.OutputText className={isPwdValid ? 'success' : 'error'}>{pwdMsg}</LoginStyled.OutputText>
                <LoginStyled.FootBtnBox>
                    <LoginStyled.FootButton onClick={onSubmit} type="submit" disabled={!isAllValid}>로그인</LoginStyled.FootButton>
                    <a href="./register"><LoginStyled.FootButton>회원가입
                    </LoginStyled.FootButton></a>
                </LoginStyled.FootBtnBox>
                <LoginStyled.LogoBox>
                  <NaverLogin /> 
                  <KaKaoButton />
                </LoginStyled.LogoBox>
            </LoginStyled.LoginInputBox>
        </LoginStyled.FormBox>
    );
}

export default LoginForm;