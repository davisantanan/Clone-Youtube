import { createContext, ReactNode,  useState, useEffect } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

interface propsContextUser {
    children: ReactNode
};

interface user {
    id?: string;
    name: string,
    email: string,
    password: string
};

interface typeContextUser {
    login: boolean,
    user: user,
    token: string,
    userVideos: {},
    handleLogin: (email: string, password: string) => Promise<void>,
    logOut: () => void,
    createUser: (name:string, email:string, password:string) => void,
    createVideos: (token: string, user_id: string, title: string, description: string, thumbnail: string) => void
};

export const UserContext = createContext({} as typeContextUser);

export const UserStorage = ({ children }: propsContextUser) => {
    const navigate = useNavigate();
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [token, setToken]= useState(localStorage.getItem('token') as string);
    const [userVideos, setUserVideos] = useState([])

    const createUser = async (name:string, email:string, password:string) => {
        try{
            const {data} = await api.post('/user/sign-up', { name, email, password });
            console.log(data.status);
            alert('Usuário criado com sucesso');
            navigate('/login');
        } catch(error) {
            console.log('Não foi possível criar um usuário', error);
        };   
    };

    const createVideos = async (
        token:string, 
        user_id:string, 
        title:string, 
        description:string, 
        thumbnail:string) => {
            try{
                const { data } = await api.post('/videos/create-video', 
                { user_id, title, description, thumbnail }, 
                {headers: {Authorization: token}});
                alert("Vídeo enviado com sucesso");
                getUser(token);
                console.log(data)
            } catch(error) {
            alert('Não foi possível criar o vídeo');
            console.log('Não foi possível criar o vídeo', error);
        }
    }

    const getVideos = async (token:string, user_id:string) => {
        try{
            const { data } = await api.get(`/videos/get-videos?user_id=${user_id}`, {headers:{Authorization:token}});
            setUserVideos(data.video);
        } catch(error) {
            console.log('Não foi possível buscar os vídeos', error);
        }
    }

    const getUser = async (token:string) => {
        try{
            const { data } = await api.get('/user/get-user', {headers:{Authorization:token}});
            setUser(data.user);
            setLogin(true);
            getVideos(token, data.user.id);
        } catch(error) {
            console.log('Usuário não autenticado', error);
        };
    };

    useEffect(() => {
        getUser(token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            const { data } = await api.post('/user/sign-in', { email, password });
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
            alert('Usuário Logado com sucesso');
            navigate('/');
        } catch(error) {
            console.log('Não foi possível fazer o Login', error);
        };
    };

    return(
        <UserContext.Provider value={{
            login,
            user,
            handleLogin,
            logOut,
            createUser,
            createVideos,
            token,
            userVideos
        }}>
            {children}
        </UserContext.Provider>
    )
}
