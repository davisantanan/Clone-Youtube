import { 
  Banner, 
  ChannelContainer, 
  Container, 
  DescriptionContainer, 
  TextCard, 
  TextCardResponsive, 
  TextContainer, 
  Title, 
  TitleContainer 
} 
from "./styles"

interface Props {
  title: string
  image: string
  channelImage: string
  channelName: string
  details: string
  description: string
}

function VideoSearchCard(video: Props) {
  return (
    <Container>
      <Banner style={{ backgroundImage: `url(${video.image})` }}></Banner>
      <TitleContainer>
        <TextContainer>
          <Title>{video.title}</Title>
          <TextCard>
            <TextCardResponsive>{video.channelName} |</TextCardResponsive>
            {video.details}
          </TextCard>
        </TextContainer>
        <ChannelContainer>
          <span>{video.channelImage}</span>
          <TextCard>{video.channelName}</TextCard>
        </ChannelContainer>
        <DescriptionContainer>
          <TextCard>
            {video.description}
          </TextCard>
        </DescriptionContainer>
      </TitleContainer>
    </Container>
  )
}

export default VideoSearchCard;