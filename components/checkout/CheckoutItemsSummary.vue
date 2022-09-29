<template>
  <section>
    <div class="mx-20 sm:mx-10">
      <div class="wishlist max-h-[500px] overflow-x-hidden overflow-y-scroll">
        <h1 class="sm:!text-[16px]">{{ $t("pages.checkout.order_list") }}</h1>
        <div class="product product_1098 sm:!py-[6px] sm:!px-[15px] sm:!h-[40px]">
          <h5>{{ $t("pages.checkout.product") }}</h5>
          <h5>{{ $t("pages.checkout.name") }}</h5>
          <h5>{{ $t("pages.checkout.price") }}</h5>
          <h5>{{ $t("pages.checkout.quantity") }}</h5>
        </div>
        <div v-for="(product,index) in cart_items" :key="index" class="product_1 product_1098 sm:!h-[80px]">
          <div class="product_img sm:!w-[15%]">
            <img :src="product.thumbnail" class="sm:!w-[40px] sm:!h-[40px] sm:!ml-[0px]" alt="">
          </div>
          <div class="product_name sm:!w-[25%]">
            <p v-if="$i18n.locale === 'ar'" class="sm:!text-[12px]">{{product.name_ar}}</p>
            <p v-else class="sm:!text-[12px]">{{product.name}}</p>
          </div>
          <div class="product_price sm:!w-[20%]">
            <p class="sm:!text-[12px]">{{product.price_vat}} {{ $t("currency_code") }}</p>
          </div>
          <div class="product_quality sm:!w-[23%]">
            <p class="sm:!text-[12px]">{{product.quantity}}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CheckoutItemsSummary",
  computed: {
    cart_items() {
      return this.$store.state.cart.cart_items;
    },
    cart_data() {
      return this.$store.state.cart.cart_data;
    }
  },
}
</script>

<style scoped>

</style>
