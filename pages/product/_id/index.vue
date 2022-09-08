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
    const id = isNaN(this.$route.params.id) ? this.$route.query.pid : this.$route.params.id
    this.$router.push({
      path: this.localePath(`/product/${id}/slug?pid=${id}`)
    })
  },
}
</script>

<style scoped>

</style>
