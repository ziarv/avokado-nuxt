<template>
  <div
    v-if="product && product.id"
    class="main_card sm:!pt-[10px] sm:!pt[m10px] sm:!pl-1m0px] sm:!pt-[10px] sm:!pl-[10px] relative"
    :class="{'swiper-slide':isInSlider}"
  >
    <div  v-if="product.priceDiscountedIncTax" class="discount"> {{ product.discountPercentage }} </div>
    <div class="img-card sm:!pr-[10px msm:!pr-[10px] sm:!pr-[10px] m-auto">
      <nuxt-link :to="urlProduct()">
        <img
          :src="product.images.thumbnail"
          class="prodImage sm:!w-[87px] sm:!h-[87px] sm:!w-[87px msm:!h-[87px] sm:!w-[87px] sm:!h-[87px]"
          alt="">
      </nuxt-link>
    </div>

    <p class="text-[#ADADAD] font-[14px] align-baseline">
      {{ product.category_name }}
    </p>

    <p class="name sm:!text-[12px]">
      <nuxt-link :to="urlProduct()">
        {{ product.name }}
      </nuxt-link>
    </p>
    <p class="m-0 p-0 text-[14px]">
      {{ product.avokadoAttributes.avokado_item_unit }}
    </p>
    <p
      v-if="product.priceDiscountedIncTax"
      class="sm:!text-[12px] price sm:!text-[12px] sm:!text-[12px sm:!text-[14px] sm:!text-[14px]">
      <span class="line-through">{{ product.price_tax_inc }}   </span> - {{ product.priceDiscountedIncTax }}
      {{ $t("currency_code") }}
    </p>
      <p v-else class="sm:!text-[12px] price sm:!text-[12px] sm:!text-[12px sm:!text-[14px] sm:!text-[14px]">
        {{ product.price_tax_inc }}
        {{ $t("currency_code") }}
    </p>
    <div class="counter swiper-no-swiping">
      <button
        v-if=" qty > 0"
        @click="remove">
        <i class="fa-solid fa-minus swiper-no-swiping"></i>
      </button>
      <input
        v-if=" qty > 0"
        v-model="qty"
        type="number">
      <button
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
    urlProduct() {
      return this.localePath(`/product/${this.product.id}/${this.product.products_slug}?pid=${this.product.id}`);
    },
    add() {
      if (this.qty_in_cart.toString() === this.product.availableQuantity.toString()) {
        this.$toast.warning(this.$t("messages.quantity_not_available"));
        return false;
      }
      if (parseInt(this.qty_in_cart) >= parseInt(this.product.max_allowed_qty)) {
        this.$toast.warning("Maximum Allowed Quantity for purchase is " + this.product.max_allowed_qty);
        return false;
      }
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
