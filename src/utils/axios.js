import axios from 'axios';
import config from '..//config';
import {setToken,getToken}from './index';
class Http {
    constructor() {
        this.baseUrl = config.dev.baseUrl
        this.queue = {}
    }
    // interceptors(instance, url) {
    //     // 请求拦截
    //     instance.interceptors.request.use(config => {
    //         // 添加全局的loading...
    //         if (!Object.keys(this.queue).length) {
    //             // Spin.show() // 不建议开启，因为界面不友好
    //         }
    //         this.queue[url] = true
    //         return config
    //     }, error => {
    //         return Promise.reject(error)
    //     })
    //     // 响应拦截
    //     instance.interceptors.response.use(res => {
    //         const {
    //             data,
    //             status,
    //             headers
    //         } = res
    //         if (res.data.model && res.data.model.Authorization) {
    //             setToken(res.data.model.Authorization)
    //         }
    //         return {
    //             data,
    //             status,
    //             headers
    //         }
    //     }, error => {
    //         console.log('error', error)
    //         let errorInfo = error.response
    //         if (!errorInfo) {
    //             const {
    //                 request: {
    //                     statusText,
    //                     status
    //                 },
    //                 config
    //             } = JSON.parse(JSON.stringify(error))
    //             errorInfo = {
    //                 statusText,
    //                 status,
    //                 request: {
    //                     responseURL: config.url
    //                 }
    //             }
    //         }
    //         if (errorInfo.status === 401) {
    //             let origin = window.location.origin
    //         }
    //         return Promise.reject(error)
    //     })
    // }
    request(url, data, header, method) {
        var instance = axios.create();
        const config = {
            url: url,
            baseURL: this.baseURL,
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json',
                'token': getToken()
            }
        }
        if (header) {
            config.headers = Object.assign({}, header, config.header)
        }
        if (method === 'get') {
            config.headers.params = data
        } else {
            config.headers.data = data
        }
        return new Promise((resolve, reject) => {
            instance(config).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })

    }
    get(url, params, header) {
        return this.request({
            url: url,
            params,
            header,
            method: 'get'
        })
    }
    post(url, data, header) {
        return this.request({
            url: url,
            data,
            header,
            method: 'post'
        })
    }
    put(url, data, header) {
        return this.request({
            url: url,
            data,
            header,
            method: 'put'
        })
    }
}


export default new Http()