import Vue from "vue"
import Router from "vue-router"

// 路由组件
const Home = () => import("@/views/Home/Home.vue")
const Search = () => import("@/views/Search/Search.vue")
const Order = () => import("@/views/Order/Order.vue")
const Profile = () => import("@/views/Profile/Profile.vue")

Vue.use(Router)

const router = new Router({
    mode : "history",
    routes : [
        // 默认路径重定向
        {
            path : "/",
            redirect : "/Home"
        },
        {
            path : "/Home",
            component : Home
        },
        {
            path : "/Search",
            component : Search
        },
        {
            path : "/Order",
            component : Order
        },
        {
            path : "/Profile",
            component : Profile
        }
    ]
}) 

export default router