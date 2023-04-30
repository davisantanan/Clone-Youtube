import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const ContentContainer = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 440px;
    border: solid .1px #cfcfcf;
    border-radius: 8px;

    @media(max-width: 500px) {
        width: 340px;
    }

    @media(max-width: 328px) {
        width: 250px
    }
`;

export const Icon = styled.img `
    width: 75px;
    margin-top: 30px;
`;

export const HeaderCreateAccount = styled.h1 `
    font-size: 21px;
    font-weight: 500;
`;

export const HeaderCreateSpan = styled.span `
    font-size: 18px;
    margin: -5px 0 18px 0;
`;


export const InputBox = styled.div `
    position: relative;
    padding: 20px;
    display: flex;
    flex-direction: column;
    
    label {
        position: absolute;
        top: 35px;
        pointer-events: none;
        transition: .2s;
        font-size: 15px;
        color: gray;
        margin-left: 10px;
    }
    
    input {
        border: solid .1px #cfcfcf;
        border-radius: 5px;
        background: none;
        outline: none;
        width: 360px;
        height: 50px;

        :focus ~ label,
        :valid ~ label {
        top: -5px;
        margin-left: 0px;
        color: #065fd4;
        font-size: 13px;
        }

        :focus {
        border: solid 2px #065fd4;
        }

        @media(max-width: 500px) {
            width: 270px
        }
        
        @media(max-width: 328px) {
            width: 200px
        }
    }
`;

export const TextLogin = styled.span `
    display: flex;
    justify-content: center;
    width: 360px;
    color: gray;
    font-size: 14px;

    @media(max-width: 500px) {
        width: 300px
    }

    @media(max-width: 328px) {
        width: 220px
    }
`;

export const ButtonCreate = styled.button `
    width: 80%;
    height: 35px;
    background-color: #0764df;
    color: #fff;
    outline: none;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    margin: 10px 0 30px 0;
    
    
    :hover{
        background-color: #054ead;
    }

    @media(max-width: 328px) {
        width: 60%
    }
`;

