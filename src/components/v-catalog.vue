<template>
  <div class='v-catalog'>
    <h1>Catalog</h1>
    <div class="v-catalog__list">
      <v-catalog-item
          v-for="product in products"
          :key="product.article"
          :product_data="product"
          @sendDataToParent="showChildArticleInConsole"
      />
    </div>
  </div>
</template>

<script>
  import vCatalogItem from './v-catalog-item'

  export default {
    name: "v-catalog",
    components: {
      vCatalogItem
    },
    props: {},
    data() {
      return {
        products: [
          {
            image: "1.jpg",
            name: "T-shirt 1",
            price: 100,
            article: "T1",
            available: true
          },
          {
            image: "2.jpg",
            name: "T-shirt 2",
            price: 150,
            article: "T2",
            available: true
          },
          {
            image: "3.jpg",
            name: "T-shirt 3",
            price: 200,
            article: "T3",
            available: false
          },
          {
            image: "4.jpg",
            name: "T-shirt 4",
            price: 300,
            article: "T4",
            available: true
          },
          {
            image: "5.jpg",
            name: "T-shirt 5",
            price: 500,
            article: "T5",
            available: false
          },
          {
            image: "6.jpeg",
            name: "T-shirt 6",
            price: 700,
            article: "T6",
            available: true
          }
        ]
      }
    },
    computed: {},
    methods: {
      showChildArticleInConsole(data) {
        console.log(data)
      }
    }
  }
</script>

<style lang="scss">
  .v-catalog {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>