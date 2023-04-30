import styled from "styled-components";

export const Container = styled.div<{ openMenu:boolean }>`
    min-width: 100%;
    max-width: 1600px;
    display: grid;
    grid-template-columns: ${(({ openMenu }) => openMenu? 'repeat(4, 1fr)' : 'repeat(5, 1fr)')};
    column-gap: 20px;
    row-gap: 50px;

    @media(max-width: 1500px) {
        grid-template-columns: repeat(3, 1fr)
    }

    @media(max-width: 1170px) {
        grid-template-columns: repeat(2, 1fr)
    }

    @media(max-width: 768px) {
        grid-template-columns: 1fr
    }
`;

export const Divider = styled.div `
    width: 100%;
    margin: 50px 0 20px 0;
    border: 2px solid #cfcfcf;
`;