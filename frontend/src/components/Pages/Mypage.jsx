import React,{useState} from "react"
import Info from "../MyPage/Info.jsx"
import Reward from "../MyPage/Reward.jsx"
import MyFav from "../MyPage/MyFav.jsx"
import MyReview from "../MyPage/MyReview.jsx"
import * as MyPageBox from "../StyledComponents/MyPageStyled";


function Mypage() {

  let [menu, setMenu] = useState(<Info />)

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