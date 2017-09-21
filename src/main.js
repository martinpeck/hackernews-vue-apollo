import Vue from 'vue'
import App from './App'
import router from './router'

import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client'
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'

import VueApollo from 'vue-apollo'

import { GC_USER_ID, GC_AUTH_TOKEN, SIMPLE_API_ENDPOINT, SUBSCRIPTION_API_ENDPOINT } from '@/constants/settings'

import 'tachyons'

Vue.config.productionTip = false

const networkInterface = createBatchingNetworkInterface({
  uri: SIMPLE_API_ENDPOINT
})

const wsClient = new SubscriptionClient(SUBSCRIPTION_API_ENDPOINT, {
  reconnect: true,
  connectionParams: {
    authToken: localStorage.getItem(GC_AUTH_TOKEN)
  }
})

const networkInterfactWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
)

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
  networkInterface: networkInterfactWithSubscriptions,
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
