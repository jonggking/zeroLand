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
    max-width: 900px;
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
    border-radius: 20px;
    width: 100%;
    height: 80px;
    color: #01402E;
    font-size: 20px;
    justify-content: center;
    line-height: 80px;
    letter-spacing: 3px;
    margin: 5px;
    cursor: pointer;
`

export const ContentBox = styled.div`
    display: flex;
    width: 45vw;
    height: 69vh;
    border: 1px solid black;
    max-width: 600px;
`

export const ProfileBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    border: 1px solid black;
    width: 100%;
    height: 170px;
    flex-wrap: wrap;
`

export const ProfilePhoto = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 1px solid black;
    margin: 22px;
    margin-left: 50px;
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
    border: 1px solid black;
    color: #01402E;
    margin-left: 10px;
    margin-top: 40px;
`

export const ProfileMyInfo = styled.div`
    width: 270px;
    height: 30px;
    border: 1px solid black;
    color: #01402E;
    margin-left: 10px;
`