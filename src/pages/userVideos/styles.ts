import styled from "styled-components";

export const UserVideosContainer = styled.div `
    width: 100%;
`;

export const MainContainer = styled.div<{ openMenu:boolean }> `
    min-width: 100%;
    max-width: 1600px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 50px;
    row-gap: 50px;
    padding: ${({openMenu}) => openMenu? '100px 20px 20px 400px' : '100px 20px 20px 160px'};
    box-sizing: border-box;
    justify-content: center;

    @media(max-width: 768px) {
        padding: 70px 20px 20px 20px;
    }
    
    @media(max-width: 600px) {
        padding: 70px 20px 20px 20px;
    }
`;

export const UserContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    align-items: center;
    margin-bottom: 30px;
`;

export const UserName = styled.h1 `
    margin: 0;
    
    @media(max-width: 768px) {
        font-size: 25px
    }
`;

export const ChannelImage = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #065fd4db;
    width: 200px;
    height: 200px;
    border-radius: 50%;
 
    span {
        height: 200px;
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 60px;
    }

    @media(max-width: 768px) {
        width: 100px;
        height: 100px;

        span {
            width: 100px;
            height: 200px;
            font-size: 30px;
        }
    }
`;

export const OpenModalButton = styled.button `
    width: 200px;
    height: 50px;
    border: none;
    outline: none;
    border-radius: 8px;
    background-color: #1a75ff;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;

    :hover {
        background-color: #005ce6;
    }
`;

export const ModalContainer = styled.div<{ showModal:boolean }> `
    visibility: ${({ showModal }) => showModal ? 'visible' : 'hidden' };
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6); 
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

export const ModalContent = styled.div `
    width: 45%;
    min-height: 60%;
    background-color: #fff;
    border-radius: 12px;
    padding: 15px 20px;

    @media(max-width: 768px) {
        min-height: 40%;
        width: 70%;
    }
`;

export const CloseModalButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const CloseModalButton = styled.img`
    width: 25px;
    height: 25px;
    cursor: pointer;
`;

export const ModalTitle = styled.h1 `
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 40px;
    margin: 0 0 70px 0;

    @media(max-width: 768px) {
        font-size: 30px;
        margin: 0 0 20px 0;
    }

    @media(max-width: 420px) {
        font-size: 25px;
    }
`;

export const VideoTitleInput = styled.input<{ valid:boolean }> `
    width: 95%;
    padding: 15px 10px;
    border-radius: 8px;
    outline: none;
    border: ${({ valid }) => valid ? '1px solid #d3d3d3' : '1px solid red'};
    font-size: 13px;
    box-sizing: border-box;

    :focus {
        border: ${({ valid }) => valid ? '2px solid #1a75ff' : '2px solid red'};
        outline: none;
    }
`;

export const VideoDescriptionInput = styled.input<{ valid:boolean }>`
    width: 95%;
    padding: 15px 10px;
    border-radius: 8px;
    outline: none;
    border: ${({ valid }) => valid ? '1px solid #d3d3d3' : '1px solid red'};
    font-size: 13px;
    margin-top: 20px;
    box-sizing: border-box;

    :focus {
        border: ${({ valid }) => valid ? '2px solid #1a75ff' : '2px solid red'};
        outline: none;
    }
`;

export const VideoThumbnailInput = styled.input<{ valid:boolean }>`
    width: 95%;
    padding: 15px 10px;
    border-radius: 8px;
    outline: none;
    border: ${({ valid }) => valid ? '1px solid #d3d3d3' : '1px solid red'};
    font-size: 13px;
    margin-top: 20px;
    box-sizing: border-box;

    :focus {
        border: ${({ valid }) => valid ? '2px solid #1a75ff' : '2px solid red'};
        outline: none;
    }
`;

export const ModalButtonContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ModalButton = styled.button `
    width: 90%;
    height: 45px;
    border: none;
    outline: none;
    border-radius: 8px;
    background-color: #1a75ff;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    margin-top: 30px;

    :hover {
        background-color: #005ce6;
    }
`;

export const ClearButton = styled.button `
    width: 90%;
    height: 45px;
    border: none;
    outline: none;
    border-radius: 8px;
    background-color: #1a75ff;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    margin-top: 15px;

    :hover {
        background-color: #005ce6;
    }
`;

export const NoVideoTitleContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const NoVideoTitle = styled.h1 `
    @media(max-width: 600px) {
        font-size: 25px
    }
`;

export const InvalidMessageContainer = styled.div `
    width: 100%;
`;

export const InvalidMessage = styled.span<{ valid:boolean }> `
    display: ${({ valid }) => valid ? 'none' : 'block'};
    font-size: 14px;
    color: red;
`;

