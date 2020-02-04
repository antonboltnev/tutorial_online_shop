export default {
  SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
    state.searchValue = value;
  },
  SWITCH_MOBILE: (state) => {
    state.isMobile = true;
    state.isDesktop = false;
  },
  SWITCH_DESKTOP: (state) => {
    state.isMobile = false;
    state.isDesktop = true;
  },
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products;
  },
  SET_CART: (state, product) => {
    let isProductExists = false;
    if (state.cart.length) {
      state.cart.map(function (item) {
        if (item.article === product.article) {
          isProductExists = true;
          item.quantity++
        }
      })
      if (!isProductExists) {
        state.cart.push(product)
      }
    } else {
      state.cart.push(product)
    }
  },
  REMOVE_FROM_CART: (state, index) => {
    state.cart.splice(index, 1)
  },
  INCREMENT: (state, index) => {
    state.cart[index].quantity++
  },
  DECREMENT: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--
    }
  }
}
