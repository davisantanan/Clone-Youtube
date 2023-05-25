import { 
    Banner, 
    ChannelContainer, 
    ChannelImage, 
    Container, 
    DescriptionContainer, 
    TextCard, 
    TextContainer, 
    Title, 
    TitleContainer 
} from "./styles"

interface Props {
  title: string
  image: string
  channelImage: string
  channelName: string
  details: string
  description: string
}

function VideoSearchCard(props : Props) {
  return (
    <Container>
      <Banner style={{ backgroundImage: `url(${props.image})` }}></Banner>
      <TitleContainer>
        <TextContainer>
          <Title>{props.title}</Title>
          <TextCard>{props.details}</TextCard>
        </TextContainer>
        <ChannelContainer>
          <ChannelImage>
            {props.channelImage}
          </ChannelImage>
          <TextCard>{props.channelName}</TextCard>
        </ChannelContainer>
        <DescriptionContainer>
          <TextCard>
            {props.description}
          </TextCard>
        </DescriptionContainer>
      </TitleContainer>
    </Container>
  )
}

export default VideoSearchCard;