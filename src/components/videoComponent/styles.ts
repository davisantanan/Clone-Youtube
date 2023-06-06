import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    cursor: pointer;
`;

export const ImageBanner = styled.img `
    width: 100%;
    height: 210px;
    border-radius: 12px;
    margin-bottom: 5px;
`;

export const TitleContainer = styled.div `
    width: 100%;
    display: flex;
`;

export const ChannelImage = styled.div `
    background-color: beige;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;

    span {
        min-height: 40px;
        min-width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const TextContainer = styled.div `
    display: flex;
    flex-direction: column;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const Title = styled.span `
    font-weight: 600;
    color: #0f0f0f;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const TextCard = styled.span `
    color: #8c8c8c;
    font-size: 14px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;