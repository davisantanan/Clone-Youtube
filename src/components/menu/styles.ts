import styled from "styled-components";

export const Container = styled.div<{ openMenu:boolean }> `
    width: ${({ openMenu }) => openMenu? '250px': '100px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 10px 10px 10px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    position: sticky;
    top: 55px;
`;

export const MenuItem = styled.div<{ openMenu:boolean }> `
    width: 100%;
    min-height: ${({ openMenu }) => openMenu? '45px': '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ openMenu }) => openMenu? 'row': 'column'};
    justify-content: ${({ openMenu }) => openMenu? 'none': 'center'};
    align-items: center;

    span {
        font-weight: ${({ openMenu }) => openMenu? '400': '400'};
        margin-left: ${({ openMenu }) => openMenu? '20px': 'none'};
        font-size: ${({ openMenu }) => openMenu? '14px': '10px'};
        width: 100%;
        display: flex;
        justify-content: ${({ openMenu }) => openMenu? 'none': 'center'};
    }
    
    :hover{
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

export const ButtonIcon = styled.img `
    width: 22px;
    height: 22px;
`;

export const Divider = styled.div<{ openMenu:boolean }> `
    display: ${({ openMenu }) => openMenu? 'flex': 'none'};
    width: 100%;
    margin: 5px 0 10px 0;
    border-top: .1px solid #cfcfcf;
    
`;

export const Div = styled.div<{ openMenu:boolean }> `
    display: ${({ openMenu }) => openMenu? 'flex': 'none'};
    flex-direction: column;
`;

export const LoginContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
`
export const TextLogin = styled.span `
    width: 90%;
    padding: 2px 15px;
`;

export const ImgLogin = styled.img `
    height: 20px;
    width: 20px;
`
export const TextImgLogin = styled.span `
    font-size: 14px;
`
export const LoginButton = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    border: .1px solid #e4e4e4;
    border-radius: 15px;
    padding: 2px 15px;
    gap: 10px;
    box-sizing: border-box;
    height: 32px;
    width: 70%;
    margin: 10px 0 0 20px;
    outline: none;
    cursor: pointer;
     
    :hover {
        background-color: #4285f430;
    }
`

export const TitleSession = styled.span `
    padding: 2px 15px;
`

export const Footer = styled.footer `
    display: flex;
    flex-direction: column;
    padding: 2px 15px;
    box-sizing: border-box;
    justify-content: center;
    width: 100%;
    
    p {
        font-size: 12px;
        font-weight: 620;
        color: #606060;
        cursor: pointer;
    }
    
    span {
        font-size: 12px;
        color: hsla(0, 0%, 7%, 0.65);
        margin-top: 5px;
    }
`