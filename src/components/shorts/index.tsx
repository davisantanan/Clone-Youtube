import { 
    ButtonIcon,
    ButtonOpen,
    Container, 
    ContentContainer, 
    Div, 
    ImgContent, 
    ImgTitle, 
    TextCard, 
    TextTitle, 
    Title, 
    TitleContainer, 
    TitleContent 
} from "./styles";
import TitleIcon from '../../assets/ahome/titleicon.png';
import SetaIcon from '../../assets/ahome/seta.png';
import { useState } from 'react';




function Shorts(){
    const [ openShorts, setOpenShorts] = useState(false);
    return(
        <>
        <TitleContainer>
            <ImgTitle alt="" src={TitleIcon} />
            <TextTitle>Shorts</TextTitle>
        </TitleContainer>
        <Container>
            <ContentContainer>
                <ImgContent src="https://i.ytimg.com/vi/MMCWCmum3vg/hq720_2.jpg?sqp=-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDhCInSut9uguwTGxJdleY_DBMJlg" />
                <TitleContent>
                    <Title>PING +999</Title>
                    <TextCard>8,5 mi de visualizações</TextCard>
                </TitleContent>
            </ContentContainer>
            <ContentContainer>
                <ImgContent src="https://i.ytimg.com/vi/TemKbFW-aNI/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDeFp6tee-R-K9bvRknHz5DPbONEg" />
                <TitleContent>
                    <Title>teste de afiação</Title>
                    <TextCard>11 mi de visualizações</TextCard>
                </TitleContent>
            </ContentContainer>
            <ContentContainer>
                <ImgContent src="https://i.ytimg.com/vi/cd0Fy92_w_s/hq720_2.jpg?sqp=-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAu-0kPPe6AnYt6DECh_8Z__O-x4Q" />
                <TitleContent>
                    <Title>gato surpreso</Title>
                    <TextCard>325 mi de visualizações</TextCard>
                </TitleContent>
            </ContentContainer>
            <ContentContainer>
                <ImgContent src="https://i.ytimg.com/vi/veKl1Bd3_0g/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLD8gY8ubc4k2wqkOhXYM2N4IYuYpg" />
                <TitleContent>
                    <Title>CABELO PRETO E BRANCO</Title>
                    <TextCard>923 mil visualizações</TextCard>
                </TitleContent>
            </ContentContainer>
            <ContentContainer>
                <ImgContent src="https://i.ytimg.com/vi/7R-aZfdHwMs/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDPp6U8CqntLiBORsrhK0pxVeJ_Vw" />
                <TitleContent>
                    <Title>QUANDO É O ULTIMO PEDAÇO</Title>
                    <TextCard>13 mi de visualizações</TextCard>
                </TitleContent>
            </ContentContainer>
            <ContentContainer>
                <ImgContent src="https://i.ytimg.com/vi/l9G94x0EuSc/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFTyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDleZu-psLG_XNNXVe4nMM8uvZcKw" />
                <TitleContent>
                    <Title>VIDA DE ABELHA</Title>
                    <TextCard>15 mi de visualizações</TextCard>
                </TitleContent>
            </ContentContainer>
            <ContentContainer>
                <ImgContent src="https://i.ytimg.com/vi/klvmCXozbDA/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFTyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCWh0rR7HcLyBE_Fyn0g6mRix9dFQ" />
                <TitleContent>
                    <Title>Vem 5 minutim</Title>
                    <TextCard>766 mil visualizações</TextCard>
                </TitleContent>
            </ContentContainer>
            <ContentContainer>
                <ImgContent src="https://i.ytimg.com/vi/JBxRr0slba0/hq720_2.jpg?sqp=-oaymwEdCJMDENAFSFTyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBS5kX7AZbL7Q4NaFGlOc68saBhHA" />
                <TitleContent>
                    <Title>Lancheira de respeito</Title>
                    <TextCard>8,8 mi de visualizações</TextCard>
                </TitleContent>
            </ContentContainer>
        </Container>
        <ButtonOpen openShorts={openShorts} onClick={() => setOpenShorts(true)}>
            <ButtonIcon alt="" src={SetaIcon} />
        </ButtonOpen>
        <Div openShorts={openShorts}>
                <ContentContainer>
                    <ImgContent src="https://i.ytimg.com/vi/88WaKdje5FI/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBkCE2Ug8Uph4RInr11NXZxPH1g7Q" />
                    <TitleContent>
                        <Title>TIPOS DE CUMPRIMENTOS</Title>
                        <TextCard>167 mil visualizações</TextCard>
                    </TitleContent>
                </ContentContainer>
                <ContentContainer>
                    <ImgContent src="https://i.ytimg.com/vi/u5q6RSL_ovQ/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBed3xtXkRxQMd2aHsXpUlr21lZKw" />
                    <TitleContent>
                        <Title>CASAMENTO AS CEGAS</Title>
                        <TextCard>230 mil visualizações</TextCard>
                    </TitleContent>
                </ContentContainer> 
                <ContentContainer>
                    <ImgContent src="https://i.ytimg.com/vi/JP2m7CWAxHo/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFTyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAA-O7yjjOFOBQVnn3Bv1Cdq3jMoA" />
                    <TitleContent>
                        <Title>pikachu pikachu</Title>
                        <TextCard>84 mi de visualizações</TextCard>
                    </TitleContent>
                </ContentContainer>
                <ContentContainer>
                    <ImgContent src="https://i.ytimg.com/vi/u-MhS55zeLc/hq720.jpg?sqp=-oaymwEdCJUDENAFSFTyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCeDd1kbk2_e-V2zSh-ZmwPZAnGLA" />
                    <TitleContent>
                        <Title>Borzoi na vida real</Title>
                        <TextCard>1,8 mi de visualizações</TextCard>
                    </TitleContent>
                </ContentContainer>
            </Div>
        </>
    )
}

export default Shorts;