<template>
  <div class="message">
    <h3>{{message}}</h3>
    <img src="./titile-tag.png" alt />
  </div>
</template>

<script>
export default {
  name: "t-message",
  props: {
    message: {
      type: String,
      default: ''
    },
  },
}
</script>

<style lang="scss" scoped>
.message {
  img {
    width: 100%;
  }
}
</style>