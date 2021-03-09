import Cookies from 'js-cookie';
import {
    cookieExpires
} from '../config';

export const setToken = (token) => {
    Cookies.set(token, token, {
        expires: cookieExpires || 1
    })
}

export const getToken = () => {
    const token = Cookies.get(token)
    if (token) return token
    else return false
}