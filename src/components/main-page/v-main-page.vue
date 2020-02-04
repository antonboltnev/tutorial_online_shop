<template>
  <div class='v-main-page'>
    <h1>Online-shop</h1>
    <p>
      <router-link :to="{name: 'catalog'}">
        to Catalog
      </router-link>
    </p>
  </div>
</template>

<script>
  export default {
    name: "v-main-page",
    props: {},
    data() {
      return {}
    },
    computed: {}
  }
</script>

<style scoped>

</style>
