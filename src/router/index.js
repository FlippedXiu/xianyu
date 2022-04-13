import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import("../views/detail/Detail")
const Search = () => import("../views/search/search")
const Buy = () => import("../views/buy/Buy")

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
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
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router
