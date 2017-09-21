import Vue from 'vue'
import Router from 'vue-router'

import LinkList from '@/components/LinkList'
import CreateLink from '@/components/CreateLink'
import AppLogin from '@/components/AppLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: LinkList
    },
    {
      path: '/create',
      name: 'create',
      component: CreateLink
    },
    {
      path: '/login',
      name: 'login',
      component: AppLogin
    }
  ],
  mode: 'history'
})
