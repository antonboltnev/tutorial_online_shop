module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/settings.scss";`
      }
    }
  }
};