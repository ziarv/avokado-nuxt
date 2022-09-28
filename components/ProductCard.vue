<template>
  <div v-if="product && product.id" class="cards swiper-slide sm:!h-[150px] sm:!h-[150px]">
    <div class="cardse">
      <div>
        <nuxt-link :to="urlProduct()">
          <img
            :src="product.images.thumbnail"
            class="sm:!w-[150px] sm:!h-[120px] sm:!w-[150px] sm:!h-[120px]" alt="">
        </nuxt-link>
      </div>
      <div class="flex flex-col flex-1 justify-between">
        <div>
          <p class="text-[20px] sm:!text-[14px] font-bold">
            <nuxt-link :to="urlProduct()">
              {{ product.name }}
            </nuxt-link>
          </p>
          <p class="text-[18px] sm:!text-[12px]">
            <span v-if="product.priceDiscountedIncTax">
              <span class="line-through">{{ product.price_tax_inc }}   </span> - {{ product.priceDiscountedIncTax }} {{ $t("currency_code") }}
            </span>
            <span v-else>
               {{ product.price_tax_inc }}
        {{ $t("currency_code") }}
            </span>
          </p>
        </div>
        <div class="buy_now">
          <nuxt-link
            :to="urlProduct()">
            {{ $t("buy_now") }}
            <span class="sm:!ml-[3px]">
          <img src="@/assets/img/li_arrow-right.svg" alt="">
        </span>
          </nuxt-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      default: () => {
      }
    }
  },
  methods: {
    urlProduct() {
      return this.localePath(`/product/${this.product.id}/${this.product.products_slug}?pid=${this.product.id}`);
    }
  }
}
</script>

<style scoped>

</style>
