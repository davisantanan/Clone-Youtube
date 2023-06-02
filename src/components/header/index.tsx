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
    ButtonContainerLogo,
    ButtonBackBar,
    ClearButtonContainer,
    ClearButtonImg
} from "./styles";
import AvatarIcon from '../../assets/amenu/avatar.png';
import HamburguerIcon from '../../assets/aheader/hamburger.png';
import Logo from '../../assets/aheader/YouTube-Logo.png';
import SearchIcon from '../../assets/aheader/search.png';
import MicIcon from '../../assets/aheader/microfone-gravador.png';
import VideoIcon from '../../assets/aheader/video.png';
import NotificationIcon from '../../assets/aheader/sino.png';
import ButtonLeft from "../../assets/ahome/left.png";
import ClearButtonIcon from "../../assets/adropdown/cancel.png"
import DropDowMenu from "../dropDowMenu";
import { useContext, useEffect, useState } from 'react';
import { MenuContext } from "../../contexts/menuContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { DropMenuContext } from "../../contexts/dropDownMenuContext";
import { MouseEvent } from 'react';
import { SearchContext } from "../../contexts/searchContext";


function Header(){

    const [ openSearchBar, setOpenSearchBar ] = useState(false);
    const [ inputValue, setInputValue ] = useState('');
    const [ clearButton, setClearButton ] = useState(false);
    const { login, user } = useContext(UserContext);
    const { openMenu, setOpenMenu } = useContext(MenuContext);
    const { openDropMenu, setOpenDropMenu } = useContext(DropMenuContext);
    const { setSearch } = useContext(SearchContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        setOpenDropMenu(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
   },[login]);

    const handleButtonClick = (e:MouseEvent) => {
        e.stopPropagation();
    };

    function handleInput(inputValue: string){
        setInputValue(inputValue);
        if(inputValue === '') {
            setClearButton(false);
        } else {
            setClearButton(true);
        }
    }

    function clearInput(){
        setClearButton(false);
        setInputValue('');
    }

    return(
        <Container>
            <LogoContainer openSearchBar={openSearchBar}>
                <ButtonContainerLogo margin= '0 10px 0 0' onClick={() => setOpenMenu(!openMenu)}>
                    <ButtonIcon alt="menu" src={HamburguerIcon} />
                </ButtonContainerLogo>
                <img alt="logo" src={Logo} onClick={() => navigate('/')} />
            </LogoContainer>
            
            <SearchContainer>
                <ButtonBackBar 
                openSearchBar={openSearchBar} 
                alt="back" 
                src={ButtonLeft} 
                onClick={() => setOpenSearchBar(false)}
                />
                <SearchInputContainer openSearchBar={openSearchBar}>
                    <SearchInput 
                    placeholder="Pesquisar" 
                    value={inputValue}
                    onChange={(e) => {
                        handleInput(e.target.value)
                    }}
                    onKeyDown={(e) => {
                        if(e.key === "Enter") {
                            setSearch(inputValue)
                            navigate('/search')
                        } 
                    }}
                    />
                    <ClearButtonContainer 
                    clearButton={clearButton}
                    onClick={clearInput}>
                        <ClearButtonImg alt="clear" src={ClearButtonIcon} />
                    </ClearButtonContainer>
                </SearchInputContainer>
                <SearchButton
                onClick={() => {
                    if(inputValue.trim() === '') {
                        alert('Digite algo antes de tentar pesquisar')
                        return;
                    }
                    setSearch(inputValue)
                    navigate('/search')
                }}
                >
                    <ButtonIcon alt="search" src={SearchIcon} />
                </SearchButton>
                <ButtonContainer openSearchBar={openSearchBar} margin= '0 0 0 10px'>
                    <ButtonIcon alt="mic" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButtons openSearchBar={openSearchBar} login={login}>
                <ButtonContainer openSearchBar={openSearchBar} margin= '0 0 0 10px'>
                    <ButtonIcon alt="video" src={VideoIcon} />
                </ButtonContainer>
                <ButtonContainer openSearchBar={openSearchBar} margin= '0 0 0 10px'>
                    <ButtonIcon alt="notification" src={NotificationIcon} />
                </ButtonContainer>
                <ButtonContainerResponsive 
                margin= '0 0 0 10px' 
                onClick={ () => {
                    if(openSearchBar === false) {
                        setOpenSearchBar(true)
                    } else {
                        if(inputValue.trim() === '') {
                            alert('Digite algo antes de tentar pesquisar')
                            return;
                        }
                        setSearch(inputValue)
                        navigate('/search')
                    }
                }}>
                    <ButtonIcon alt="search" src={SearchIcon} />
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
                    <ImgLogin alt="avatar" src={AvatarIcon}/>
                    <TextImgLogin>Fazer Login</TextImgLogin>
                </LoginButton>
                }
            </HeaderButtons>
        </Container>
    )
}

export default Header;