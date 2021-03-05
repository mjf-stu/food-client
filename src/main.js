/*
    入口文件
*/
import Vue from "vue"
import App from "./App.vue"

// 路由组件
import router from "./router/router.js"

// 状态管理
import store from "./store/store.js"

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")