import styled from "styled-components";

export const SearchContainer = styled.div `
  width: 100%;
`
export const Container = styled.div<{ openMenu:boolean }>`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding: ${({openMenu}) => openMenu? '100px 40px 20px 420px' : '100px 10px 20px 110px'};
  box-sizing: border-box;

  @media(max-width: 1300px) {
    padding: 100px 20px 0 110px;
  }

  @media(max-width: 768px){
    padding: 100px 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media(max-width: 600px) {
    padding: 60px 20px 15px 20px;
  }
`;