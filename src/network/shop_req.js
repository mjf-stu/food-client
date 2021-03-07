import {shopRequest} from "./axios.js"

export function shopList(page,cateName){
    return shopRequest({
        method: "GET",
        url: "/shop",
        params: {page,cateName}
    })
}

export function shopDetail(shop_id){
    return shopRequest({
        method: "GET",
        url: "/shopdetail",
        params: {
            shop_id
        }
    })
}

export function getShopById(shop_id){
    return shopRequest({
        method: "GET",
        url: "/shop/id",
        params: {
            shop_id
        }
    })
}
