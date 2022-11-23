import { getCookie } from "cookies-next";

const env = process.env.ENV as string;

export const urls = {
    baseUrl: env === 'test' ? 'http://localhost:5000' : 'https://backend.luddoc-institute.com',
    tutorLms: 'https://mygrannyslove.com/wp-json/tutor/v1',
    zoomBaseUrl: 'https://api.zoom.us/v2'
}

export const authHeader = {
    Authorization: `Bear ${getCookie('accessToken')}`
}

export const refreshHeader = {
    Authorization: `Bear ${getCookie('refreshToken')}`
}