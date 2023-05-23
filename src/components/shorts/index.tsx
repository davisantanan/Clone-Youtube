import { 
    ButtonIcon,
    ButtonOpen,
    Container, 
    ContentContainer,  
    Divider,  
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
    
    const shortsVideos = [
        {
            image: "https://i.ytimg.com/vi/MMCWCmum3vg/hq720_2.jpg?sqp=-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDhCInSut9uguwTGxJdleY_DBMJlg",
            title: 'PING +999',
            text: '8,5 mi de visualizações'
        },
        {
            image: "https://i.ytimg.com/vi/TemKbFW-aNI/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDeFp6tee-R-K9bvRknHz5DPbONEg",
            title: 'teste de afiação',
            text: '11 mi de visualizações'
        },
        {
            image: "https://i.ytimg.com/vi/cd0Fy92_w_s/hq720_2.jpg?sqp=-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAu-0kPPe6AnYt6DECh_8Z__O-x4Q",
            title: 'gato surpreso',
            text: '325 mi de visualizações'
        },
        {
            image: "https://i.ytimg.com/vi/veKl1Bd3_0g/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLD8gY8ubc4k2wqkOhXYM2N4IYuYpg",
            title: 'CABELO PRETO E BRANCO',
            text: '923 mil visualizações'
        },
        {
            image: "https://i.ytimg.com/vi/7R-aZfdHwMs/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDPp6U8CqntLiBORsrhK0pxVeJ_Vw",
            title: 'QUANDO É O ULTIMO PEDAÇO',
            text: '13 mi de visualizações'
        },
        {
            image: "https://i.ytimg.com/vi/l9G94x0EuSc/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFTyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDleZu-psLG_XNNXVe4nMM8uvZcKw",
            title: 'VIDA DE ABELHA',
            text: '15 mi de visualizações'
        },
        {
            image: "https://i.ytimg.com/vi/klvmCXozbDA/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFTyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCWh0rR7HcLyBE_Fyn0g6mRix9dFQ",
            title: 'Vem 5 minutim',
            text: '766 mil visualizações'
        },
        {
            image: "https://i.ytimg.com/vi/JBxRr0slba0/hq720_2.jpg?sqp=-oaymwEdCJMDENAFSFTyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBS5kX7AZbL7Q4NaFGlOc68saBhHA",
            title: 'Lancheira de respeito',
            text: '8,8 mi de visualizações'
        },
        {
            image: "https://i.ytimg.com/vi/88WaKdje5FI/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBkCE2Ug8Uph4RInr11NXZxPH1g7Q",
            title: 'TIPOS DE CUMPRIMENTOS',
            text: '167 mil visualizações'
        },
        {
            image: "https://i.ytimg.com/vi/u5q6RSL_ovQ/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBed3xtXkRxQMd2aHsXpUlr21lZKw",
            title: 'CASAMENTO AS CEGAS',
            text: '230 mil visualizações'
        },
        {
            image: "https://i.ytimg.com/vi/-H_4EjZnsDQ/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDCRAbTARM8By2GREtkE0ZF41YI7w",
            title: 'PASSA O CONTATO, FILHO! - #Shorts',
            text: '2,2 mi de visualizações'
        },
        {
            image: "https://i.ytimg.com/vi/u-MhS55zeLc/hq720.jpg?sqp=-oaymwEdCJUDENAFSFTyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCeDd1kbk2_e-V2zSh-ZmwPZAnGLA",
            title: 'Borzoi na vida real',
            text: '1,8 mi de visualizações'
        }
    ];

    return(
        <>
            <TitleContainer>
                <ImgTitle alt="title-icon" src={TitleIcon} />
                <TextTitle>Shorts</TextTitle>
            </TitleContainer>
            <Container openShorts={openShorts}>
                {shortsVideos.map((short) => (
                        <ContentContainer>
                            <ImgContent src={short.image}/>
                            <TitleContent>
                                <Title>{short.title}</Title>
                                <TextCard>{short.text}</TextCard>
                            </TitleContent>
                        </ContentContainer>
                ))}
            </Container>
            <ButtonOpen openShorts={openShorts} onClick={() => setOpenShorts(true)}>
                <ButtonIcon alt="open-shorts" src={SetaIcon} />
            </ButtonOpen>
            <Divider />
        </>
    )
}

export default Shorts;