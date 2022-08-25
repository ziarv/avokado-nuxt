<template>
  <section>
    <div class="mx-20 flex flex-row flex-wrap xs:!mx-10 sm:!mx-10">
      <div class="promo_code">
        <h1 class="xs:!text-[16px] xs:!mb-0">Promo code</h1>
        <div class="promo_code_input promo_code_input_098">
          <input
            v-model="promoCode"
            type="text" name="promocode" placeholder="Enter Code"
            class="bg-[#ECECEC] py-[16px] rounded-md text=[#848484] placeholder:text=[#848484] px-[22px] outline-none my-4 xs:!my-1.5 xs:!h-[40px] xs:!px-[12px] xs:!py-[5px] xs:!text-[12px]">
          <button id="side_bar_promo_none" class="xs:!w-[45px] xs:!h-[45px]" @click="applyPromoCode">
            <i v-if="coupon_code" class="fa-solid fa-times"></i>
            <i v-else class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "PromoCode",
  data() {
    return {
      promoCode: null
    }
  },
  computed: {
    couponResponse() {
      return this.$store.state.cart.coupon;
    },
    coupon_code() {
      return this.$store.state.cart.cart_data.coupon_code;
    },
  },
  watch: {
    coupon_code(code) {
      this.promoCode = code;
    }
  },
  mounted() {
    this.promoCode = this.coupon_code;
  },
  methods: {
    ...mapActions('cart', ['applyCoupon', 'getCartAction']),
    async applyPromoCode() {
      await this.applyCoupon(this.promoCode === this.coupon_code ? "" : this.promoCode);
      if (!this.couponResponse || !this.couponResponse.data.status || this.couponResponse.data.status.toString() !== "200") {
        alert('Invalid Coupon')
        return;
      }
      this.getCartAction();
    }
  }
}
</script>

<style scoped>

</style>
