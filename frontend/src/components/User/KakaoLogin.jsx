import React from "react";
import { KAKAO_AUTH_URL } from "./OAuth";

export const KaKaoButton = () => {
    return (
        <div>
            <a href={KAKAO_AUTH_URL}>
                <img className="kakaologo" src="img/kakaotalk_sharing_btn_small.png" />
            </a>
        </div>
    )
};