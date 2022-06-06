import Vue from 'vue'
import VueRouter from 'vue-router'
import myGoods from "@/views/myGoods/myGoods";
import SignUp from "@/views/signup/SignUp";

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import("../views/detail/Detail")
const Search = () => import("../views/search/search")
const Buy = () => import("../views/buy/Buy")
const login = () => import("../views/login/Login")
const Sell = () => import("../views/sell/Sell")
const Upload = () => import("../views/upload/upload")
const MyGoods =() => import("../views/myGoods/myGoods")

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/profile'
  },
  {
    path: '/sell',
    component: Sell,
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path:'/detail/:iid',
    component: Detail
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/buy',
    component: Buy
  },
  {
    path: '/login',
    component: login
  },
  {
    path:'/signup',
    component:SignUp
  },
  {
    path: '/upload',
    component: Upload
  },
  {
    path: '/myGoods',
    component: MyGoods
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router
