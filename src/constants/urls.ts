import { getCookie } from "cookies-next"
export const urls = {
    baseUrl: 'http://localhost:5000',
    tutorLms: 'https://mygrannyslove.com/wp-json/tutor/v1'
}

export const authHeader = {
    Authorization: `Bear ${getCookie('accessToken')}`
}

export const refreshHeader = {
    Authorization: `Bear ${getCookie('refreshToken')}`
}