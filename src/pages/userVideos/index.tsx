import Header from "../../components/header";
import Menu from "../../components/menu";
import { UserVideosContainer } from "./styles";


function UserVideos(){
    return(
        <UserVideosContainer>
            <Header />
            <Menu />
        </UserVideosContainer>
    )
}

export default UserVideos;