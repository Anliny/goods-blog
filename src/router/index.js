import Vue from 'vue'
import Router from 'vue-router'
import BContainer from '@/components/page/Container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'container',
      component: BContainer
    }
  ]
})
