const shopCart = {
    namespaced: true,
    state: {
        cart:[]
        // 测试数据
        // cart: [{ shop_id: 2, goods: [{ id: 1, name: "1个黑椒鸡块", tagname: "配餐", number: 2, money: 0.88, foodImg: xxxx}] }],
    },
    getters: {
        // 对应商店的对应商品数量===由于需要传参，但是getters函数又不支持传参所以只能通过返回一个有参数的函数
        getGoodsNumber(state, getters, rootState) {
            return function (shop_id, food_id) {
                // 获取shop_id对应的商店的购物车对象
                let shopcart_from_id = state.cart.filter(item => item.shop_id === shop_id)[0]
                if (shopcart_from_id === undefined) {
                    return 0
                }
                else {
                    // 通过food_id获取对应的goods
                    let food_from_id = shopcart_from_id.goods.filter(item => item.id === food_id)
                    return food_from_id.length === 0 ? 0 : food_from_id[0].number
                }
            }
        },
        // 获取对应tagName的商品数量（只需要传入当前shop——id与tagname即可）
        getGoodsNumberByTagName(state,getters,rootState){
            return function(shop_id,tagName){
                let shopcart_from_id = state.cart.filter(item => item.shop_id === shop_id)[0]
                if (shopcart_from_id === undefined) {
                    return 0
                }
                else{
                    let goods_from_tagName = shopcart_from_id.goods.filter(item=>item.tagName === tagName)
                    if(goods_from_tagName.length === 0){
                        return 0
                    }
                    else{
                        let count=0
                        for(let item of goods_from_tagName){
                            count = count + item.number
                        }
                        return count
                    }
                }
            }
        },
        // 获取当前商家的goods所有订单---传入shop——id
        getAllGoods(state,getters,rootState){
            return function(shop_id){
                let shop_from_shopId = state.cart.filter(item => item.shop_id === shop_id)
                if(shop_from_shopId.length === 0){
                    return 0
                }
                else{
                    // 总价
                    let total = 0
                    // 总数量
                    let count = 0
                    for(let item of shop_from_shopId[0].goods){
                        total += item.number * item.money
                        count += item.number
                    }
                    total = Math.floor(total*100)/100
                    // 由于如果goods的长度为0就不会有对应的shop——id所以只要存在shop——id那么就有goods
                    return {goods:shop_from_shopId[0].goods,total,count}
                }
            }
        }
    },
    mutations: {
        // 添加商店某些商品的数量
        addGoods(state,payload) {
            let shopcart_from_id = state.cart.filter(item => item.shop_id === payload.shop_id)[0]
            // 第一次点击+入商品时直接初始化一条数据
            if (shopcart_from_id === undefined) {
                state.cart.push({
                    shop_id: payload.shop_id,
                    goods:[{
                        id: payload.id, 
                        name: payload.foodInfo.foodName, 
                        tagName: payload.foodInfo.tagName, 
                        number: 1, 
                        money: payload.foodInfo.minPrice,
                        foodImg: payload.foodInfo.foodImg

                    }]
                })
            }
            else{
                let food_from_id = shopcart_from_id.goods.filter(item => item.id === payload.id)
                // 如果有关于shop_id的相关数据  但是没有对应的food——id商品则初始化一条数据
                if(food_from_id.length === 0){
                    shopcart_from_id.goods.push({
                        id: payload.id, 
                        name: payload.foodInfo.foodName, 
                        tagName: payload.foodInfo.tagName, 
                        number: 1, 
                        money: payload.foodInfo.minPrice,
                        foodImg: payload.foodInfo.foodImg
                    })
                }
                // 如果有相关的food——id数据则可以直接商品+1
                else{
                    food_from_id[0].number++
                }
            }
        },
        
        reduceGoods(state,payload){
            // 因为只有数据存在才能进行数据减1，所以不用进行判断直接获取减1即可
            let shopcart_by_id = state.cart.filter(item=>item.shop_id === payload.shop_id)[0]
            let goods_by_id = shopcart_by_id.goods.filter(item=>item.id === payload.id)[0]
            goods_by_id.number--
            // 如果number为0则从购物车中撤销下来
            if(goods_by_id.number === 0){
                let index = shopcart_by_id.goods.findIndex(item=>item.id === payload.id)
                shopcart_by_id.goods.splice(index,1)
            }
            // 如果当前商店的goods长度为0那么把当前商点从购物车中撤销下来
            if(shopcart_by_id.goods.length === 0){
                let index = state.cart.findIndex(item=>item.shop_id === payload.shop_id)
                state.cart.splice(index,1)
            }
        },

        // 根据shop———id清空购物车
        cleanGoods(state,payload){
            let index = state.cart.findIndex(item=>item.shop_id === payload.shop_id)
            state.cart.splice(index,1)
        }
    },
    actions: {

    }
}

export default shopCart