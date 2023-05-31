import styled from "styled-components";

interface typesHeader {
    openSearchBar?: boolean;
    margin?: string;
    login?: boolean;
    clearButton?: boolean;
}

export const Container = styled.header `
    min-width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 1;
`;

export const LogoContainer = styled.div<typesHeader> `
    display: flex;
    align-items: center;

    img {
        cursor: pointer;
        width: 95px;
        
        @media (max-width: 412px) {
            width: 70px;
        }
    }

    @media(max-width: 768px) {
        display: ${({openSearchBar}) => openSearchBar? 'none' : 'flex'}
    }
`;

export const ButtonContainerLogo = styled.div<typesHeader> `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({ margin }) => margin? margin : 0};
    display: ${({ openSearchBar }) => openSearchBar? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    :hover{
        background-color: rgba(0, 0, 0, 0.1);
    }

    img {
        width: 20px;
    }
`;

export const ButtonContainer = styled.div<typesHeader> `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({ margin }) => margin? margin : 0};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    :hover{
        background-color: rgba(0, 0, 0, 0.1);
    }

    @media(max-width: 768px) {
        display: ${({ openSearchBar }) => openSearchBar? 'none' : 'flex'};
        display: none;
    }
`;

export const ButtonContainerResponsive = styled.div<typesHeader> `
    display: none;
    
    @media(max-width: 768px) {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: ${({ margin }) => margin? margin : 0};
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        
        :hover{
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
`;

export const ButtonIcon = styled.img `
    width: 20px;
`;

export const ButtonBackBar = styled.img <typesHeader>`
    display: none;
    width: 20px;

    @media(max-width: 768px) {
        display: ${({ openSearchBar }) => openSearchBar ? 'flex' : 'none'};
        opacity: 0.4;
        margin-right: 10px;
    }
`

export const SearchContainer = styled.div `
    display: flex;
    right: 35%;
    position: absolute;
    align-items: center;

    @media(max-width: 1350px) {
        width: 35%;
    };

    @media(max-width: 568px) {
        width: 50%;
    }
`;

export const SearchInputContainer = styled.div<typesHeader> `
    width: 450px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;

    @media(max-width: 768px) {
        display: ${({ openSearchBar }) => openSearchBar? 'flex' : 'none'};
        border-radius: 40px;
        width: 100%;
    }
`;

export const SearchInput = styled.input `
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
`;

export const SearchButton = styled.div `
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover{
        background-color: rgba(0, 0, 0, 0.1);
    }

    @media(max-width: 768px) {
        display: none;
    };
`;

export const ClearButtonContainer = styled.div<typesHeader>`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: ${({ clearButton }) => clearButton ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    :hover{
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

export const ClearButtonImg = styled.img `
    width: 15px;
`;

export const HeaderButtons = styled.div<typesHeader>`
    width: ${({ login }) => login? '200px' : '270px'};
    display: flex;
    
    @media(max-width: 768px) {
        width: ${({ login }) => login? '20%' : '30%'};
        position: absolute;
        right: 0;
        margin-right: 10px;
    }

    @media (max-width: 568px) {
        width: 30%
    }
`;

export const ImgLogin = styled.img `
    height: 20px;
    width: 20px;
`;

export const TextImgLogin = styled.span `
    font-size: 14px;

    @media(max-width: 768px) {
        font-size: 12px;
    }

    @media(max-width: 560px) {
        display: none;
    }
`;

export const LoginButton = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    border: .1px solid #e4e4e4;
    border-radius: 20px;
    gap: 10px;
    height: 35px;
    width: 50%;
    outline: none;
    cursor: pointer;
    margin: 2px 0 0 10px;
     
    :hover {
        background-color: #4285f430;
    }
`;

export const ProfileImage = styled.div `
    background-color: #065fd4db;
    width: 35px;
    height: 35px;;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-left: 12px;
    margin-top: 2px;
    cursor: pointer;

    span {
        color: #000;
        font-size: 17px;
    }
`;


