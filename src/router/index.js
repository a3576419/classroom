import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/login/Login";
import Logup from "@/views/logup/Logup";
import Home from "@/views/home/Home";
import JingPin from "@/views/jingpin/JingPin";
import XianMian from "@/views/xianmian/XianMian";
import KuaJing from "@/views/kuajing/KuaJing";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/jingpin',
    component: JingPin
  },
  {
    path: '/xianmian',
    component: XianMian
  },
  {
    path: '/kuajing',
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
