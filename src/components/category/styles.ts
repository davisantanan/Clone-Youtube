import styled from "styled-components";

export const Container = styled.div `
    min-width: 100%;
    max-width: 1500px;
    position: sticky;
    top: 55px;

    @media(max-width: 445px) {
        position:  relative;
        top: .1%;
    }
`;

export const Carousel = styled.div `
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;
    box-sizing: border-box;
    margin-bottom: 20px;
    margin-top: -50px;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    margin-left: -45px;
    height: 50px;

    @media(max-width: 445px) {
        -webkit-overflow-scrolling: touch;
        overflow-x: auto;
    }
`;

export const Buttons = styled.div `
    position: absolute;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;

    @media(max-width: 445px) {
        display: none
    }
`;

export const Right = styled.button `
    display: flex;
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

export const Left = styled.button `
    display: flex;
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

export const CategoryBox = styled.div `
    background-color: rgba(0, 0, 0, .05);
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
        background-color: rgba(0, 0, 0, 0.13);
    }
`;

export const CategoryItem = styled.span `
    font-size: 15px;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const InitialCategoryBox = styled.div `
    background-color: black;
    height: 33px;
    box-sizing: border-box;
    padding: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
`;

export const InitalCaregoryItem = styled.span `
    font-size: 15px;
    color: #fff
`;
