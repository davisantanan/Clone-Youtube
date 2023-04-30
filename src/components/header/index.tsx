import { 
    ButtonContainer, 
    ButtonIcon, 
    Container, 
    HeaderButtons, 
    LoginButton, 
    LogoContainer, 
    SearchButton, 
    SearchContainer, 
    SearchInput, 
    SearchInputContainer,
    ImgLogin,
    TextImgLogin,
    ProfileImage,
    ButtonContainerResponsive,
    ButtonContainerLogo
} from "./styles";
import AvatarIcon from '../../assets/amenu/avatar.png';
import HamburguerIcon from '../../assets/aheader/hamburger.png';
import Logo from '../../assets/aheader/YouTube-Logo.png';
import SearchIcon from '../../assets/aheader/search.png';
import MicIcon from '../../assets/aheader/microfone-gravador.png';
import VideoIcon from '../../assets/aheader/video.png';
import NotificationIcon from '../../assets/aheader/sino.png';
import { useContext, useEffect, useState } from 'react';
import { MenuContext } from "../../contexts/menuContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import DropDowMenu from "../dropDowMenu";
import { DropMenuContext } from "../../contexts/dropDownMenuContext";
import { MouseEvent } from 'react';


function Header(){

    const { login, user } = useContext(UserContext);
    const { openMenu, setOpenMenu } = useContext(MenuContext);
    const { openDropMenu, setOpenDropMenu } = useContext(DropMenuContext);
    const [ openSearchBar, setOpenSearchBar ] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        setOpenDropMenu(false);
   },[login, setOpenDropMenu]);

    const handleButtonClick = (e:MouseEvent) => {
        e.stopPropagation();
    };

    return(
        <Container>
            <LogoContainer openSearchBar={openSearchBar}>
                <ButtonContainerLogo margin= '0 10px 0 0' onClick={() => setOpenMenu(!openMenu)}>
                    <ButtonIcon alt="" src={HamburguerIcon} />
                </ButtonContainerLogo>
                <img alt="" src={Logo} onClick={() => navigate('/')} />
            </LogoContainer>
            
            <SearchContainer>
                <SearchInputContainer openSearchBar={openSearchBar}>
                    <SearchInput placeholder="Pesquisar" />
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={SearchIcon} />
                </SearchButton>
                <ButtonContainer openSearchBar={openSearchBar} margin= '0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButtons openSearchBar={openSearchBar} login={login}>
                <ButtonContainer openSearchBar={openSearchBar} margin= '0 0 0 10px'>
                    <ButtonIcon alt="" src={VideoIcon} />
                </ButtonContainer>
                <ButtonContainer openSearchBar={openSearchBar} margin= '0 0 0 10px'>
                    <ButtonIcon alt="" src={NotificationIcon} />
                </ButtonContainer>
                <ButtonContainerResponsive margin= '0 0 0 10px' onClick={() => setOpenSearchBar(!openSearchBar)}>
                    <ButtonIcon alt="" src={SearchIcon} />
                </ButtonContainerResponsive>
                {login ?
                <>
                    <ProfileImage 
                    onClick={() => setOpenDropMenu(!openDropMenu)} 
                    onMouseDown={handleButtonClick}>
                        <span>
                            {user && user.name ? user.name.charAt(0).toUpperCase() : ''}
                        </span>
                    </ProfileImage>
                    <DropDowMenu />
                </> 
                :
                <LoginButton onClick={() => navigate('/login')}>
                    <ImgLogin alt="" src={AvatarIcon}/>
                    <TextImgLogin>Fazer Login</TextImgLogin>
                </LoginButton>
                }
            </HeaderButtons>
        </Container>
    )
}

export default Header;