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

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '重定向',
    redirect:'/home',
    meta:{
      title:'首页'
    }
  },
  {
    path: '/home',
    name: '首页',
    component: Home,
    meta:{
      title:'首页'
    }
  },
  {
    path: '/jingPin',
    name: '精品自学课程',
    component: JingPin,
    meta:{
      title:'精品自学课程'
    }
  },
  {
    path: '/xianMian',
    name: '限免课程',
    component: XianMian,
    meta:{
      title:'限免课程'
    }
  },
  {
    path: '/kuaJing',
    name: '跨境资讯',
    component: KuaJing,
    meta:{
      title:'跨境资讯'
    }
  },
  {
    path: '/login',
    name: '登录',
    component: Login,
    meta:{
      title:'登录'
    }
  },
  {
    path: '/logup',
    name: '注册',
    component: Logup,
    meta:{
      title:'注册'
    }
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

// 全局导航守卫修改页面标题
router.beforeEach((to,from,next)=>{
  // 从from跳转到to
  document.title=to.matched[0].meta.title;
  next()
})


export default router
