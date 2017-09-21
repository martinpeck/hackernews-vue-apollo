import Vue from 'vue'
import App from './App'
import router from './router'

import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'

import { GC_USER_ID, GC_AUTH_TOKEN } from '@/constants/settings'

import 'tachyons'

Vue.config.productionTip = false

const networkInterface = createBatchingNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj7t4et2o0n210111lt1ipxt9'
})

networkInterface.use([{
  applyBatchMiddleware (req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }

    const token = localStorage.getItem(GC_AUTH_TOKEN)

    req.options.headers.authorization = token ? `Bearer ${token}` : null
    next()
  }
}])

const apolloClient = new ApolloClient({
  networkInterface,
  connectToDevTools: true
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

let userId = localStorage.getItem(GC_USER_ID)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider,
  router,
  data: {
    userId
  },
  template: '<App/>',
  components: { App }
})
