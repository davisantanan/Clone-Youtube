import Header from "../../components/header";
import Menu from "../../components/menu";
import VideoSearchCard from "../../components/videoSearchCard";
import { SearchContainer, Container } from "./styles";
import { useContext, useEffect, useState } from 'react';
import { MenuContext } from "../../contexts/menuContext";
import axios from "axios";
import moment from "moment";
import { SearchContext } from "../../contexts/searchContext";


function SearchPage(){

    interface Videos {
        id: {
          videoId: string;
        } 
        snippet: {
          title: string;
          thumbnails: {
            high: {
              url: string
            }
          }
          channelTitle: string;
          publishedAt: string;
          description: string;
        }
    }
  
  const { openMenu } = useContext(MenuContext);
  const { search } = useContext(SearchContext)
  const [videos, setVideos] = useState<Videos[]>([]);

  useEffect(() => {
    if(search !== '') {
        load();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  
  const API_KEY = 'AIzaSyCMpWvUwocM23yBOpkz6VpWuY6y6E99sb8'

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=20&&key=${API_KEY}`
    
  async function load() {
    try {
      const response = await axios.get(url);
      setVideos(response.data.items);
    } catch(error){
      console.log(error);
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
    <SearchContainer>
        <Header />
        <Menu />
        <Container openMenu={openMenu}>
          {videos.map((video, index) => (
            <VideoSearchCard
            key={index}
            title={video.snippet.title}
            image={video.snippet.thumbnails.high?.url}
            channelImage={video.snippet.channelTitle.charAt(0).toUpperCase()}
            channelName={video.snippet.channelTitle}
            details={`1 mi de visualizações - ${getPublishedTime(video.snippet.publishedAt)}`}
            description={video.snippet.description}
            />
          ))}
        </Container>
    </SearchContainer>
  )
}

export default SearchPage;