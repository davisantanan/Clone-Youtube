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
    InvalidMessageContainer,
    InvalidMessage,
    ClearButton
} from "./styles";
import Header from "../../components/header";
import Menu from "../../components/menu";
import YourVideosCard from "../../components/yourVideosCard";
import Close from "../../assets/auservideos/close.png"
import { MenuContext } from "../../contexts/menuContext";
import { useContext, useRef, useState } from 'react'
import { UserContext } from "../../contexts/userContext";


function UserVideos(){
    const { openMenu } = useContext(MenuContext);
    const { token, user, createVideos, userVideos } = useContext(UserContext);
    const [ showModal, setShowModal ] = useState(false);
    const [ videoTitle, setVideoTitle ] = useState('');
    const [ videoDescription, setVideoDescription ] = useState('');
    const [ videoThumbnail, setVideoThumbnail ] = useState('');
    const [ videoTitleValid, setVideoTitleValid ] = useState(true);
    const [ videoDescriptionValid, setVideoDescriptionValid ] = useState(true);
    const [ videoThumbnailValid, setVideoThumbnailValid ] = useState(true);
    const videoTitleRef= useRef<HTMLInputElement>(null);
    const videoDescriptionRef= useRef<HTMLInputElement>(null);
    const videoThumbnailRef= useRef<HTMLInputElement>(null);
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
        if(videoTitleRef.current){
            videoTitleRef.current.focus()
        }
    };

    function sendVideo(){
        if(videoTitle.trim() !== ''){
            setVideoTitleValid(true)
        }
        if(videoDescription.trim() !== ''){
            setVideoDescriptionValid(true)
        }
        if(videoThumbnail.trim() !== ''){
            setVideoThumbnailValid(true)
        }
        if(videoTitle.trim() === '' && videoDescription.trim() === '' && videoThumbnail.trim() === ''){
            setVideoTitleValid(false)
            setVideoDescriptionValid(false)
            setVideoThumbnailValid(false)
            if(videoTitleRef.current){
                videoTitleRef.current.focus()
            }
        } else if(videoTitle.trim() === ''){
            setVideoTitleValid(false)
            if(videoTitleRef.current){
                videoTitleRef.current.focus()
            }
        } else if(videoDescription.trim() === ''){
            setVideoDescriptionValid(false)
            if(videoDescriptionRef.current){
                videoDescriptionRef.current.focus()
            }
        } else if(videoThumbnail.trim() === ''){
            setVideoThumbnailValid(false)
            if(videoThumbnailRef.current){
                videoThumbnailRef.current.focus()
            }
        } else{
            createVideos(token, userId, videoTitle, videoDescription, videoThumbnail);
            setShowModal(false);
            clearInput();
        }
    };

    function closeModal(){
        setShowModal(false);
        clearInput();
        setVideoTitleValid(true);
        setVideoDescriptionValid(true);
        setVideoThumbnailValid(true);
    }

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
                            onClick={closeModal}
                            />
                        </CloseModalButtonContainer>
                        <ModalTitle>Enviar novo vídeo</ModalTitle>
                        <VideoTitleInput
                        type="text"
                        placeholder="Título do vídeo"
                        maxLength={200}
                        value={videoTitle}
                        onChange={(e) => setVideoTitle(e.target.value)}
                        ref={videoTitleRef}
                        valid={videoTitleValid}
                        />
                        <InvalidMessageContainer>
                            <InvalidMessage valid={videoTitleValid}>
                                Digite o título do vídeo
                            </InvalidMessage>
                        </InvalidMessageContainer>
                        <VideoDescriptionInput
                        type="text"
                        placeholder="Descrição do vídeo"
                        maxLength={200}
                        value={videoDescription}
                        onChange={(e) => setVideoDescription(e.target.value)}
                        ref={videoDescriptionRef}
                        valid={videoDescriptionValid}
                        />
                        <InvalidMessageContainer>
                            <InvalidMessage valid={videoDescriptionValid}>
                                Digite a descrição do vídeo
                            </InvalidMessage>
                        </InvalidMessageContainer>
                        <VideoThumbnailInput
                        type="text"
                        placeholder="URL da thumbnail"
                        maxLength={300}
                        value={videoThumbnail}
                        onChange={(e) => setVideoThumbnail(e.target.value)}
                        ref={videoThumbnailRef}
                        valid={videoThumbnailValid}
                        />
                        <InvalidMessageContainer>
                            <InvalidMessage valid={videoThumbnailValid}>
                                Digite a thumbnail do vídeo
                            </InvalidMessage>
                        </InvalidMessageContainer>
                        <ModalButtonContainer>
                            <ModalButton onClick={sendVideo}>Adicionar vídeo</ModalButton>
                        </ModalButtonContainer>
                        <ModalButtonContainer>
                            <ClearButton onClick={clearInput}>Limpar Campos</ClearButton>
                        </ModalButtonContainer>
                    </ModalContent>
                </ModalContainer>
                    {Array.isArray(userVideos) && userVideos.length > 0 ? 
                        userVideos.map((video: propsVideos) => 
                            <YourVideosCard
                            title={video.title}
                            thumbnail={video.thumbnail}
                            channelImage={user && user.name ? user.name.charAt(0).toUpperCase() : ''}
                            description={video.description}
                            key={video.video_id}
                            />
                        )
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