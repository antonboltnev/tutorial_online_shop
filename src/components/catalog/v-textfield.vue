<template>
  <div class='v-textfield'>
    <label>{{label}}
      <input type="text"
             :value="value"
             @input="input"
      >
    </label>
  </div>
</template>

<script>
  export default {
    name: "v-textfield",
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      label: {
        type: String,
        default: ''
      }
    },
    data() {
      return {}
    },
    computed: {},
    methods: {
      input(e) {
        let value = e.target.value;
        this.$emit('input', value)
      }
    }
  }
</script>

<style scoped>

</style>