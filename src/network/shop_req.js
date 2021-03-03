import {shopRequest} from "./axios.js"

export function shopList(page,cateName){
    return shopRequest({
        method: "GET",
        url: "/shop",
        params: {page,cateName}
    })
}