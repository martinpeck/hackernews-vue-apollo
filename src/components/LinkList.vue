<template>
  <div>
    <h4 v-if="loading">Loading...</h4>
    <link-item
      v-for="(link, index) in allLinks"
      :key="link.id"
      :link="link"
      :index="index">
    </link-item>
  </div>
</template>

<script>

import LinkItem from './LinkItem'
import { ALL_LINKS_QUERY } from '../constants/graphql'

export default {
  name: 'LinkList',
  data () {
    return {
      allLinks: [],
      loading: 0
    }
  },
  components: {
    'link-item': LinkItem
  },
  apollo: {
    allLinks: {
      query: ALL_LINKS_QUERY
    }
  }
}
</script>

