import styled from "styled-components";

export const Container = styled.div<{ openShorts:boolean }>`
    min-width: 100%;
    max-width: 1600px;
    max-height: ${({openShorts}) => openShorts? 'auto' : '385px' };
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-auto-flow: dense;
    grid-auto-columns: 0;
    grid-template-rows: auto;
    overflow: hidden;
    column-gap: 18px;
    row-gap: 10px;

    @media(max-width: 1500px) {
        grid-template-columns: repeat(7, 1fr);
    }

    @media(max-width: 1215px) {
        grid-template-columns: repeat(6, 1fr);
        height: ${({openShorts}) => openShorts? 'auto' : '380px' };
    }

    @media(max-width: 1054px) {
        grid-template-columns: repeat(4, 1fr);
        height: ${({openShorts}) => openShorts? 'auto' : '360px' };
    }
    
    @media(max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 600px) {
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;
        box-sizing: border-box;
        height: 360px;
        -webkit-overflow-scrolling: touch;
    }
`;

export const TitleContainer = styled.div `
    display: flex;
    margin-bottom: 15px;
`;

export const ImgTitle = styled.img `
    height: 35px;
    width: 35px;
`;

export const TextTitle = styled.span `
    font-size: 20px;
    font-weight: 450;
    margin-left: 3px;
`;

export const ContentContainer = styled.div `
    width: 100%;
    cursor: pointer;

    @media(max-width: 600px) {
        width: 80%;
    }
`;

export const ImgContent = styled.img `
    width: 100%;
    height: 300px;
    border-radius: 12px;

    @media (max-width: 600px) {
        height: 250px;
        width: 120px;
    }
`;

export const TitleContent = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span `
    width: 100%;
    font-weight: 600;
    color: #0f0f0f;
    margin: 5px 0 5px 0;
    font-size: 16px;

    @media (max-width: 600px) {
        font-size: 14px;
    }
`;

export const TextCard = styled.span `
    color: #8c8c8c;
    font-size: 14px;

    @media (max-width: 600px) {
        font-size: 13px;
    }
`;

export const ButtonOpen = styled.button<{ openShorts:boolean }> `
    width: 100.2%;
    height: 40px;
    display: ${({ openShorts }) => openShorts? 'none': 'flex'};
    outline: none;
    border: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #fff;
    margin: 10px 0 -8px 0;
    
    :hover{
        background-color: rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 600px) {
        display: none    
    }
`;

export const ButtonIcon = styled.img `
    width: 20px;
`;

export const Divider = styled.div `
    width: 100%;
    margin: 10px 0 20px 0;
    border: 2px solid #cfcfcf;
`;