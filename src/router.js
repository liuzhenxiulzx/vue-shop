import Vue from 'vue'
import Router from 'vue-router'
import  Index from './views/Index.vue'
import  personal from './views/personal.vue'
import  goods from './views/goods.vue'

Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Index,
      children:[
        {
          path:'',
          name:'index',
          meta:{
            title:'首页'
          },
          component: () => import('./views/Index/index.vue')
        },
        {
          path:'/Index/classify',
          name:'classify',
          meta:{
            title:'分类'
          },
          component: () => import('./views/Index/classify.vue'),
         
        },
        {
          path:'/Index/cart',
          name:'cart',
          meta:{
            title:'购物车'
          },
          component: () => import('./views/Index/cart.vue')
        },
        {
          path:'/Index/self',
          name:'self',
          meta:{
            title:'个人中心'
          },
          component: () => import('./views/Index/self.vue')
        },
      ]
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/regist',
      name: 'regist',
      component: () => import('./views/Regist.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Index/search.vue')
    },


    {
      path: '/personal',
      name: 'personal',
      meta:{
        title:'个人'
      },
      component: personal,
      children:[

        {
          path:'/personal/order',
          name:'order',
          mate:{
            title:'订单'
          },
          component: () => import('./views/personal/order.vue')
        },
        {
          path:'/personal/sendgoods',
          name:'sendgoods',
          mate:{
            title:'待发货'
          },
          component: () => import('./views/personal/sendgoods.vue')
        },
        {
          path:'/personal/assessing',
          name:'assessing',
          mate:{
            title:'待评价'
          },
          component: () => import('./views/personal/assessing.vue')
        },
        {
          path:'/personal/datum',
          name:'datum',
          mate:{
            title:'我的资料'
          },
          component: () => import('./views/personal/datum.vue')
        },
        {
          path:'/personal/mycollect',
          name:'mycollect',
          mate:{
            title:'我的收藏'
          },
          component: () => import('./views/personal/mycollect.vue')
        },
        {
          path:'/personal/integral',
          name:'integral',
          mate:{
            title:'我的积分'
          },
          component: () => import('./views/personal/integral.vue')
        },
        {
          path:'/personal/address',
          name:'address',
          mate:{
            title:'我的积分'
          },
          component: () => import('./views/personal/address.vue')
        },
      ]
    },

    {
      path: '/goods',
      name: 'goods',
      meta:{
        title:'商品'
      },
      component: goods,
      children:[
        {
          path:'/goods/goodslist',
          name:'goodslist',
          mate:{
            title:'商品列表'
          },
          component: () => import('./views/goods/goodslist.vue')
        },
        {
          path:'/goods/details',
          name:'details',
          mate:{
            title:'商品详情'
          },
          component: () => import('./views/goods/details.vue')
        },
      ]
    },
    

  ]
})

