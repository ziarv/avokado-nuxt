<template>
  <div v-if="product && product.id" class="cards swiper-slide xs:!h-[150px] sm:!h-[150px]">
    <div class="cardse">
      <nuxt-link :to="urlProduct()">
        <img
          :src="product.images.thumbnail"
          class="xs:!w-[150px] xs:!h-[120px] sm:!w-[150px] sm:!h-[120px]" alt="">
      </nuxt-link>
      <p class="xs:!text-[14px mxs:!text-[14px] xs:!pt-[20px]">
        <nuxt-link :to="urlProduct()">
          {{product.name}}
        </nuxt-link>
      </p>
    </div>
    <div class="buy_now">
      <nuxt-link
        :to="urlProduct()"
        class="xs:!text-[10px mxs:!text-[10px] xs:!pt-[0px] xs:!pb-[0px] xs:!pl-[3px] xs:!pr-[0px] xs:!w-[60px] xs:!h-[20px] sm:!text-[12px] sm:!pt-[0px] sm:!pb-[0px] sm:!pl-[3px] sm:!pr-[0px] sm:!w-[60px] sm:!h-[20px]">
        {{$t("buy_now")}}
        <span class="xs:!ml-[3px]">
          <img src="@/assets/img/li_arrow-right.svg" class="xs:!w-[8px] xs:!h-[7px] sm:!w-[8px] sm:!h-[7px]" alt="">
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  methods:{
    urlProduct() {
      return this.localePath(`/product/${this.product.id}/${this.product.products_slug}?pid=${this.product.id}`);
    }
  }
}
</script>

<style scoped>

</style>
