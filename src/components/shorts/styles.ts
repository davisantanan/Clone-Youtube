import styled from "styled-components";

export const Container = styled.div`
    min-width: 100%;
    max-width: 1600px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
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
    min-width: 100%;
    max-width: 1600px;
    cursor: pointer;
`;

export const ImgContent = styled.img `
    width: 170px;
    height: 300px;
    border-radius: 12px;
`;

export const TitleContent = styled.div `
    width: 100;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span `
    width: 70%;
    font-weight: 600;
    color: #0f0f0f;
    margin: 5px 0 5px 0;
`;

export const TextCard = styled.span `
    color: #8c8c8c;
    font-size: 14px;
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
    margin: 10px 0 -48px 0;
    :hover{
        background-color: rgba(0, 0, 0, 0.15);
    }
`;

export const ButtonIcon = styled.img `
    width: 20px;
`

export const Div = styled.div<{openShorts:boolean}> `
    width: 50%;
    max-width: 800px;
    display: ${(({ openShorts }) => openShorts? 'grid' : 'none')};
    grid-template-columns: repeat(4, 1fr);
    margin-top: 20px;
`;