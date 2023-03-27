import { CategoryBox, 
    CategoryItem, 
    Container, 
    InitalCaregoryItem, 
    InitialCategoryBox 
}  from './styles';



const navBar = [ 'Música', 'Jogos', 'Ao vivo', 'Notícias', 
'Podcast', 'Jazz', 'Blues', 'Animação', 'React', 'Comédia', 
'Música Brasileira', 'Dublagens', 'Hip-Hop Brasileiro', 'Jogo de ação e aventura', 'Chill'];

function Category(){
    

    return(
       <Container>
            <InitialCategoryBox>
                <InitalCaregoryItem>
                    Tudo
                </InitalCaregoryItem>
            </InitialCategoryBox>
            {navBar.map((valor) => (
                <CategoryBox>
                    <CategoryItem>
                        {valor}
                    </CategoryItem>
                </CategoryBox>
            ))}
       </Container>
       
    ) 
}

export default Category;