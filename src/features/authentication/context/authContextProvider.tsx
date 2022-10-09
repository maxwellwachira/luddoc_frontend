import {ReactNode, useState, useEffect, createContext, useContext} from 'react';
import { getCookie, hasCookie, setCookie, deleteCookie } from 'cookies-next';


type AuthContextType = {
    auth: boolean;
    userMe: object;
    logout: () => void;
}

interface Props {
    children: ReactNode;
}


const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({children}: Props) => {
    const [auth, setAuth] = useState(false);
    const [userMe, setUserMe] = useState({});

    const readTokenCookie = () => {
        let token = getCookie('token');
        if (token) {
            setAuth(true);
        }
    }

    const readUserMe = async () => {
        // const options = {
        //     method: 'GET',
        //     headers: {
        //       'Content-Type': 'application/json',
        //       'Authorization': `Bearer ${token}`,
        //     }
        // };

        // try{
        //     const user = await API.userMe(options);
        //     setUserMe(user[0]);

        // } catch (error) {
        //     console.log(error);
        // }
    }

    const logout = () => {
        setAuth(false);
        deleteCookie('token', {path:'/'});
    }

    useEffect(() => {
        readTokenCookie();
        if(auth)  readUserMe();   
    }, [auth]);

    return (
        <AuthContext.Provider value = {{auth, userMe, logout}}>
            {children}
        </AuthContext.Provider>
    );
}


export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error('AuthContext must be used with AuthContextProvider!');
    return context;
};