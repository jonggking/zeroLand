import React, { useEffect, useContext, useState } from "react";
import ChangePassword from "./ChangePassword.jsx";
import { MyPageContext } from "../Pages/Mypage.jsx";
import * as Api from "../../utils/Api";
import Withdrawal from "./Withdrawal.jsx"


// const userInfo = {
  // nickname: "닉네임",
  // email: "rabbilt@elice.com",
  // phone: "010-1010-2020",
  // introduction: "소개부분", 
  // myFavStores: 4,
  // myReviews: 5,
  // myReward: 8
// };

function Info() {
  const { changeMenu, setInfo, info } = useContext(MyPageContext);
  console.log(info)

  const fetchData = async () =>{
    const response = await Api.get('mypage/info');
    console.log(response.data)
    setInfo(response.data);
  };

  return(      
      <>
   </> 
  )
}

export default Info;
