<template>
  <section>
    <div class="mx-20 xs:!mx-10 flex sm:!mx-5">
      <div class="summary">
        <h1 class="xs:!text-[22px] xs:!mt-[30px]">{{ $t("cart.summary") }}</h1>
        <div class="summary_div">
          <div class="summary_heading">
            <h6>{{ $t("cart.subtotal") }}</h6>
            <h6>{{ $t("currency_code") }} {{cart_data.sub_total}}</h6>
           </div>
          <div class="summary_heading">
            <h6>{{ $t("cart.delivery_charges") }}</h6>
            <h6>{{ $t("cart.calculated_at_checkout") }}</h6>
          </div>
          <div class="summary_heading">
            <h6>{{ $t("cart.VAT") }} (15%)</h6>
            <h6>{{ $t("currency_code") }} {{cart_data.tax_amount_without_shipping}}</h6>
          </div>
          <div class="summary_heading">
            <h4 class="xs:!text-[16px]">{{ $t("cart.total") }}</h4>
            <h5 class="xs:!text-[16px]">{{ $t("currency_code") }} {{ cart_data.grand_total }}</h5>
          </div>
          <div class="summary_coprright">
            <p class="text-red-700">
              <img src="@/assets/img/Info.svg" alt="">
              {{ $t("cart.minimum_order_amount_is") }} {{minimum_order_amount}} {{ $t("currency_code") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "CartSummary",
  computed: {
    minimum_order_amount() {
      return this.$store.state.cart.minOrderAmount;
    },
    cart_data() {
      return this.$store.state.cart.cart_data;
    },
  }
}
</script>

<style scoped>

</style>
