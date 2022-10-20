import React from "react"
import StarRate from "./StarRate.jsx"
import * as StoreInfoCard from "../StyledComponents/StoreCardStyled";

function StoreCard({...props}) {
    const {favStore}= props
    console.log(favStore)

  return(
    <>
        <StoreInfoCard.CardBox>
            <StoreInfoCard.InnerBox>
            <StoreInfoCard.StoreName>엘리스 스테이션</StoreInfoCard.StoreName>
            <StoreInfoCard.StarBox><StarRate/></StoreInfoCard.StarBox>
            <StoreInfoCard.LikeIcon>❤️</StoreInfoCard.LikeIcon>
            <StoreInfoCard.StoreAdress>여기가 매장 주소를 적는 칸 입니다. 주소가 길어야.</StoreInfoCard.StoreAdress>
            </StoreInfoCard.InnerBox>
            <StoreInfoCard.StoreInfoBox>
                여기가 매장 정보다
            </StoreInfoCard.StoreInfoBox>
        </StoreInfoCard.CardBox>

        <StoreInfoCard.CardBox>
            <StoreInfoCard.InnerBox>
            <StoreInfoCard.StoreName>엘리스 스테이션</StoreInfoCard.StoreName>
            <StoreInfoCard.StarBox><StarRate/></StoreInfoCard.StarBox>
            <StoreInfoCard.LikeIcon>❤️</StoreInfoCard.LikeIcon>
            <StoreInfoCard.StoreAdress>여기가 매장 주소를 적는 칸 입니다. 주소가 길어야.</StoreInfoCard.StoreAdress>
            </StoreInfoCard.InnerBox>
            <StoreInfoCard.StoreInfoBox>
                여기가 매장 정보다
            </StoreInfoCard.StoreInfoBox>
        </StoreInfoCard.CardBox>


    </>
//     <div className="card mb-3">
//         <div className="row g-0">
//             <div className="col-md-8">
//                 <div className="card-body">
//                     <div className="row">
//                         <h4 className="col card-title text-dark">매장 명</h4>
//                         <h5 className="col text-secondary">매장 주소</h5>
//                         <div className="col text-secondary">🧡x6</div>
//                         <div className="col"><StarRate /></div>
//                     </div>
//                     <p className="card-text text-secondary">매장 정보</p>
//                 </div>
//             </div>
//             {isEditable}
//         </div>
//     </div>
  )
}

export default StoreCard;
