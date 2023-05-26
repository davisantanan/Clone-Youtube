import styled from "styled-components";

export const Container = styled.div `
  width: 90%;
  display: flex;
  column-gap: 10px;
  
  @media(max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const Banner = styled.div `
  width: 1000px;
  min-height: 280px;
  max-height: 280px;
  border-radius: 12px;
  background-size: cover;
  background-position: 50% 50%;
  cursor: pointer;

  @media(max-width: 1380px) {
    height: 250px;
  }

  @media(max-width: 930px) {
    height: 220px;
  }

  @media(max-width: 768px) {
    width: 100%;
    height: 400px;
  }
`

export const TitleContainer = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 5px;
  
  @media(max-width: 768px) {
    margin: 10px 0 0;
    flex-direction: row;
  }
`;

export const TextContainer = styled.div `
  display: flex;
  flex-direction: column;
  cursor: pointer;
  
  @media(max-width: 768px) {
    order: 2;
  }
`;

export const ChannelContainer = styled.div `
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;

  span:first-child {
    background-color: beige;
    min-width: 25px;
    max-width: 25px;
    min-height: 25px;
    max-height: 25px;
    font-size: 13px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;  
  }

  @media(max-width: 768px) {
    margin-top: 0;
    
    span:first-child {
      min-width: 40px;
      max-width: 40px;
      min-height: 40px;
      max-height: 40px;
      order: 1
    }

    span:last-child {
      display: none;
    }
  }

`;

export const Title = styled.span `
  width: 90%;
  font-weight: 500;
  color: #0f0f0f;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  font-size: 16.5px;
`;

export const TextCard = styled.span `
  color: #8c8c8c;
  font-size: 12px;

  @media(max-width: 768px) {
    display: flex;
  }
`;

export const TextCardResponsive = styled.span `
  display: none;

  @media(max-width: 768px) {
    display: flex;
    color: #8c8c8c;
    font-size: 12px;
  }
`

export const DescriptionContainer = styled.div `
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  margin-top: 20px;
  cursor: pointer;

  @media(max-width: 768px) {
    display: none;
  }
`;