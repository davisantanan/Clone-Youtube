import { ButtonContainer, 
    ButtonLogin, 
    Container, 
    ContentContainer, 
    HeaderLogin, 
    HeaderLoginSpan, 
    Icon, 
    InputBox, 
    SpanAccount, 
    TextLogin 
} from './styles';
import { useState, useContext } from 'react'
import { UserContext } from '../../contexts/userContext';
import GoogleIcon from '../../assets/alogin/Google_2015_logo.svg.png';
import { useNavigate } from 'react-router-dom';


function Login(){
    const { handleLogin } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    
    return(
        <Container>
            <ContentContainer>
                <Icon alt='google-icon' src={GoogleIcon} />
                <HeaderLogin>Fazer Login</HeaderLogin>
                <HeaderLoginSpan>Prosseguir no Youtube</HeaderLoginSpan>
                <InputBox>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label>E-mail ou telefone</label>
                </InputBox>
                <InputBox>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <label>Digite sua senha</label>
                </InputBox>
                <TextLogin>
                    Não está no seu computador? Use o modo visitante para fazer login com privacidade. Saiba mais
                </TextLogin>
                <ButtonContainer>
                    <SpanAccount onClick={() => navigate('/sign-up')}>Criar conta</SpanAccount>
                    <ButtonLogin onClick={() => handleLogin(email, password)}>Login</ButtonLogin>
                </ButtonContainer>
            </ContentContainer>
        </Container>
    )
}

export default Login;