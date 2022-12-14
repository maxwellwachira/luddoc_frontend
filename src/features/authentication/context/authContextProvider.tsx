import {ReactNode, useState, useEffect, createContext, useContext} from 'react';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import axios from "axios"
import { useRouter } from 'next/router';

import { urls } from '../../../constants/urls';

type AuthContextType = {
    auth: boolean;
    userMe: {
        id: string;
        role: string;
        firstName?: string;
        lastName?: string;
        password?: string;
        email?: string;
        phoneNumber?: string;
        active?: boolean;
        disabled?: boolean;
    };
    logout: () => void;
    setAuth: any;
}

interface Props {
    children: ReactNode;
}


const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({children}: Props) => {
    const [auth, setAuth] = useState(false);
    const [userMe, setUserMe] = useState({
        role:'',
        id: ''
    });
    const router = useRouter();

    const readTokenCookie = () => {
        let token = getCookie('accessToken');
        if (token) {
            setAuth(true);
        }
    }

    const RefreshTokens = async () => {
        let refreshToken = getCookie('refreshToken');
        try {
            const { data } = await axios.post(`${urls.baseUrl}/auth/refresh`, {}, {headers: {Authorization: `Bear ${refreshToken}`}});
            setCookie('accessToken', data.accessToken);
            setCookie('refreshToken', data.refreshToken);
        } catch (error) {
            console.log(error);
        }
    }

    const logout = () => {
        deleteCookie('accessToken', {path:'/'});
        deleteCookie('refreshToken', {path:'/'});
        setAuth(false);
        router.push('/auth/sign-in');
    }

    const readUserMe = async () => {
        let token = getCookie('accessToken');
        try{
            const { data } = await axios.get(`${urls.baseUrl}/user/me`, {headers: {Authorization: `Bear ${token}`}});
            setUserMe(data);
        } catch (error: any) {
            console.log(error);
            if(error?.response?.data?.message === "expiredToken"){
                await RefreshTokens();
            }else{
                
            }

            logout();
        }
    }

    useEffect(() => {
        readTokenCookie();
        if(auth)  readUserMe();   
    }, [auth]);

    return (
        <AuthContext.Provider value = {{auth, userMe, logout, setAuth}}>
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