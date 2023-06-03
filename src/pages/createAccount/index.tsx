import { 
    ButtonCreate, 
    Container, 
    ContentContainer, 
    HeaderCreateAccount, 
    HeaderCreateSpan, 
    Icon, 
    InputBox, 
} from './styles';
import { useState, useContext } from 'react'
import { UserContext } from '../../contexts/userContext';
import GoogleIcon from '../../assets/alogin/Google_2015_logo.svg.png';


function CreateAccount(){
    const { createUser } = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return(
        
        <Container>
            <ContentContainer>
                <Icon alt='google-icon' src={GoogleIcon} />
                <HeaderCreateAccount>Criar uma Conta</HeaderCreateAccount>
                <HeaderCreateSpan>Insira seus dados</HeaderCreateSpan>
                <InputBox>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    <label>Insira seu Nome</label>
                </InputBox>
                <InputBox>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label>Digite seu e-mail</label>
                </InputBox>
                <InputBox>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <label>Digite sua senha</label>
                </InputBox>
                <ButtonCreate onClick={() => createUser(name, email, password)}>Criar conta</ButtonCreate>
            </ContentContainer>
        </Container>
        
    )
}

export default CreateAccount;