import styled from "styled-components";

export const Container = styled.div `
    min-width: 100%;
    height: 45px;
    position: sticky;
    top: 55px;
    box-sizing: border-box;
    margin-bottom: 20px;
    margin-top: -45px;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    margin-left: -45px;
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
`

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
