<template>
  <div class="flex pa1 justify-between nowrap orange">
    <div class="flex flex-fixed black">
      <div class="fw7 mr1">Hacker News</div>
      <router-link :to="{name: 'home'}" class="ml1 no-underline black">new</router-link>
      <div class="ml1">|</div>
      <router-link :to="{name: 'create'}" class="ml1 no-underline black">submit</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppHeader'
  }
</script>
