<template>
  <section>
    <div class="mx-20 flex sm:!mx-10 sm:!mx-10">
      <div class="summary">
        <h1 class="sm:!text-[22px] sm:!mt-[30px]">{{ $t('pages.checkout.summary') }}</h1>
        <div class="summary_div">
          <div v-for="(item, index) in cart_data.summary" :key="index" class="summary_heading">
            <h6>{{ item.label }}</h6>
            <h6>{{ item.value }} SAR</h6>
          </div>
        </div>
        <div class="btn_place flex justify-end my-8">
          <nuxt-link
            :to="localePath(`/`)"
            class="px-[45px] mr-2 rounded-full text-[#FFFFFF] mt-2 mb-20 sm:!mb-0 sm:!mb-0 text-base py-[8px] bg-[#7CB118] shadow-2xl sm:!pt-[3px] sm:!pb-[3px] sm:!pl-[25px] sm:!pr-[25px] sm:!text-[10px] sm:!h-[30px]">
            {{ $t('pages.checkout.home') }}
          </nuxt-link>
          <button
            class="px-[45px] rounded-full text-[#FFFFFF] mt-2 mb-20 sm:!mb-0 sm:!mb-0 text-base py-[8px] bg-[#7CB118] shadow-2xl sm:!pt-[3px] sm:!pb-[3px] sm:!pl-[25px] sm:!pr-[25px] sm:!text-[10px] sm:!h-[30px]"
            @click="$emit('placeOrder')">
            {{ $t('pages.checkout.place_order') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CheckoutSummary",
  computed: {
    cart_items() {
      return this.$store.state.cart.cart_items;
    },
    cart_data() {
      return this.$store.state.cart.cart_data;
    },
    min_order_amount() {
      return this.$store.state.cart.minOrderAmount;
    },
  },
}
</script>

<style scoped>

</style>
