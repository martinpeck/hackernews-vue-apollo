import Vue from 'vue'
import Router from 'vue-router'

import LinkList from '@/components/LinkList'
import CreateLink from '@/components/CreateLink'
import AppLogin from '@/components/AppLogin'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'page', params: {page: 1} }
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
    },
    {
      path: '/new/:page',
      name: 'page',
      component: LinkList
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/top',
      name: 'top',
      component: LinkList
    }
  ],
  mode: 'history'
})
