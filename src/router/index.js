import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/Page/Page'
import Goods_Add from "@/components/Goods_Add/Goods_Add"
import Orders from "@/components/Orders/Orders"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Page',
      component: Page,
      redirect:"goods_add",
      children:[{
        path:"goods_add",
        name:'Goods_Add',
        component:Goods_Add
      },
      {
        path:"orders",
        name:'Orders',
        component:Orders
      }
    ]
    }
  ]
})
