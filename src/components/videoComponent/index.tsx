import { 
    ChannelImage, 
    Container, 
    ImageBanner, 
    TextCard, 
    TextContainer, 
    Title, 
    TitleContainer 
    } from "./styles";



function VideoComponent(){
    return(
        <Container>
            <ImageBanner src='https://i.ytimg.com/vi/Ko7qsNC-OTY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6ZJN6p4kcXM1o9VADQzFe1ytm3A' />
            <TitleContainer>
                <ChannelImage>
                    W
                </ChannelImage>
                <TextContainer>
                    <Title>CREED III | Official Trailer</Title>
                    <TextCard>Warner Bros</TextCard>
                    <TextCard>1,5 mi de visualizações - há 4 meses</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;