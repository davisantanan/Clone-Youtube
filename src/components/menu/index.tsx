import { 
    ButtonIcon,
    Container, 
    OpenMenuContainer, 
    Divider, 
    LoginContainer, 
    LoginButton, 
    MenuItem,
    Footer,
    TextLogin,
    ImgLogin,
    TextImgLogin,
    TitleSession,
    DividerLogin,
    MenuOverLay,
    MenuHeader,
    ButtonContainer,
    ButtonIconHeader
} from "./styles";
import { useContext, useEffect } from 'react';
import { MenuContext } from "../../contexts/menuContext";
import HomeIcon from '../../assets/amenu/botao-home.png';
import ShortsIcon from '../../assets/amenu/short-icon.png';
import SubscribeIcon from '../../assets/amenu/subscribe.png';
import LibrayIcon from '../../assets/amenu/video-library.png';
import HistoricIcon from '../../assets/amenu/historia.png';
import AvatarIcon from '../../assets/amenu/avatar.png';
import TrendingIcon from '../../assets/amenu/trending.png';
import ShoppingIcon from '../../assets/amenu/shopping.png';
import MusicIcon from '../../assets/amenu/note.png';
import FilmIcon from '../../assets/amenu/film.png';
import LiveIcon from '../../assets/amenu/transmissao-ao-vivo.png';
import GameIcon from '../../assets/amenu/game.png';
import NewsIcon from '../../assets/amenu/artigo.png';
import SportsIcon from '../../assets/amenu/trofeu.png';
import StudyIcon from '../../assets/amenu/lampada.png';
import AddIcon from '../../assets/amenu/adicionar.png';
import YoutubeIcon from '../../assets/amenu/youtube.png';
import YoutubeMusic from '../../assets/amenu/youtube-music.png';
import YoutubeKids from '../../assets/amenu/youtube-kids.png';
import SettingsIcon from '../../assets/amenu/settings.png';
import FlagIcon from '../../assets/amenu/bandeiras.png';
import HelpIcon from '../../assets/amenu/ajudando.png';
import FeedbackIcon from '../../assets/amenu/feedback.png';
import HamburguerIcon from '../../assets/aheader/hamburger.png';
import Logo from '../../assets/aheader/YouTube-Logo.png';
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from '../../contexts/userContext';


const home = [
    { name: 'Inicio', button: <ButtonIcon alt="start" src={HomeIcon} />, link: '/' },
    { name: 'Shorts', button : <ButtonIcon alt="shorts" src={ShortsIcon} />, link: '' },
    { name: 'Inscrições', button : <ButtonIcon alt="subscribes" src={SubscribeIcon} />, link: ''}
];

const libray = [
    {name: 'Biblioteca', button: <ButtonIcon alt="library" src={LibrayIcon} />},
    {name: 'Histórico', button: <ButtonIcon alt="history" src={HistoricIcon} />, }
]

const explore = [
    {name: 'Em alta', button: <ButtonIcon alt="high" src={TrendingIcon} />},
    {name: 'Shopping', button: <ButtonIcon alt="shopping" src={ShoppingIcon} />},
    {name: 'Música', button: <ButtonIcon alt="music" src={MusicIcon} />},
    {name: 'Filmes', button: <ButtonIcon alt="film" src={FilmIcon} />},
    {name: 'Ao vivo', button: <ButtonIcon alt="live" src={LiveIcon} />},
    {name: 'Jogos', button: <ButtonIcon alt="games" src={GameIcon} />},
    {name: 'Noticías', button: <ButtonIcon alt="new" src={NewsIcon} />},
    {name: 'Esportes', button: <ButtonIcon alt="sports" src={SportsIcon} />},
    {name: 'Aprender', button: <ButtonIcon alt="study" src={StudyIcon} />},
]

const youtube = [
    {name: 'Youtube Premium', button: <ButtonIcon alt="yt-premium" src={YoutubeIcon} />},
    {name: 'Youtube Music', button: <ButtonIcon alt="yt-music" src={YoutubeMusic} />},
    {name: 'Youtube Kids', button: <ButtonIcon alt="yt-kids" src={YoutubeKids} />},
]

const settings = [
    {name: 'Configurações', button: <ButtonIcon alt="settings" src={SettingsIcon} />},
    {name: 'Histórico de denúncias', button: <ButtonIcon alt="history-flag" src={FlagIcon} />},
    {name: 'Ajuda', button: <ButtonIcon alt="help" src={HelpIcon} />},
    {name: 'Enviar feedback', button: <ButtonIcon alt="feedback" src={FeedbackIcon} />},
]

function Menu(){
    const { openMenu, setOpenMenu } = useContext(MenuContext);
    const { login } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(window.innerWidth < 1300) {
            setOpenMenu(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[location]);

    useEffect(() => {
        function handleResize(){
            setOpenMenu(window.innerWidth > 1300);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return() => window.removeEventListener('resize', handleResize);
    }, [setOpenMenu]);

    useEffect(() => {
        if(openMenu && window.innerWidth < 1300) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }
    },[openMenu]);
 
    return(
        <>
            <MenuOverLay openMenu={openMenu} /> 
            <Container openMenu={openMenu}>
                <MenuHeader openMenu={openMenu}>
                    <ButtonContainer onClick={() => setOpenMenu(false)}>
                        <ButtonIconHeader alt="menu" src={HamburguerIcon} />
                    </ButtonContainer>
                    <img alt="logo" src={Logo} onClick={() => navigate('/')} />
                </MenuHeader>
                {home.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)} >
                        {item.button}
                        <span>{item.name}</span>
                    </MenuItem>
                ))}
                <Divider openMenu={openMenu}/>
                {libray.map((item) => (
                    <MenuItem openMenu={openMenu}>
                        {item.button}
                        <span>{item.name}</span>
                    </MenuItem>
                ))}
                <Divider openMenu={openMenu}/>
                <OpenMenuContainer openMenu={openMenu}>
                    <LoginContainer login={login}>
                        <TextLogin>
                            Faça login para curtir vídeos, comentar e se inscrever.
                        </TextLogin>
                        <LoginButton onClick={() => navigate('/login')}>
                            <ImgLogin alt="avatar" src={AvatarIcon}/>
                            <TextImgLogin>Fazer Login</TextImgLogin>
                        </LoginButton>
                    </LoginContainer>
                    <DividerLogin login={login}/>
                    <TitleSession>Explorar</TitleSession>
                    {explore.map((item) => (
                        <MenuItem openMenu={openMenu}>
                            {item.button}
                            <span>{item.name}</span>
                        </MenuItem>
                    ))}
                    <Divider openMenu={openMenu}/>
                    <MenuItem openMenu={openMenu}>
                        <ButtonIcon alt="add-channel" src={AddIcon} />
                        <span>Procurar Canais</span>
                    </MenuItem>
                    <Divider openMenu={openMenu}/>
                    <TitleSession>Mais do Youtube</TitleSession>
                    {youtube.map((item) => (
                        <MenuItem openMenu={openMenu}>
                            {item.button}
                            <span>{item.name}</span>
                        </MenuItem>
                    ))}  
                    <Divider openMenu={openMenu}/>
                    {settings.map((item) => (
                        <MenuItem openMenu={openMenu}>
                            {item.button}
                            <span>{item.name}</span>
                        </MenuItem>
                    ))}  
                    <Footer>
                        <Divider openMenu={openMenu}/>
                        <p>
                            Sobre   Imprensa <br />
                            Direitos autorais <br />
                            Entre em contato <br />
                            Criadores de conteúdo <br />
                            Publicidade  Desenvolvedores  
                        </p>
                        <p>
                            Termos Privacidade <br />
                            Política e segurança <br />
                            Como funciona o youtube <br />
                            Testar os novos recursos
                        </p>
                        <span>© 2023 Google LLC</span>
                    </Footer>
                </OpenMenuContainer>
            </Container>
        </>
    )
}

export default Menu;