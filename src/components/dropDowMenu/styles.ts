import styled from "styled-components";

export const Container = styled.div<{ openDropMenu:boolean }> `
    display: ${({ openDropMenu }) => openDropMenu? 'flex': 'none'};
    flex-direction: column;
    position: absolute;
    top: 3rem;
    right: 4rem;
    background-color: #fff;
    width: 280px;
    border-radius: 8px;
    box-shadow: -3px 1px 18px -6px gray;

    @media(max-width: 445px) {
       position: fixed;
       top: 0;
       right: 0;
       width: 100vw;
       height: 100vh;
       overflow: auto;
    }
`;

export const ProfileContainer = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 50px;
    max-height: 60px;
`;

export const ButtonCloseDropdown = styled.img `
    display: none;
    width: 20px;
    margin: 8px 0 0 8px;

    @media(max-width: 445px) {
        display: flex
    }
`;

export const ProfileImageContainer = styled.div `
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
`;

export const ProfileImage = styled.div `
    background-color: #065fd4db;
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;

    span {
        color: #000;
        font-size: 17px;
    }
`;

export const ProfileName = styled.span `
    font-size: 16px;
    width: 50%;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const MenuItem = styled.div `
    width: 100%;
    min-height: 40px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 2px 15px;

    span {
        font-weight: 400;
        margin-left: 20px;
        font-size: 15px;
        width: 100%;
    }

    :hover{
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

export const ButtonIcon = styled.img `
    width: 22px;
    height: 22px;
`;

export const Divider = styled.div`
    display: flex;
    width: 100%;
    margin: 5px 0 7px 0;
    border-top: .1px solid #cfcfcf;
`;