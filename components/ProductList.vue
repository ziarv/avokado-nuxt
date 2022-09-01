<template>
  <div
    v-if="product && product.id"
    class="main_card  xs:!pt-[10px]   xs:!h-[9m0px] xs:!pt[m10px] xs:!pl-1m0px] xs:!h-[190px] sm:!pt-[10px] sm:!pl-[10px] sm:!h-[190px]"
    :class="{'swiper-slide':isInSlider}"
  >
<!--    <div class="Vectorsvg">-->
<!--      <img-->
<!--src="@/assets/img/Vector.svg" alt=""-->
<!--           class="xs:!w-[14px] xs:!h-[12px] xs:!mr-[8px] sm:!w-[14px] sm:!h-[12px] sm:!mr-[8px]">-->
<!--    </div>-->
    <div class="img-card xs:!pr-[10px mxs:!pr-[10px] sm:!pr-[10px]">
      <nuxt-link   :to="localePath(`/product/${product.id}`)">
        <img
          :src="product.images.thumbnail"
          class="prodImage xs:!w-[87px] xs:!h-[87px] sm:!w-[87px mxs:!h-[87px] sm:!w-[87px] sm:!h-[87px]"
          alt="">
      </nuxt-link>
    </div>
    <span class="xs:!text-[8px mxs:!text-[8px] sm:!text-[8px]">
      {{ product.category_name }}
    </span>
    <p class="xs:!text-[10px] xs:!text-[10px] sm:!text-[12px]">
      <nuxt-link :to="localePath(`/product/${product.id}`)">
        {{ product.name }}
      </nuxt-link>
    </p>
    <div class="star">
      <p class="m-0 p-0">{{ product.avokadoAttributes.avokado_item_unit }}</p>
<!--      <img-->
<!--        v-for="index in 4" :key="index" src="@/assets/img/star_fill.svg"-->
<!--        class="xs:!w-[11px] xs:!h-[11px] sm:!w-[11px] sm:!h-[11px]" alt="">-->
<!--      <img src="@/assets/img/star_blank.svg" class="xs:!w-[11px] xs:!h-[11px] sm:!w-[11px] sm:!h-[11px]" alt="">-->
<!--      <span class="xs:!text-[8px mxs:!text-[8px] sm:!text-[8px]">(4)</span>-->
    </div>
    <p class="xs:!text-[12px xs:!text-[12px] sm:!text-[12px sm:!text-[14px] sm:!text-[14px]">
      {{ product.price_tax_inc }}
      {{ product.currency_symbol.toUpperCase() }}
    </p>
    <div class="buy_now_1 swiper-no-swiping">
      <button
        :class="{active: qty > 0}"
        class="minus swiper-no-swiping xs:!w-[30px] xs:!h-[30px] xs:!text-[20pxsmxs:!w-[30xm] xs:!h-[30xm] xs:!text-[20px] sm:!w-[30px] sm:!h-[30px] sm:!text-[20px]"
        @click="remove">
        <i class="fa-solid fa-minus swiper-no-swiping"></i>
      </button>
      <input
        v-model="qty"
        :class="{active: qty > 0}"
        class="input_hide swiper-no-swiping xs:!w-[30px] xs:!h-[30px] xs:!text-[20pxsmxs:!w-[30xm] xs:!h-[30xm] xs:!text-[20px] sm:!w-[30px] sm:!h-[30px] sm:!text-[20px]"
        type="number">
      <button

        class="plus click swiper-no-swiping xs:!w-[30px] xs:!h-[30px] xs:!text-[20pxsmxs:!w-[30xm] xs:!h-[30xm] xs:!text-[20px] sm:!w-[30px] sm:!h-[30px] sm:!text-[20px]"
        @click="add">
        <i class="fa-solid fa-plus swiper-no-swiping"></i>
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "ProductList",
  props: {
    isInSlider: {
      type: Boolean,
      default: false,
    },
    product: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      qty: 0
    }
  },
  computed: {
    cart_items() {
      return this.$store.state.cart.cart_items;
    },
    qty_in_cart() {
      if (this.cart_items === undefined || this.cart_items.length <= 0) {
        return 0;
      }
      const product = this.cart_items.filter(
        item => item.product_id.toString() === this.product.id.toString()
      )[0];
      return product ? product.quantity : 0;
    }
  },
  mounted() {
    this.qty = this.qty_in_cart;
  },
  methods: {
    ...mapActions('cart', ['addCartAction']),
    add() {
      this.addCartAction({product_id: this.product.id, qty: 1})
        .then(() => {
          this.qty++;
        });
    },
    async remove() {
      if (this.qty <= 0) {
        return;
      }
      await this.addCartAction({product_id: this.product.id, qty: -1})
        .then(() => {
          this.qty--;
        });
    }
  }
}
</script>

<style scoped>

</style>
