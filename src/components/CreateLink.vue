<template>
  <div>
    <div class="flex flex-column mt3">
      <input
        class="mb2"
        v-model="description"
        type="text"
        placeholder="A description for the link">
      <input
        class="mb2"
        v-model="url"
        type="text"
        placeholder="The URL for the link">
      <button @click="createLink">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateLink',
  data () {
    return {
      description: '',
      url: ''
    }
  },
  methods: {
    createLink () {
      // ... stuff
    }
  }

}
</script>
