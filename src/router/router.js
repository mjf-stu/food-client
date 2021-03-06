import Vue from "vue"
import Router from "vue-router"

// 路由组件
const Home = () => import("@/views/Home/Home.vue")
const Search = () => import("@/views/Search/Search.vue")
const Order = () => import("@/views/Order/Order.vue")
const Profile = () => import("@/views/Profile/Profile.vue")

// 商家详情页
const ShopDetail = () => import("@/views/Detail/ShopDetail/ShopDetail.vue")

// 登录详情页
const Login = () => import("@/views/Detail/UserDetail/Login.vue")

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
        },
        {
            path : "/ShopDetail/:shop_id",
            component : ShopDetail
        },
        {
            path : "/Login",
            component : Login
        }
    ]
}) 

export default router