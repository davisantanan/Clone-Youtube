import { 
    MainContainer, 
    ModalContainer, 
    OpenModalButton, 
    UserContainer, 
    UserName, 
    UserVideosContainer, 
    ModalContent, 
    CloseModalButton,
    CloseModalButtonContainer,
    ModalTitle,
    VideoTitleInput,
    VideoDescriptionInput,
    VideoThumbnailInput,
    ModalButtonContainer,
    ModalButton,
    ChannelImage,
    NoVideoTitleContainer,
    NoVideoTitle,
} from "./styles";
import Header from "../../components/header";
import Menu from "../../components/menu";
import Close from "../../assets/auservideos/close.png"
import { MenuContext } from "../../contexts/menuContext";
import { useContext, useState } from 'react'
import { UserContext } from "../../contexts/userContext";
import YourVideosCard from "../../components/yourVideosCard";


function UserVideos(){
    const { openMenu } = useContext(MenuContext);
    const { token, user, createVideos, userVideos } = useContext(UserContext);
    const [ showModal, setShowModal ] = useState(false);
    const [ videoTitle, setVideoTitle ] = useState('');
    const [ videoDescription, setVideoDescription ] = useState('');
    const [ videoThumbnail, setVideoThumbnail ] = useState('');
    const userId = user.id!;

    interface propsVideos {
        title: string,
        thumbnail: string,
        description: string,
        video_id: string
    }

    function clearInput(){
        setVideoTitle('');
        setVideoThumbnail('');
        setVideoDescription('');
    };

    function sendVideo(){
        createVideos(token, userId, videoTitle, videoDescription, videoThumbnail);
        setShowModal(false);
        clearInput();
    };

    return(
        <UserVideosContainer>
            <Header />
            <Menu />
            <MainContainer openMenu={openMenu}>
                <UserContainer>
                    <UserName>
                        {user && user.name ? user.name : ''}
                    </UserName>
                    <ChannelImage>
                        <span>{user && user.name ? user.name.charAt(0).toUpperCase() : ''}</span>
                    </ChannelImage>
                    <OpenModalButton onClick={() => setShowModal(true)}>
                        Cadastrar vídeo
                    </OpenModalButton>
                </UserContainer>
                <ModalContainer showModal={showModal}>
                    <ModalContent>
                        <CloseModalButtonContainer>
                            <CloseModalButton 
                            alt="close" 
                            src={Close}
                            onClick={() => setShowModal(false)}
                            />
                        </CloseModalButtonContainer>
                        <ModalTitle>Enviar novo vídeo</ModalTitle>
                        <VideoTitleInput
                        type="text"
                        placeholder="Título do vídeo"
                        maxLength={200}
                        value={videoTitle}
                        onChange={(e) => setVideoTitle(e.target.value)}
                        />
                        <VideoDescriptionInput
                        type="text"
                        placeholder="Descrição do vídeo"
                        maxLength={200}
                        value={videoDescription}
                        onChange={(e) => setVideoDescription(e.target.value)}
                        />
                        <VideoThumbnailInput
                        type="text"
                        placeholder="URL da thumbnail"
                        maxLength={200}
                        value={videoThumbnail}
                        onChange={(e) => setVideoThumbnail(e.target.value)}
                        />
                        <ModalButtonContainer>
                            <ModalButton onClick={sendVideo}>Adicionar vídeo</ModalButton>
                        </ModalButtonContainer>
                        <ModalButtonContainer>
                            <ModalButton onClick={clearInput}>Limpar Campos</ModalButton>
                        </ModalButtonContainer>
                    </ModalContent>
                </ModalContainer>
                    {Array.isArray(userVideos) && userVideos.length > 0 ? (
                        userVideos.map((video: propsVideos) => 
                            <YourVideosCard
                            title={video.title}
                            thumbnail={video.thumbnail}
                            channelImage={user && user.name ? user.name.charAt(0).toUpperCase() : ''}
                            description={video.description}
                            key={video.video_id}
                            />
                        ))
                        :
                        <NoVideoTitleContainer>
                            <NoVideoTitle>Esse canal não possui vídeos</NoVideoTitle>
                        </NoVideoTitleContainer>
                    }
            </MainContainer>
        </UserVideosContainer>
    )
}

export default UserVideos;