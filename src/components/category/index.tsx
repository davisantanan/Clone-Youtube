import { Buttons, Carousel, CategoryBox, 
    CategoryItem, 
    Container, 
    InitalCaregoryItem, 
    InitialCategoryBox, 
    Left, 
    Right
}  from './styles';
import ButtonRight from "../../assets/ahome/right.png";
import ButtonLeft from "../../assets/ahome/left.png";
import { useRef } from 'react'




const navBar = [ 'Música', 'Jogos', 'Ao vivo', 'Notícias', 
'Podcast', 'Jazz', 'Blues', 'Animação', 'React', 'Comédia', 
'Música Brasileira', 'Dublagens', 'Hip-Hop Brasileiro', 'Jogo de ação e aventura', 'Liga dos Campeões da UEFA', 'Chill', 'Vibes', 'Reggae Now'];

function Category(){
    
    const carousel = useRef<HTMLDivElement>(null);

    function handleRightClick(e?:MouseEvent){
        e?.preventDefault()
        carousel.current!.scrollLeft += 180;
    };

    function handleLeftClick(e?:MouseEvent){
        e?.preventDefault()
        carousel.current!.scrollLeft -= 180;
    };
    
    return(
       <Container>
            <Carousel ref={carousel}>
                <Buttons>
                    <Left onClick={() => handleLeftClick()}><img alt='' src={ButtonLeft}/></Left>
                    <Right onClick={() => handleRightClick()}><img alt='' src={ButtonRight}/></Right>
                </Buttons>
            <InitialCategoryBox>
                <InitalCaregoryItem>
                    Tudo
                </InitalCaregoryItem>
            </InitialCategoryBox>
            {navBar.map((valor, index) => (
                <CategoryBox>
                    <CategoryItem key={index}>
                        {valor}
                    </CategoryItem>
                </CategoryBox>
            ))}
            </Carousel>
       </Container>
       
    ) 
}

export default Category;