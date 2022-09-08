<template>
  <div v-if="order &&  order.thanks" class="grid  text-center my-10">
    <h1 class="text-3xl mb-2">{{ order.thanks }}</h1>
    <img class="mx-auto mb-2" src="@/assets/img/thankyou.png" alt="thank_you">
    <h1 class="text-2xl "> {{ order.thanks_description }}</h1>
    <p>Order Number: {{ order.order_id }}.</p>
    <nuxt-link class="font-bold text-blue-800"  :to="localePath(`/`)" >Go to home</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "ThanksPage",
  computed: {
    order() {
      return this.$store.state.cart.order_save.order;
    }
  },
  mounted() {
    if (!this.order) {
      this.$router.push({
        path: this.localePath('/')
      })
    }
    setTimeout(() => {
      this.$store.commit('local/UPDATE_TMP_ORDER_ID', null);
      this.$store.commit('local/UPDATE_TMP_PAYMENT_METHOD', null);
      this.$store.commit('local/UPDATE_TMP_ORDER_SAVE_RESPONSE', null);
    }, 5000)
  }
}
</script>

<style scoped>

</style>
