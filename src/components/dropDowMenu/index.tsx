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
import { DropMenuContext } from "../../contexts/dropDownMenuContext";
import { useNavigate } from "react-router-dom";
import Exit from '../../assets/adropdown/door.png';
import CancelButton from '../../assets/adropdown/cancel.png';
import VideosIcon from '../../assets/adropdown/subscribe.png';


function DropDowMenu(){
    const { user, logOut } = useContext(UserContext);
    const { openDropMenu, setOpenDropMenu } = useContext(DropMenuContext);    
    const menuRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    
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
            <MenuItem onClick={() => navigate('/user-videos')}>
                <ButtonIcon alt="your-videos" src={VideosIcon} />
                <span>Seus vídeos</span>
            </MenuItem>
            <MenuItem onClick={() => logOut()}>
                <ButtonIcon alt="exit-button" src={Exit}/>
                <span>Sair</span>
            </MenuItem>
            <Divider />
        </Container>
    )
}

export default DropDowMenu;