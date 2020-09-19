import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from "@/views/home/Home";
// import Login from "@/views/login/Login";
// import Logup from "@/views/logup/Logup";
// import JingPin from "@/views/jingpin/JingPin";
// import XianMian from "@/views/xianmian/XianMian";
// import KuaJing from "@/views/kuajing/KuaJing";
// import JingPin_Yingxiao from "@/views/jingpin/JingPin_YingXiao";
// import JingPin_YaMaXun from "@/views/jingpin/JingPin_YaMaXun";
// import JingPin_KuaJing from "@/views/jingpin/JingPin_KuaJing";

// 路由懒加载
const Home = () =>import('@/views/home/Home')
const JingPin = () =>import('@/views/jingpin/JingPin')
const XianMian = () =>import('@/views/xianmian/XianMian')
const KuaJing = () =>import('@/views/kuajing/KuaJing')
const Login = () =>import('@/views/login/Login')
const Logup = () =>import('@/views/logup/Logup')

const JingPin_All = () =>import('@/views/jingpin/JingPin_All')
const JingPin_Yingxiao = () =>import('@/views/jingpin/JingPin_YingXiao')
const JingPin_YaMaXun = () =>import('@/views/jingpin/JingPin_YaMaXun')
const JingPin_KuaJing = () =>import('@/views/jingpin/JingPin_KuaJing')



Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: '重定向',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/jingPin',
    component: JingPin,
    children:[
        {
          path:'all',
          component: JingPin_All,
        },
        {
          path:'yingXiao',
          component: JingPin_Yingxiao,
        },
        {
          path:'yaMaXun',
          component: JingPin_YaMaXun,
        },
        {
          path:'kuaJing',
          component: JingPin_KuaJing,
        },

    ]
  },
  {
    path: '/xianMian',
    component: XianMian
  },
  {
    path: '/kuaJing',
    component: KuaJing
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/logup',
    component: Logup
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
