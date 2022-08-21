<template>
  <div>
    <cart-summary></cart-summary>
    <section>
      <div class="mx-20 xs:!mx-10 flex mt-20 xs:!mt-10 flex-row flex-wrap sm:!mx-5">
        <div class="wishlist">
          <h1 class="xs:!text-[22px]">My Cart</h1>
          <div class="product xs:!py-[6px] xs:!px-[15px] xs:!h-[40px]">
            <h5>Product</h5>
            <h5>Name</h5>
            <h5>Price</h5>
            <h5>Cart</h5>
            <h5>Remove</h5>
          </div>
          <product-cart v-for="(product,index) in cart_items" :key="index" :product="product"></product-cart>
        </div>
        <div class="continue_shopping">
          <nuxt-link to="/" class="xs:!text-[14px]">
            <img src="@/assets/img/Vector_2.svg" class="xs:!w-[14px] xs:!h-[14px]" alt="">
            Continue Shopping
          </nuxt-link>
          <button
            class="px-[45px] rounded-full text-[#FFFFFF] mt-2 mb-20 xs:!mb-0 text-base py-[8px] bg-[#7CB118] shadow-2xl xs:!pt-[3px] xs:!pb-[3px] xs:!pl-[25px] xs:!pr-[25px] xs:!text-[10px] xs:!h-[30px]">
            Checkout
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import ProductCart from "~/components/cart/ProductCart";


export default {
  name: "CartPage",
  components: {ProductCart},
  computed: {
    cart_items() {
      return this.$store.state.cart.cart_items;
    },
    cart_data() {
      return this.$store.state.cart.cart_data;
    }
  },
 async mounted() {
   await this.getMinimumOrderAmount();
  },
  methods: {
    ...mapActions('cart', ['getCartAction','getMinimumOrderAmount'])
  }
}
</script>

<style scoped>

</style>
