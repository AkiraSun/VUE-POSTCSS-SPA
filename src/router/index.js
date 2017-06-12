import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import CityList from '@/components/CityList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/citylist',
      name: 'CityList',
      component: CityList
    }
  ]
})
