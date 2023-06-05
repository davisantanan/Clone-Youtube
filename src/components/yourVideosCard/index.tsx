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
    thumbnail: string,
    title: string,
    channelImage: string,
    description: string
};

function YourVideosCard(video: props){
    return(
        <Container>
            <ImageBanner alt="thumbnail" src={video.thumbnail} />
            <TitleContainer>
                <ChannelImage>
                    <span>{video.channelImage}</span>
                </ChannelImage>
                <TextContainer>
                    <Title>{video.title}</Title>
                    <TextCard>{video.description}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default YourVideosCard;