<template>
  <div>
    <cart-summary></cart-summary>
    <section>
      <div class="mx-20 sm:!mx-10 flex mt-20 sm:!mt-10 flex-row flex-wrap sm:!mx-5">
        <div class="wishlist max-h-[500px] overflow-x-hidden overflow-y-scroll p-2">
          <h1 class="sm:!text-[22px]">{{ $t("cart.my_cart") }}</h1>
          <div class="product sm:!py-[6px] sm:!px-[15px] sm:!h-[40px]">
            <h5>{{ $t("cart.product.product") }}</h5>
            <h5>{{ $t("cart.product.name") }}</h5>
            <h5>{{ $t("cart.product.price") }}</h5>
            <h5>{{ $t("cart.product.quantity") }}</h5>
            <h5>{{ $t("cart.product.remove") }}</h5>
          </div>
          <product-cart v-for="(product,index) in cart_items" :key="index" :product="product"></product-cart>
        </div>
        <div class="continue_shopping">
          <nuxt-link :to="localePath(`/`)" class="sm:!text-[14px]">
            <img src="@/assets/img/Vector_2.svg" class="sm:!w-[14px] sm:!h-[14px]" alt="">
            {{ $t("continue_shopping") }}
          </nuxt-link>
          <button
            class="px-[45px] rounded-full text-[#FFFFFF] mt-2 mb-20 sm:!mb-0 text-base py-[8px] bg-[#7CB118] shadow-2xl sm:!pt-[3px] sm:!pb-[3px] sm:!pl-[25px] sm:!pr-[25px] sm:!text-[10px] sm:!h-[30px]"
            @click="goToCheckout">
            {{ $t("checkout") }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import ProductCart from "~/components/cart/ProductCart";
import CartSummary from "~/components/cart/CartSummary";


export default {
  name: "CartPage",
  components: {ProductCart, CartSummary},
  computed: {
    cart_items() {
      return this.$store.state.cart.cart_items;
    },
    cart_data() {
      return this.$store.state.cart.cart_data;
    },
    minimum_order_amount() {
      return this.$store.state.cart.minOrderAmount;
    },
    customer() {
      return this.$store.state.local.customer;
    }
  },
  async mounted() {
    await this.getMinimumOrderAmount();
  },
  methods: {
    ...mapActions('cart', ['getCartAction', 'getMinimumOrderAmount']),
    goToCheckout() {
      if (this.customer.customerId) {
        if (this.cart_data.sub_total < this.minimum_order_amount) {
          this.$toast.warning(this.$t("cart.minimum_order_amount_is")+ " " + this.minimum_order_amount +" "+ this.$t("currency_code"));
          return;
        }
        this.$router.push({
          path: this.localePath(`/checkout`)
        });
      } else {
        this.$router.push({
          path: this.localePath(`/login`)
        });
      }
    },
  }
}
</script>

<style scoped>
a.disabled {
  pointer-events: none;
  cursor: not-allowed;
}
</style>
