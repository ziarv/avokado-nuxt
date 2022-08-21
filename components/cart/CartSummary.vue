<template>
  <section>
    <div class="mx-20 xs:!mx-10 flex sm:!mx-5">
      <div class="summary">
        <h1 class="xs:!text-[22px] xs:!mt-[30px]">Summary</h1>
        <div class="summary_div">
          <div class="summary_heading">
            <h6>Subtotal</h6>
            <h6>SAR {{cart_data.sub_total}}</h6>
  menu        </div>
          <div class="summary_heading">
            <h6>Delivery charges</h6>
            <h6>Calculated at checkout</h6>
          </div>
          <div class="summary_heading">
            <h6>VAT(15%)</h6>
            <h6>SAR {{cart_data.tax_amount_without_shipping}}</h6>
          </div>
          <div class="summary_heading">
            <h4 class="xs:!text-[16px]">Total</h4>
            <h5 class="xs:!text-[16px]">SAR {{ cart_data.grand_total }}</h5>
          </div>
          <div class="summary_coprright">
            <p><img src="@/assets/img/Info.svg" alt="">
              Minimum order amount is {{minimum_order_amount}} SAR
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
