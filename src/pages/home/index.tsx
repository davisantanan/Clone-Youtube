import VideoComponent from "../../components/videoComponent";
import { Container, Divider } from "./styles";
import { useContext } from 'react';
import { MenuContext } from "../../contexts/menuContext";
import Category from "../../components/category";
import Shorts from "../../components/shorts";


function Home(){
    const { openMenu } = useContext(MenuContext);
    return(
        <>
        <Category />
        <Container openMenu={openMenu}>
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
        </Container>
        <Divider />
        <Shorts />
        <Divider />
        </>
    )
}

export default Home;