<template>
  <section>
    <div class="mx-20 flex mt-20 flex-row flex-wrap xs:!mx-10 xs:!mt-10 sm:!mx-10">
      <div class="wishlist">
        <h1 class="xs:!text-[16px]">Order List</h1>
        <div class="product product_1098 xs:!py-[6px] xs:!px-[15px] xs:!h-[40px]">
          <h5>Product</h5>
          <h5>Name</h5>
          <h5>Price</h5>
          <h5>Quantity</h5>
        </div>
        <div v-for="(product,index) in cart_items" :key="index" class="product_1 product_1098 xs:!h-[80px]">
          <div class="product_img xs:!w-[15%]">
            <img :src="product.thumbnail" class="xs:!w-[40px] xs:!h-[40px] xs:!ml-[0px]" alt="">
          </div>
          <div class="product_name xs:!w-[25%]">
            <p class="xs:!text-[12px]">{{product.name}}</p>
          </div>
          <div class="product_price xs:!w-[20%]">
            <p class="xs:!text-[12px]">{{product.price_vat}} SAR</p>
          </div>
          <div class="product_quality xs:!w-[23%]">
            <p class="xs:!text-[12px]">{{product.quantity}}</p>
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
