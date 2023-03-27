import { 
    ButtonIcon,
    Container, 
    Div, 
    Divider, 
    LoginContainer, 
    LoginButton, 
    MenuItem,
    Footer,
    TextLogin,
    ImgLogin,
    TextImgLogin,
    TitleSession
} from "./styles";
import { useContext } from 'react';
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
import { useNavigate } from "react-router-dom";


const home = [
    { name: 'Inicio', button: <ButtonIcon alt="" src={HomeIcon}/>, link: '/' },
    { name: 'Shorts', button : <ButtonIcon alt="" src={ShortsIcon} />, link: '/' },
    { name: 'Inscrições', button : <ButtonIcon alt="" src={SubscribeIcon} />, link: '/' }
];

const libray = [
    {name: 'Biblioteca', button: <ButtonIcon alt="" src={LibrayIcon} />, link: '/library'},
    {name: 'Histórico', button: <ButtonIcon alt="" src={HistoricIcon} />, link: '/history'}
]

const explore = [
    {name: 'Em alta', button: <ButtonIcon alt="" src={TrendingIcon} />},
    {name: 'Shopping', button: <ButtonIcon alt="" src={ShoppingIcon} />},
    {name: 'Música', button: <ButtonIcon alt="" src={MusicIcon} />},
    {name: 'Filmes', button: <ButtonIcon alt="" src={FilmIcon} />},
    {name: 'Ao vivo', button: <ButtonIcon alt="" src={LiveIcon} />},
    {name: 'Jogos', button: <ButtonIcon alt="" src={GameIcon} />},
    {name: 'Noticías', button: <ButtonIcon alt="" src={NewsIcon} />},
    {name: 'Esportes', button: <ButtonIcon alt="" src={SportsIcon} />},
    {name: 'Aprender', button: <ButtonIcon alt="" src={StudyIcon} />},
]

const youtube = [
    {name: 'Youtube Premium', button: <ButtonIcon alt="" src={YoutubeIcon} />},
    {name: 'Youtube Music', button: <ButtonIcon alt="" src={YoutubeMusic} />},
    {name: 'Youtube Kids', button: <ButtonIcon alt="" src={YoutubeKids} />},
]

const settings = [
    {name: 'Configurações', button: <ButtonIcon alt="" src={SettingsIcon} />},
    {name: 'Histórico de denúncias', button: <ButtonIcon alt="" src={FlagIcon} />},
    {name: 'Ajuda', button: <ButtonIcon alt="" src={HelpIcon} />},
    {name: 'Enviar feedback', button: <ButtonIcon alt="" src={FeedbackIcon} />},
]

function Menu(){
    const { openMenu } = useContext(MenuContext);
    const navigate = useNavigate()
 
    return(
        <>
        <Container openMenu={openMenu} >
            {home.map((item) => (
                <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)} >
                    {item.button}
                    <span>{item.name}</span>
                </MenuItem>
            ))}
            <Divider openMenu={openMenu}/>
            {libray.map((item) => (
                <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                    {item.button}
                    <span>{item.name}</span>
                </MenuItem>
            ))}
            <Divider openMenu={openMenu}/>
            <Div openMenu={openMenu}>
                
                <LoginContainer>
                    <TextLogin>
                        Faça login para curtir vídeos, comentar e se inscrever.
                    </TextLogin>
                    <LoginButton>
                        <ImgLogin alt="" src={AvatarIcon}/>
                        <TextImgLogin>Fazer Login</TextImgLogin>
                    </LoginButton>
                </LoginContainer>
                <Divider openMenu={openMenu}/>
                <TitleSession>Explorar</TitleSession>
                {explore.map((item) => (
                    <MenuItem openMenu={openMenu}>
                        {item.button}
                        <span>{item.name}</span>
                    </MenuItem>
                ))}
                <Divider openMenu={openMenu}/>
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={AddIcon} />
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
                <Divider openMenu={openMenu}/>
                <Footer>
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
            </Div>
        </Container>
        </>
    )
}

export default Menu;