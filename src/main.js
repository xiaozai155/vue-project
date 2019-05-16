// 入口文件
import Vue from 'vue'

import app from './App.vue'

import { Header } from 'mint-ui';



Vue.component(Header.name, Header);

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import router from './router.js'

import './lib/mui/css/mui.min.css'

import './lib/mui/css/icons-extra.css'

//轮播图
import { Swipe, SwipeItem } from 'mint-ui';

//请求数据
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

var vm = new Vue({
    el:'#app',
    render : function(createElement){
        return createElement(app)
    },
    router
})
