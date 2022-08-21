<template>
  <div
    v-if="product && product.id"
class="main_card  xs:!pt-[10px] xs:!pl-[10px] xs:!h-[9m0px] xs:!pt[m10px] xs:!pl-1m0px] xs:!h-[190px] sm:!pt-[10px] sm:!pl-[10px] sm:!h-[190px]"
  :class="{'swiper-slide':isInSlider}"
  >
    <img
      src="@/assets/img/Vector.svg" alt=""
      class="xs:!w-[14px] xs:!h-[12px] xs:!mr-[8px] sm:!w-[14px mxs:!h-[2mpx] xs:!mr-[8px] sm:!w-[14px] sm:!h-[12px] sm:!mr-[8px]">
    <div class="img-card xs:!pr-[10px mxs:!pr-[10px] sm:!pr-[10px]">
      <nuxt-link :to="'/product/'+product.id">
        <img
          :src="product.images.thumbnail"
          class="xs:!w-[87px] xs:!h-[87px] sm:!w-[87px mxs:!h-[87px] sm:!w-[87px] sm:!h-[87px]"
          alt="">
      </nuxt-link>
    </div>
    <span class="xs:!text-[8px mxs:!text-[8px] sm:!text-[8px]">
      {{product.category_name}}
    </span>
    <p class="xs:!text-[10px] xs:!text-[10px] sm:!text-[12px]">
      <nuxt-link :to="'/product/'+product.id">
        {{product.name}}
      </nuxt-link>
    </p>
    <div class="star">
      <img
        v-for="index in 4" :key="index" src="@/assets/img/star_fill.svg"
        class="xs:!w-[11px] xs:!h-[11px] sm:!w-[11px] sm:!h-[11px]" alt="">
      <img src="@/assets/img/star_blank.svg" class="xs:!w-[11px] xs:!h-[11px] sm:!w-[11px] sm:!h-[11px]" alt="">
      <span class="xs:!text-[8px mxs:!text-[8px] sm:!text-[8px]">(4)</span>
    </div>
    <p class="xs:!text-[12px xs:!text-[12px] sm:!text-[12px sm:!text-[14px] sm:!text-[14px]">
      {{ product.price_tax_inc }}
      {{ product.currency_symbol.toUpperCase() }}
    </p>
    <div class="buy_now_1">
      <button
        :class="{active: qty > 0}"
        class="minus xs:!w-[30px] xs:!h-[30px] xs:!text-[20pxsmxs:!w-[30xm] xs:!h-[30xm] xs:!text-[20px] sm:!w-[30px] sm:!h-[30px] sm:!text-[20px]"
        @click="remove">
        <i class="fa-solid fa-minus"></i>
      </button>
      <input
        v-model="qty"
        :class="{active: qty > 0}"
        class="input_hide xs:!w-[30px] xs:!h-[30px] xs:!text-[20pxsmxs:!w-[30xm] xs:!h-[30xm] xs:!text-[20px] sm:!w-[30px] sm:!h-[30px] sm:!text-[20px]"
        type="number">
      <button

        class="plus click xs:!w-[30px] xs:!h-[30px] xs:!text-[20pxsmxs:!w-[30xm] xs:!h-[30xm] xs:!text-[20px] sm:!w-[30px] sm:!h-[30px] sm:!text-[20px]"
        @click="add">
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props:{
    isInSlider:{
      type:Boolean,
      default: false,
    },
    product: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      qty: 0
    }
  },
  methods: {
    add() {
      this.qty++;
    },
    remove() {
      if (this.qty > 0) {
        this.qty--;
      }
    }
  }
}
</script>

<style scoped>

</style>
