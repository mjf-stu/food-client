import axios from "axios"

// 关于shop的数据请求
const ShopAxios = axios.create({
    baseURL: "http://127.0.0.1:8088",
    timeout: 5000
})

ShopAxios.interceptors.request.use(config=>{
    console.log("配置没问题，且无需更改")
    return config
},reason =>{
    console.log("配置出现问题")
    return Promise.reject(reason)
})

ShopAxios.interceptors.response.use(res =>{
    console.log("请求成功，且返回数据")
    return res.data
},reason =>{
    console.log("请求失败")
    return Promise.reject(reason)
})

export function shopRequest(config){
    return ShopAxios(config)
}