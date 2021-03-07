import {shopRequest} from "./axios.js"

export function shopList(page,cateName,sort=""){
    return shopRequest({
        method: "GET",
        url: "/shop",
        params: {page,cateName,sort}
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
