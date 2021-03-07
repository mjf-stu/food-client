import {userRequest} from "./axios"

export function getUser(name,pwd){
    return userRequest({
        method: "GET",
        url: "/user",
        params:{
            name,
            pwd
        }
    })
}

export function getOrder(uId){
    return userRequest({
        method: "GET",
        url: "/order",
        params: {
            uId
        }
    })
}

export function insertOrder(orderInfo){
    return userRequest({
        method: "POST",
        url:"/order",
        data:{
            orderInfo
        }
    })
}