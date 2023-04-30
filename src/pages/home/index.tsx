import VideoComponent from "../../components/videoComponent";
import { Container, Divider } from "./styles";
import { useContext } from 'react';
import { MenuContext } from "../../contexts/menuContext";
import Category from "../../components/category";
import Shorts from "../../components/shorts";


function Home(){
    const { openMenu } = useContext(MenuContext);
    
    const videos = [
        {
            image: 'https://i.ytimg.com/vi/Ko7qsNC-OTY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6ZJN6p4kcXM1o9VADQzFe1ytm3A', 
            title: 'CREED III | Official Trailer',
            channel: 'Warner Bros',
            views: '1,5 mi',
            time: '4 meses'
        },
        {
            image: 'https://i.ytimg.com/vi/qIGYM4S8x50/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDwnNpnDbUYXi9dHvof6s5ylLT3Qw', 
            title: 'APRENDA FETCH API DE JAVASCRIPT COM PROJETO',
            channel: 'Matheus Battisti - Hora de Codar',
            views: '25 mil',
            time: '10 meses'
        },
        {
            image: 'https://i.ytimg.com/vi/dmLpxwQMQAk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDySzM3XRTQzOldu_D0pQVM3ymsjg', 
            title: 'Barbie | Trailer Teaser 2 Legendado',
            channel: 'Ingresso.com',
            views: '62 mil',
            time: '7 horas'
        },
        {
            image: 'https://i.ytimg.com/vi/JdH2VDKMjCQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3CGEP5UK6yaArnhXoXguqyIrtgg', 
            title: 'FUTEBOL VS BASQUETE',
            channel: 'Cortes PodPah [OFICIAL]',
            views: '10 mil',
            time: '21 horas'
        },
        {
            image: 'https://i.ytimg.com/vi/i4ompLBhUg4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDClKfYnPToPfcXhyFTnAqwc6C9WQ', 
            title: 'Mega Hits 2022 🌱 The Best Of Vocal Deep House Music Mix 2022 🌱',
            channel: 'Deep House Relax',
            views: '6,2 mi',
            time: '9 meses'
        },
        {
            image: 'https://i.ytimg.com/vi/lQF6Vo0v9iU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2MVgwQXNNiwoN1QeQ1lZNq4h3UA', 
            title: 'BENZEMA FAZ TRÊS COM SHOW DE VINI JR E RODRYGO',
            channel: 'ESPN Brasil',
            views: '1,7 mi',
            time: '2 dias'
        },
        {
            image: 'https://i.ytimg.com/vi/4fezP875xOQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6DxTQcHwWbrPrLktaiIWvD3u6yQ', 
            title: '4 horas Chopin para Estudar, Concentrarse, Relaxarse',
            channel: 'HALIDONMUSIC',
            views: '10 mi',
            time: '1 ano'
        },
        {
            image: 'https://i.ytimg.com/vi/wXHZauq-kOc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCq4sp1qBJYNFti2TNKLcnCEcfXzw', 
            title: 'Entrevista com Manoel Gomes, o Caneta Azul | The Noite',
            channel: 'The Noite com Danilo Gentili',
            views: '1,4 mi',
            time: '5 dias'
        },
        {
            image: 'https://i.ytimg.com/vi/tZW57A5B0lI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBKz9DRXmJlLM49DXdV-Rh2Jm1nQ', 
            title: 'Terminei ! Veja como ficou o fusca mais bonito do Brasil',
            channel: 'Henrique Carvalho',
            views: '155 mil',
            time: '2 dias'
        },
        {
            image: 'https://i.ytimg.com/vi/BV5Gp3OEyaM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAkfCghhKnahUOlkicPF1rPIicQMw', 
            title: 'Besouro Azul | Trailer Dublado',
            channel: 'Ingresso.com',
            views: '562 mil',
            time: '1 dia'
        },
        {
            image: 'https://i.ytimg.com/vi/06TA3vNd8xg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0SMlzi9EUPoKJlXnnUzCT16N8Mg', 
            title: 'Marília Mendonça: As melhores - Os Melhores Clipes',
            channel: 'Som Livre',
            views: '159 mi',
            time: '4 anos'
        },
        {
            image: 'https://i.ytimg.com/vi/LAIPelIETfk/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhLIGUoXTAP&rs=AOn4CLANFFXX2xsvBV8YktqCbHcU1aPgxg', 
            title: 'Jhonatan Violonista',
            channel: 'KLC ORIGINAL',
            views: '32 mil',
            time: '10 dias'
        }
    ]

    
    return(
        <>
        <Category />
        <Container openMenu={openMenu}>
            {videos.map((video) => (
                <VideoComponent video={video} />
            ))}
        </Container>
        <Divider />
        <Shorts />
        </>
    )
}

export default Home;