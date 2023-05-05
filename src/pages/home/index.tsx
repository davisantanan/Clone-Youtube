import Header from "../../components/header";
import Menu from "../../components/menu";
import VideoComponent from "../../components/videoComponent";
import { Container, Divider, HomeContainer, MainContainer } from "./styles";
import { useContext, useEffect, useState } from 'react';
import { MenuContext } from "../../contexts/menuContext";
import { CategoryContext } from '../../contexts/categoryContext';
import Category from "../../components/category";
import Shorts from "../../components/shorts";
import axios from "axios";
import moment from "moment";


function Home(){

  interface Videos {
    id: string;
    snippet: {
      title: string;
      thumbnails: {
        high: {
          url: string
        }
        maxres: {
          url: string
        }
      }
      channelTitle: string;
      publishedAt: string;
    },
    statistics: {
      viewCount: string;
    }
  }
  
  const { categoryId } = useContext(CategoryContext)
  const { openMenu } = useContext(MenuContext);
  const [videos, setVideos] = useState<Videos[]>([]);

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId])

  const API_KEY = 'AIzaSyCMpWvUwocM23yBOpkz6VpWuY6y6E99sb8'

  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=24&regionCode=br&videoCategoryId=${categoryId}&key=${API_KEY}`
    
  async function load() {
    try {
      const response = await axios.get(url);
      setVideos(response.data.items);
    } catch(error){
      console.log(error);
    }
  }
    
  function formatViewCount(viewCount: number): string {
    if (viewCount >= 1000000) {
      return `${(viewCount / 1000000).toFixed(0)} mi de visualizações`;
    } else if (viewCount >= 1000) {
      return `${(viewCount / 1000).toFixed(0)} mil visualizações`;
    } else {
      return `${viewCount} visualizações`;
    }
  }
    
  function getPublishedTime(publishedAt: string) {
    const now = moment();
    const publishedTime = moment(publishedAt);
    const diffDays = now.diff(publishedTime, 'days');

    if (diffDays <= 0) {
      return 'hoje';
    } else if (diffDays === 1) {
      return 'há 1 dia';
    } else if (diffDays <= 7) {
      return `há ${diffDays} dias`;
    } else if (diffDays <= 30) {
      const diffWeeks = Math.floor(diffDays / 7);
      if (diffWeeks === 1) {
        return 'há 1 semana';
      } else {
        return `há ${diffWeeks} semanas`;
      }
    } else if (diffDays <= 365) {
      const diffMonths = Math.floor(diffDays / 30);
      if (diffMonths === 1) {
        return 'há 1 mês';
      } else {
        return `há ${diffMonths} meses`;
      }
    } else {
      const diffYears = Math.floor(diffDays / 365);
      if (diffYears === 1) {
        return 'há 1 ano';
      } else {
        return `há ${diffYears} anos`;
      }
    }
  }

  return(
    <HomeContainer>
      <Header />
      <Menu />
      <MainContainer openMenu={openMenu}>
        <Category />
        <Container openMenu={openMenu}>
          {videos.map((video) => (
            <VideoComponent
            title={video.snippet.title}
            image={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}
            channelImage={video.snippet.channelTitle.charAt(0).toUpperCase()}
            channel={video.snippet.channelTitle}
            details={`${formatViewCount(Number(video.statistics.viewCount))} - ${getPublishedTime(video.snippet.publishedAt)}`}
            key={video.id}
            />
          ))}
        </Container>
        <Divider />
        <Shorts />
      </MainContainer>
    </HomeContainer>
  )
}

export default Home;