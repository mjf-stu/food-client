import Vue from "vue"
import Vuex from "vuex"

import shopCart from "./shopCart/shopCart.js"
import userLogin from "./userLogin/userLogin.js"

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        shopCart,
        userLogin
    }
})

export default store