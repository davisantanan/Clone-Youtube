import styled from "styled-components";

export const Container = styled.div `
    min-width: 100%;
    max-width: 1500px;
    position: sticky;
    top: 55px;
    height: 50px;
    padding-top: 10px;
    margin-bottom: 20px;
    background-color: #fff;
    
    
    @media(max-width: 500px) {
        top: 54px;
        padding: 10px 15px 0;      
    }
`;

export const Carousel = styled.div `
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    margin-left: -45px;
    -webkit-overflow-scrolling: touch;

    @media(max-width: 500px) {
        overflow-x: auto;
        margin-left: -30px;
    }
`;

export const Buttons = styled.div `
    position: absolute;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;

    @media(max-width: 500px) {
        display: none
    }
`;

export const Right = styled.button<{ rightArrow:boolean }> `
    display: ${({ rightArrow }) => rightArrow ? 'flex' : 'none' };
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    right: -70px;
    position: absolute;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 50%;

    :hover{
        background-color: rgba(0, 0, 0, 0.1);
    }

    img {
        width: 20px;
        height: 20px;
    }
`;

export const Left = styled.button<{ leftArrow:boolean }> `
    display: ${({ leftArrow }) => leftArrow ? 'flex' : 'none' };
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    left: 0;
    position: absolute;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    margin-left: -10px;

    :hover{
        background-color: rgba(0, 0, 0, 0.1);
    }

    img {
        width: 20px;
        height: 20px;
    }
`;

export const CategoryBox = styled.div<{ activeIndex:boolean }>`
    background-color: ${({ activeIndex }) => activeIndex  ? 'black' : 'rgba(0, 0, 0, .05)'};
    height: 33px;
    box-sizing: border-box;
    padding: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    
    :hover{
        background-color: ${({ activeIndex }) => activeIndex ? 'none' : 'rgba(0, 0, 0, 0.13)'};
    }
`;

export const CategoryItem = styled.span<{ activeIndex:boolean }>`
    color: ${({ activeIndex }) => activeIndex ? '#fff' : 'black'};
    font-size: 15px;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
