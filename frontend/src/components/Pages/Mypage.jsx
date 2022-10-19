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