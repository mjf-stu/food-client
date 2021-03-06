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