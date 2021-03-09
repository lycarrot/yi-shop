import axios from '../utils/axios';


export const login=(params)=>{
    return axios.get({
        url:'/login',
        params
    })
}
export const register=(data)=>{
    return axios.post({
        url:'/login',
        data
    })
}