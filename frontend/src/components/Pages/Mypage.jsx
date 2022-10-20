import React, { useEffect, useState } from "react";
import Info from "../MyPage/Info.jsx";
import Reward from "../MyPage/Reward.jsx";
import MyFav from "../MyPage/MyFav.jsx";
import MyReview from "../MyPage/MyReview.jsx";
import ChangeInfo from "../MyPage/ChangeInfo.jsx";
import ChangePassword from "../MyPage/ChangePassword.jsx";
import Withdrawal from "../MyPage/Withdrawal.jsx"
import * as Api from "../../utils/Api";

const navMenuList = [
  { label: "Info", path: "info" },
  { label: "Reward", path: "reward" },
  { label: "MyFav", path: "myfav" },
  { label: "MyReview", path: "myreview" },
];

const mapPathToComp = {
  info: () => <Info />,
  reward: () => <Reward />,
  myfav: () => <MyFav />,
  myreview: () => <MyReview />,
  changeinfo: () => <ChangeInfo />,
  changepassword: () => <ChangePassword />,
  withdrawal: () => <Withdrawal />
  // withdrawal: () =>
};

export const MyPageContext = React.createContext({
  changeMenu: () => {},
  setInfo: () => {},
  // info: {
  //   name: "이름",
  //   nickname: "사용자 이름",
  //   email: "rabbilt@elice.com",
  //   phone: "010-1010-2020",
  //   introduction: "소개",
  //   close_time: "오후 10시",
  //   reviews: "리뷰",
  //   star_avg: 4.8,
  // },
  // setReviews: () =>{},
  // reviews: [{
  //   review_id: 0,
  //   star: 0,
  //   description: "",
  //   // photo: null,
  //   created_time:"",
  //   updated_time:"",
  //   user_id: "",
  //   store_id: "",
  //   like_reviews: 0
  // }],
});

function Mypage() {
  const [menu, setMenu] = useState("info");
  
    // info 부분
  const [info, setInfo] = useState({
    name: "이름",
    nickname: "사용자 이름",
    email: "rabbilt@elice.com",
    phone: "010-1010-2020",
    introduction: "소개",
    close_time: "오후 10시",
    reviews: "리뷰",
    star_avg: 4.8,});

    // myReview 부분
  const [reviews,setReviews] = useState([{
    review_id: 0,
    star: 0,
    description: "",
    // photo: null,
    created_time:"",
    updated_time:"",
    user_id: "",
    store_id: "",
    like_reviews: 0
  }]);

    // myFav부분
  const [favStores,setFavStores] = useState([{

    // description:"",
    // photo:"",
    // photo2:"",
    // store_name:"",
    // address_detail:"",
    // star: 0
    name:"",
    description:"",
    tag:"",
    url:"",
    phone:"",
    open_time: null,
    close_time:null,
    address_detail:"",
    avg_star:0
  }])

  const changeMenu = (path) => {
    setMenu(path);
  };

  const navMenuClassStyle = "py-4 nav-link text-white border border-secondary";
  const contextValue = {
    changeMenu,
    setInfo,
    info,
    setReviews,
    reviews,
    setFavStores,
    favStores,
  };

  useEffect(() => {
    console.log(info);
  }, [info]);

    return (    
      <>
      <MyPageBox.PageFormBox>
        <MyPageBox.PageContainer>
          <MyPageBox.Menubox>
            <MyPageBox.Menus>My Page</MyPageBox.Menus>
            <MyPageBox.Menus>Information</MyPageBox.Menus>
            <MyPageBox.Menus>Favorites</MyPageBox.Menus>
            <MyPageBox.Menus>My review</MyPageBox.Menus>
          </MyPageBox.Menubox>
          <MyPageBox.ContentBox>
            <MyPageBox.ProfileBox>
              <MyPageBox.ProfilePhoto></MyPageBox.ProfilePhoto>
              <MyPageBox.ProfileIntro>
                  <MyPageBox.ProfileEmail>메일칸 input 이런 걸로 수정 가능</MyPageBox.ProfileEmail>
                  <MyPageBox.ProfileMyInfo>소개칸 크기 보라고 밑줄 쳤어요 수정 가능</MyPageBox.ProfileMyInfo>
              </MyPageBox.ProfileIntro>
            </MyPageBox.ProfileBox>
            <MyPageBox.ReviewBox>
              <MyPageBox.ReviewSquare>
              <MyPageBox.ReviewOne>숫자</MyPageBox.ReviewOne>
              <MyPageBox.ReviewTitle>관심 상점</MyPageBox.ReviewTitle>
              </MyPageBox.ReviewSquare>
              <MyPageBox.ReviewSquare>
              <MyPageBox.ReviewOne>숫자</MyPageBox.ReviewOne>
              <MyPageBox.ReviewTitle>관심 상점</MyPageBox.ReviewTitle>
              </MyPageBox.ReviewSquare>
              <MyPageBox.ReviewSquare>
              <MyPageBox.ReviewOne>숫자</MyPageBox.ReviewOne>
              <MyPageBox.ReviewTitle>관심 상점</MyPageBox.ReviewTitle>
              </MyPageBox.ReviewSquare>
            </MyPageBox.ReviewBox>
            <MyPageBox.PageFootBtnBox>
              <MyPageBox.PageFootBtn>비밀번호 변경</MyPageBox.PageFootBtn>
              <MyPageBox.PageFootBtn>회원 탈퇴</MyPageBox.PageFootBtn>
            </MyPageBox.PageFootBtnBox>
          </MyPageBox.ContentBox>
        </MyPageBox.PageContainer>
      </MyPageBox.PageFormBox>
      </>



    //     <div className="container py-2">
    //       <div className="row mx-4 mt-4">
    //         <nav className="fs-4 text-end ps-0 nav flex-column col-3 justify-content-left bg-secondary bg-gradient">
    //             <a className="fst-italic py-4 nav-link active text-white border border-secondary" aria-current="page" href="#" onClick={()=>{setMenu(<Info />)}}>Info</a>
    //             <a className="py-4 nav-link text-white border border-secondary" href="#" onClick={()=>{setMenu(<Reward />)}}>Reward</a>
    //             <a className="py-4 nav-link text-white border border-secondary" href="#" onClick={()=>{setMenu(<MyFav />)}}>Fav</a>
    //             <a className="py-4 nav-link text-white border border-secondary" href="#" onClick={()=>{setMenu(<MyReview />)}}>My Review</a>
    //             <button className="py-4 nav-link text-white border border-secondary" onClick={()=>{setMenu(<Info />)}}>Info</button>
    //             <button className="py-4 nav-link text-white border border-secondary" onClick={()=>{setMenu(<Reward />)}}>Reward</button>
    //             <button className="py-4 nav-link text-white border border-secondary" onClick={()=>{setMenu(<MyFav />)}}>Fav</button>
    //             <button className="py-4 nav-link text-white border border-secondary" onClick={()=>{setMenu(<MyReview />)}}>My Review</button>
    //         </nav>
    //         <div className="col-9 bg-light">
    //           {menu}  
    //         </div>   
    //   </div>
    // </div>
  );
}

export default Mypage;
