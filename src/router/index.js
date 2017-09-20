import Vue from 'vue'
import Router from 'vue-router'
import LinkList from '@/components/LinkList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LinkList',
      component: LinkList
    }
  ]
})
