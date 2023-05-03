import styled from "styled-components";

export const HomeContainer = styled.div`
    min-width: 100%;
`;

export const Container = styled.div<{ openMenu:boolean }>`
    min-width: 100%;
    max-width: 1600px;
    display: grid;
    grid-template-columns: ${(({ openMenu }) => openMenu? 'repeat(4, 1fr)' : 'repeat(5, 1fr)')};
    column-gap: 20px;
    row-gap: 50px;
    flex-wrap: wrap;

    @media(max-width: 1500px) {
        grid-template-columns: repeat(3, 1fr)
    }

    @media(max-width: 1170px) {
        grid-template-columns: repeat(2, 1fr)
    }

    @media(max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const MainContainer = styled.div<{ openMenu:boolean }> `
    min-width: 100%;
    max-width: 1600px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: ${({openMenu}) => openMenu? '50px 100px 0 320px' : '50px 60px 0 160px'};
    box-sizing: border-box;

    @media(max-width: 768px) {
        padding: 50px 70px;
    }
`;

export const Divider = styled.div `
    width: 100%;
    margin: 50px 0 20px 0;
    border: 2px solid #cfcfcf;
`;