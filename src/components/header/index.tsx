import { 
    ButtonContainer, 
    ButtonIcon, 
    Container, 
    HeaderButtons, 
    LogoContainer, 
    SearchButton, 
    SearchContainer, 
    SearchInput, 
    SearchInputContainer,
} from "./styles";
import HamburguerIcon from '../../assets/aheader/hamburger.png';
import Logo from '../../assets/aheader/YouTube-Logo.png';
import SearchIcon from '../../assets/aheader/search.png';
import MicIcon from '../../assets/aheader/microfone-gravador.png';
import VideoIcon from '../../assets/aheader/video.png';
import NotificationIcon from '../../assets/aheader/sino.png';
import { useContext } from 'react';
import { MenuContext } from "../../contexts/menuContext";


function Header(){
    const { openMenu, setOpenMenu } = useContext(MenuContext);
    
    
    return(
        <Container>

            <LogoContainer>
                <ButtonContainer margin= '0 10px 0 0' onClick={() => setOpenMenu(!openMenu)}>
                    <ButtonIcon alt="" src={HamburguerIcon} />
                </ButtonContainer>
                <img style={{ cursor: 'pointer', width: '95px' }} alt="" src={Logo} />
            </LogoContainer>
            
            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar" />
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={SearchIcon} />
                </SearchButton>
                <ButtonContainer margin= '0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButtons>
                <ButtonContainer margin= '0 0 0 10px'>
                    <ButtonIcon alt="" src={VideoIcon} />
                </ButtonContainer>
                <ButtonContainer margin= '0 0 0 10px'>
                    <ButtonIcon alt="" src={NotificationIcon} />
                </ButtonContainer>
                <ButtonContainer>
                    D
                </ButtonContainer>
            </HeaderButtons>
        
        </Container>
    )
}

export default Header;