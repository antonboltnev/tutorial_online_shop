<template>
  <div class='v-catalog'>
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="v-catalog__link_to_cart">Cart: {{CART.length}}</div>
    </router-link>
    <h1>Catalog</h1>
    <v-select
        :selected="selected"
        :options="categories"
        @select="sortByCategories"
        :isExpanded="IS_DESKTOP"
    />
    <div class="v-catalog__list">
      <v-catalog-item
          v-for="product in filteredProducts"
          :key="product.article"
          :product_data="product"
          @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
  import vCatalogItem from './v-catalog-item'
  import {mapActions, mapGetters} from 'vuex'
  import vSelect from '../v-select'

  export default {
    name: "v-catalog",
    components: {
      vCatalogItem,
      vSelect
    },
    props: {},
    data() {
      return {
        categories: [
          {name: 'Все', value: 'ALL'},
          {name: 'Мужские', value: 'м'},
          {name: 'Женские', value: 'ж'},
        ],
        selected: 'Все',
        sortedProducts: []
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART',
        'IS_MOBILE',
        'IS_DESKTOP'
      ]),
      filteredProducts() {
        if (this.sortedProducts.length) {
          return this.sortedProducts
        } else {
          return this.PRODUCTS
        }
      },
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      sortByCategories(category) {
        this.sortedProducts = [];
        let vm = this;
        this.PRODUCTS.map(function (item) {
          if (item.category === category.name) {
            vm.sortedProducts.push(item);
          }
        })
        this.selected = category.name
      },
      addToCart(data) {
        this.ADD_TO_CART(data)
      }
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
      .then((response) => {
        if (response.data) {
          console.log('Data arrived!')
        }
      })
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
    &__link_to_cart {
      position: fixed;
      top: 10px;
      right: 10px;
      padding: $padding*2;
      border: solid 1px #aeaeae;
      background: #ffffff;
    }
  }

  .filters {
    display: flex;
    align-items: center;
  }


  /* Styles for range slider */
  .range-slider {
    width: 200px;
    margin: auto 16px;
    text-align: center;
    position: relative;
  }

  .slider_inputs__wrap {
    display: flex;
    align-items: center;
  }
  .range-slider svg,
  .range-slider input[type=range] {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  input[type=range] {
    -webkit-appearance: none;
    width: 100%;
  }
  input[type=range]:focus {
    outline: none;
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #e7e7e7;
  }
  input[type=range]:focus::-ms-fill-lower {
    background: #ffffff;
  }
  input[type=range]:focus::-ms-fill-upper {
    background: #ffffff;
  }
  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    animate: 0.2s;
    background: #e7e7e7;
    border-radius: 1px;
    box-shadow: none;
    border: 0;
  }
  input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: -3px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
    border: 1px solid #ffffff;
    height: 22px;
    width: 22px;
    border-radius: 25px;
    background: #e7e7e7;
    cursor: pointer;
    -webkit-appearance: none;
    outline: none;
    margin-top: -7px;
  }
</style>