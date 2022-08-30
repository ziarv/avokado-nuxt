<template>
  <div>
    <cart-summary></cart-summary>
    <section>
      <div class="mx-20 xs:!mx-10 flex mt-20 xs:!mt-10 flex-row flex-wrap sm:!mx-5">
        <div class="wishlist max-h-[500px] overflow-x-hidden overflow-y-scroll" >
          <h1 class="xs:!text-[22px]">{{ $t("cart.my_cart") }}</h1>
          <div class="product xs:!py-[6px] xs:!px-[15px] xs:!h-[40px]">
            <h5>{{ $t("cart.product.product") }}</h5>
            <h5>{{ $t("cart.product.name") }}</h5>
            <h5>{{ $t("cart.product.price") }}</h5>
            <h5>{{ $t("cart.product.quantity") }}</h5>
            <h5>{{ $t("cart.product.remove") }}</h5>
          </div>
          <product-cart v-for="(product,index) in cart_items" :key="index" :product="product"></product-cart>
        </div>
        <div class="continue_shopping">

          <nuxt-link :to="localePath(`/`)" class="xs:!text-[14px]">
            <img src="@/assets/img/Vector_2.svg" class="xs:!w-[14px] xs:!h-[14px]" alt="">
            {{ $t("continue_shopping") }}
          </nuxt-link>
          <nuxt-link
            v-if="customer.customerId"
            :to="localePath(`/checkout`)"
            :class="{disabled: cart_data.sub_total < minimum_order_amount}"
            class="px-[45px] rounded-full text-[#FFFFFF] mt-2 mb-20 xs:!mb-0 text-base py-[8px] bg-[#7CB118] shadow-2xl xs:!pt-[3px] xs:!pb-[3px] xs:!pl-[25px] xs:!pr-[25px] xs:!text-[10px] xs:!h-[30px]">
            {{ $t("checkout") }}
          </nuxt-link>
          <nuxt-link
            v-else
            :to="localePath(`/checkout`)"
            class="px-[45px] rounded-full text-[#FFFFFF] mt-2 mb-20 xs:!mb-0 text-base py-[8px] bg-[#7CB118] shadow-2xl xs:!pt-[3px] xs:!pb-[3px] xs:!pl-[25px] xs:!pr-[25px] xs:!text-[10px] xs:!h-[30px]">
            {{ $t("login_to_checkout") }}
          </nuxt-link>

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
    ...mapActions('cart', ['getCartAction', 'getMinimumOrderAmount'])
  }
}
</script>

<style scoped>
a.disabled {
  pointer-events: none;
  cursor: not-allowed;
}
</style>
