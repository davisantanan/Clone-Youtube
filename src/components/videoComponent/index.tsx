import { 
    ChannelImage, 
    Container, 
    ImageBanner, 
    TextCard, 
    TextContainer, 
    Title, 
    TitleContainer 
} from "./styles";


interface props {
    image: string,
    title: string,
    channelImage: string,
    channel: string,
    details: string
};

function VideoComponent(video: props){
    return(
        <Container>
            <ImageBanner alt="" src={video.image} />
            <TitleContainer>
                <ChannelImage>
                    <span>{video.channelImage}</span>
                </ChannelImage>
                <TextContainer>
                    <Title>{video.title}</Title>
                    <TextCard>{video.channel}</TextCard>
                    <TextCard>{video.details}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;