import Vue from "vue"
import Vuex from "vuex"

import shopCart from "./shopCart/shopCart.js"

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        shopCart
    }
})

export default store