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
      path: this.localePath(`/category/${this.$route.params.id}/slug?cid=${this.$route.params.id}`)
    })
  },
}
</script>

<style scoped>

</style>
