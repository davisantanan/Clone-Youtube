import styled from "styled-components";

export const UserVideosContainer = styled.div `
    width: 100%;
`;

export const MainContainer = styled.div<{ openMenu:boolean }> `
    min-width: 100%;
    max-width: 1600px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: ${({openMenu}) => openMenu? '100px 100px 0 400px' : '100px 100px 0 160px'};
    box-sizing: border-box;

    @media(max-width: 768px) {
        padding: 50px 70px;
    }
    
    @media(max-width: 600px) {
        padding: 50px 40px;
    }
`;

export const UserContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
`;

export const UserName = styled.h1 `
    margin: 0;
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
    height: 60%;
    background-color: #fff;
    border-radius: 12px;
    padding: 15px 20px;
   
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
    margin: 0 0 100px 0;
`;

export const VideoTitleInput = styled.input`
    width: 95%;
    padding: 15px 10px;
    border-radius: 8px;
    outline: none;
    border: 1px solid #d3d3d3;
    font-size: 13px;
    margin-bottom: 20px;

    :focus {
        border: 2px solid #1a75ff;
    }
`;

export const VideoDescriptionInput = styled.input`
    width: 95%;
    padding: 15px 10px;
    border-radius: 8px;
    outline: none;
    border: 1px solid #d3d3d3;
    font-size: 13px;
    margin-bottom: 20px;

    :focus {
        border: 2px solid #1a75ff;
    }
`;

export const VideoThumbnailInput = styled.input`
    width: 95%;
    padding: 15px 10px;
    border-radius: 8px;
    outline: none;
    border: 1px solid #d3d3d3;
    font-size: 13px;
    margin-bottom: 25px;

    :focus {
        border: 2px solid #1a75ff;
    }
`;

export const ModalButtonContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
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

    :hover {
        background-color: #005ce6;
    }
`;

export const VideosContent = styled.div `
    min-width: 100%;
    max-width: 1600px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 50px;
    row-gap: 50px;
    flex-wrap: wrap;
    margin-top: 50px;
`;