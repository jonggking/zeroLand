import styled from "styled-components";

export const PageFormBox = styled.div`
    display: flex;
    padding-top: 40px;
    width: 100%;
    height: 85vh;
    min-width: 400px;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
`;

export const PageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    justify-content: center;
    width: 60vw;
    height: 70vh;
    background-color: #f2f2f2;
    border-radius: 35px;
    max-width: 898px;
`

export const Menubox = styled.div`
    display: flex;
    flex-direction: column;
    width: 15vw;
    height: 69vh;
    align-items: center;
    padding: 0 5px;
`

export const Menus = styled.div`
    display: flex;
    border: 1px solid #01402E;
    border-radius: 10px;
    width: 100%;
    height: 60px;
    color: #01402E;
    font-size: 20px;
    justify-content: center;
    line-height: 60px;
    letter-spacing: 3px;
    margin: 5px;
    cursor: pointer;

    &:first-child {
        margin-top: 10px;
        border: none;
        font-size: 23px;
        font-weight: bolder;
        border-bottom: 3px solid #01402E;
    }
`

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 45vw;
    height: 69vh;
    border: 1px solid black;
    max-width: 630px;
    border-radius: 30px;
`

export const ProfileBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    /* border: 1px solid black; */
    width: 100%;
    height: 180px;
    flex-wrap: wrap;
`

export const ProfilePhoto = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 1px solid black;
    margin-top: 40px;
    margin-left: 60px;
    margin-right: 10px;
`

export const ProfileIntro = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 150px;
`

export const ProfileEmail = styled.div`
    width: 200px;
    height: 30px;
    border-bottom: 1px solid black;
    margin-top: 60px;
    color: #01402E;
`

export const ProfileMyInfo = styled.div`
    width: 300px;
    height: 30px;
    border-bottom: 1px solid black;
    color: #01402E;
    margin-bottom: 15px;
`

export const ReviewBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    height: 180px;
    flex-wrap: wrap;
    margin-top: 30px;
    color: #01402E;
`

export const ReviewSquare = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
`

export const ReviewOne = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    justify-content: space-evenly;
    text-align: center;
`

export const ReviewTitle = styled.div`
    width: 130px;
    height: 30px;
    border: 1px solid black;
    text-align: center;
`

export const PageFootBtnBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 250px;
    height: 60px;
    margin-top: 140px;
    padding-left: 10px;
`

export const PageFootBtn = styled.button`
    border: 1px solid black;
    width: 110px;
    height: 35px;
    border-radius: 20px;
`