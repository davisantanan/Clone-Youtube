import { Buttons, Carousel, CategoryBox, 
    CategoryItem, 
    Container, 
    Left, 
    Right
}  from './styles';
import ButtonRight from "../../assets/ahome/right.png";
import ButtonLeft from "../../assets/ahome/left.png";
import { useRef, useState, useEffect, useContext } from 'react';
import { CategoryContext } from '../../contexts/categoryContext';




const navBar = [ 
    {name: 'Tudo', id: '0'},
    {name: 'Política', id: '25'},
    {name: 'Automóveis e Veículos', id: '2'},
    {name: 'Animais de Estimação', id: '15'},
    {name: 'Futebol', id: '17'},
    {name: 'Entretenimento', id: '24'},
    {name: 'Curtos', id: '26'},
    {name: 'Games', id: '20'},
    {name: 'Comédia', id: '23'},
    {name: 'Viral', id: '22'},
    {name: 'Músicas', id: '10'},
    {name: 'Atualidades do mundo', id: '25'},
    {name: 'Infanto-Juvenil', id: '20'},
    {name: 'Geralzão', id: '0'},
    {name: 'Tração nas 4 rodas', id: '2'},
    {name: 'Bombando Musicalmente', id: '10'},
    {name: 'Esportes', id: '17'},
    {name: 'Animais', id: '15'},
];

function Category(){
    
    const { setCategoryId } = useContext(CategoryContext)
    const [activeIndex, setActiveIndex] = useState(0);
    const [leftArrow, SetLeftArrow] = useState(false);
    const [rightArrow, setRightArrow] = useState(true)
    const carousel = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const element = carousel.current!;
        const handleScroll = () => {
          const maxScrollLeft = element.scrollWidth - element.clientWidth;
          const scrollLeft = element.scrollLeft;
          SetLeftArrow(scrollLeft > 0);
          setRightArrow(scrollLeft < maxScrollLeft);
        };
        element.addEventListener('scroll', handleScroll);
        return () => {
          element.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function handleRightClick(e?:MouseEvent){
        e?.preventDefault();
        carousel.current!.scrollLeft += 200;
    };

    function handleLeftClick(e?:MouseEvent){
        e?.preventDefault();
        carousel.current!.scrollLeft -= 200;
    };
    
    return(
       <Container>
            <Carousel ref={carousel}>
                <Buttons>
                    <Left leftArrow={leftArrow} onClick={() => handleLeftClick()} >
                        <img alt='' src={ButtonLeft}/>
                    </Left>
                    <Right rightArrow={rightArrow} onClick={() => handleRightClick()}>
                        <img alt='' src={ButtonRight}/>
                    </Right>
                </Buttons>
            {navBar.map((item, index) => (
                <>
                <CategoryBox 
                key={index} 
                activeIndex={activeIndex === index} 
                onClick={() => {
                    setActiveIndex(index);
                    setCategoryId(item.id);
                }}>
                    <CategoryItem activeIndex={activeIndex === index}>
                        {item.name}
                    </CategoryItem>
                </CategoryBox>
                </>
            ))}
            </Carousel>
       </Container> 
    ) 
}

export default Category;