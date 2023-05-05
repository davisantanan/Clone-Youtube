import { 
    Container, 
    MenuItem,  
    ProfileContainer, 
    ProfileImage, 
    ProfileName, 
    Divider,
    ButtonIcon,
    ProfileImageContainer,
    ButtonCloseDropdown
} from "./styles";
import { useContext, useEffect, useRef } from 'react';
import { UserContext } from "../../contexts/userContext";
import ProfileIcon from '../../assets/adropdown/photo.png';
import StudioIcon from '../../assets/adropdown/youtube.png';
import ProfileChange from '../../assets/adropdown/exchange.png';
import Exit from '../../assets/adropdown/door.png';
import BuyIcon from '../../assets/adropdown/ganho.png';
import DataYoutubeIcon from '../../assets/adropdown/secured-profile.png';
import MoonIcon from '../../assets/adropdown/moon.png';
import LanguageIcon from '../../assets/adropdown/escolha-do-idioma.png';
import SecurityIcon from '../../assets/adropdown/security.png';
import GloboIcon from '../../assets/adropdown/globo.png';
import KeyboardIcon from '../../assets/adropdown/teclado.png';
import SettingsIcon from '../../assets/adropdown/settings.png';
import HelpIcon from '../../assets/adropdown/ajudando.png';
import FeedBackIcon from '../../assets/adropdown/feedback.png';
import CancelButton from '../../assets/adropdown/cancel.png';
import { DropMenuContext } from "../../contexts/dropDownMenuContext";


function DropDowMenu(){
    const { user, logOut } = useContext(UserContext);
    const { openDropMenu, setOpenDropMenu } = useContext(DropMenuContext);    
    const menuRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const handleMouseDown = (e:MouseEvent) => {
            if(menuRef.current && !menuRef.current.contains(e.target as Element)){
                setOpenDropMenu(false);   
            }
        }
        document.addEventListener("mousedown", handleMouseDown);
        return() =>{
            document.removeEventListener("mousedown", handleMouseDown);
        }
    }, [setOpenDropMenu]);
    
    const channel = [
        {name: 'Seu canal', button: <ButtonIcon alt="your-channel" src={ProfileIcon} /> },
        {name: 'Youtube Studio', button: <ButtonIcon alt="studio" src={StudioIcon} /> },
        {name: 'Alternar Conta', button: <ButtonIcon alt="change-account" src={ProfileChange} /> },
    ]
    
    const buy = [
        {name: 'Compras e assinaturas', button: <ButtonIcon alt="buys" src={BuyIcon} /> },
        {name: 'Seus dados no Youtube', button: <ButtonIcon alt="yt-data" src={DataYoutubeIcon} /> }
    ]
    
    const appearance = [
        {name: 'Aparência: claro', button: <ButtonIcon alt="theme" src={MoonIcon} /> },
        {name: 'Idioma: Português', button: <ButtonIcon alt="language" src={LanguageIcon} /> },
        {name: 'Modo restrito: desativado', button: <ButtonIcon alt="restrict-mode" src={SecurityIcon} /> },
        {name: 'Local: Brasil', button: <ButtonIcon alt="local" src={GloboIcon} /> },
        {name: 'Atalhos do teclado', button: <ButtonIcon alt="keyboard" src={KeyboardIcon} /> },
    ]

    const help = [
        {name: 'Ajuda', button: <ButtonIcon alt="help" src={HelpIcon} /> },
        {name: 'Enviar feedback', button: <ButtonIcon alt="feedback" src={FeedBackIcon} /> },
    ]

    return(
        <Container openDropMenu={openDropMenu} ref={menuRef} >
            <ButtonCloseDropdown alt="" src={CancelButton} onClick={() => setOpenDropMenu(false)}/>
            <ProfileContainer>
                <ProfileImageContainer>
                    <ProfileImage>
                        <span>
                            {user && user.name ? user.name.charAt(0).toUpperCase() : ''}
                        </span>
                    </ProfileImage>
                </ProfileImageContainer>
                <ProfileName>
                    {user.name}
                </ProfileName>
            </ProfileContainer>
            <Divider />
            {channel.map((item) => (
                <MenuItem>
                    {item.button}
                    <span>{item.name}</span>
                </MenuItem>
            ))}
            <MenuItem onClick={() => logOut()}>
                <ButtonIcon alt="exit-button" src={Exit}/>
                <span>Sair</span>
            </MenuItem>
            <Divider />
            {buy.map((item) => (
                <MenuItem>
                    {item.button}
                    <span>{item.name}</span>
                </MenuItem>
            ))}
            <Divider />
            {appearance.map((item) => (
                <MenuItem>
                    {item.button}
                    <span>{item.name}</span>
                </MenuItem>
            ))}
            <Divider />
            <MenuItem>
                <ButtonIcon alt="settings-button" src={SettingsIcon}/>
                <span>Configurações</span>
            </MenuItem>
            <Divider />
            {help.map((item) => (
                <MenuItem>
                    {item.button}
                    <span>{item.name}</span>
                </MenuItem>
            ))}
        </Container>
    )
}

export default DropDowMenu;