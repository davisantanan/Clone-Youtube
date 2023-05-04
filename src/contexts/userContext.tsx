import { createContext, ReactNode,  useState, useEffect } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

interface propsContextUser {
    children: ReactNode
};

interface user {
    name: string,
    email: string,
    password: string
};

interface typeContextUser {
    login: boolean,
    user: user,
    handleLogin: (email: string, password: string) => Promise<void>,
    logOut: () => void,
    createUser: (name:string, email:string, password:string) => void
};

export const UserContext = createContext({} as typeContextUser);

export const UserStorage = ({ children }: propsContextUser) => {
    const navigate = useNavigate()
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [token, setToken]= useState(localStorage.getItem('token') as string);

    const createUser = async (name:string, email:string, password:string) => {
        const {data} = await api.post('/user/sign-up', { name, email, password });
        try{
            console.log(data.status);
            alert('Usuário criado com sucesso');
            navigate('/login');
        } catch (error) {
            console.log('Não foi possível criar um usuário', error);
    };   
};

    const getUser = async (token:string) => {
        try{
            const {data} = await api.get('/user/get-user', {headers:{Authorization: token}});
            setUser(data.user);
            setLogin(true);
        } catch (error) {
            console.log('Usuário não autenticado', error);
        };
    };

    useEffect(() => {
        getUser(token);
    }, [token]); 

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({
            name: '',
            email: '',
            password: ''
        });
    };

    const handleLogin = async (email: string, password: string) => {
        try {
          const {data} = await api.post('/user/sign-in', { email, password });
          setLogin(true);
          localStorage.setItem('token', data.token);
          setToken(data.token);
          getUser(data.token);
          alert('Usuário Logado com sucesso');
          navigate('/');
        } catch (error) {
          console.log('Não foi possível fazer o Login', error);
        };
    };

    return(
        <UserContext.Provider value={{
            login,
            user,
            handleLogin,
            logOut,
            createUser
        }}>
            {children}
        </UserContext.Provider>
    )
}
