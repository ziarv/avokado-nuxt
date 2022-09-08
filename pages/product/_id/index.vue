<template>
  <div>

  </div>
</template>

<script>
export default {
  name: "ShowProduct",
  data() {
    return {
      qty: 0
    }
  },
  mounted() {
    this.$router.push({
      path: this.localePath(`/product/${this.$route.params.id}/slug?pid=${this.$route.params.id}`)
    })
  },
}
</script>

<style scoped>

</style>
