<template>
  <div class="v-main-wrapper">
    <h1>{{catalog}}</h1>
    <p>{{summa}}</p>
    <button @click="increment">Press</button>
  </div>
</template>

<script>
  export default {
    name: 'v-main-wrapper', //vMainWrapper
    props: {},
    data() {
      return {
        title: 'Catalog',
        a: 1,
        b: 3
      }
    },
    computed: {
      catalog() {
        return this.title + '!'
      },
      summa() {
        return (this.a + this.b) + 'P'
      }
    },
    methods: {
      increment() {
        this.b++
      }
    },
    watch: {
      summa() {
        console.log(this.summa)
      },
      b() {
        if (this.b > 10) {
          console.log(this.b)
        }
      }
    },
    mounted() {
      console.log('Hello i am alive!')
    },
  }
</script>

<style>
  .v-main-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
  }
</style>

