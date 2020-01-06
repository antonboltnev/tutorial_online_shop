<template>
  <div class="v-main-wrapper">
    <v-catalog />
    <v-cart />
  </div>
</template>

<script>
  import vCatalog from './v-catalog'
  import vCart from './v-cart'

  export default {
    name: 'v-main-wrapper',
    components: {
      vCatalog,
      vCart
    },
    props: {},
    data() {
      return {
        title: 'Main wrapper'
      }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
      console.log('Hello i am alive!')
    }
  }
</script>

<style>
  .v-main-wrapper {
    max-width: 900px;
    margin: 0 auto;
  }
</style>