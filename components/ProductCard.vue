<template>
  <div v-if="product && product.id" class="cards swiper-slide sm:!h-[150px] sm:!h-[150px]">
    <div class="cardse">
      <nuxt-link :to="urlProduct()">
        <img
          :src="product.images.thumbnail"
          class="sm:!w-[150px] sm:!h-[120px] sm:!w-[150px] sm:!h-[120px]" alt="">
      </nuxt-link>
      <p class="sm:!text-[14px msm:!text-[14px] sm:!pt-[20px]">
        <nuxt-link :to="urlProduct()">
          {{product.name}}
        </nuxt-link>
      </p>
    </div>
    <div class="buy_now">
      <nuxt-link
        :to="urlProduct()"
        class="sm:!text-[10px msm:!text-[10px] sm:!pt-[0px] sm:!pb-[0px] sm:!pl-[3px] sm:!pr-[0px] sm:!w-[60px] sm:!h-[20px] sm:!text-[12px] sm:!pt-[0px] sm:!pb-[0px] sm:!pl-[3px] sm:!pr-[0px] sm:!w-[60px] sm:!h-[20px]">
        {{$t("buy_now")}}
        <span class="sm:!ml-[3px]">
          <img src="@/assets/img/li_arrow-right.svg" class="sm:!w-[8px] sm:!h-[7px] sm:!w-[8px] sm:!h-[7px]" alt="">
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
