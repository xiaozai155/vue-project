import VueRouter from 'vue-router'

import homecontainer from './components/tab/homecontainer.vue'

import membercontainer from './components/tab/membercontainer.vue'

import searchcontainer from './components/tab/searchcontainer.vue'

import shopcarcontainer from './components/tab/shopcarcontainer.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',component:homecontainer},
    {path:'/home',component:homecontainer},
    {path:'/member',component:membercontainer},
    {path:'/shopcar',component:shopcarcontainer},
    {path:'/serch',component:searchcontainer}
  ],
  linkActiveClass : 'mui-active'
})

// 把路由对象暴露出去
export default router