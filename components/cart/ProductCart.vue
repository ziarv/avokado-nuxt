<template>
  <div class="product_1 sm:!h-[80px] overflow-hidden">
    <div class="product_img sm:!w-[15%]">
      <img :src="product.thumbnail" class="sm:!w-[40px] sm:!h-[40px] sm:!ml-[0px]" alt="">
    </div>
    <div class="product_name sm:!w-[25%]">
      <p v-if="$i18n.locale === 'ar'" class="sm:!text-[12px]">{{ product.name_ar }}</p>
      <p v-else  class="sm:!text-[12px]">{{ product.name }}</p>
    </div>
    <div class="product_price sm:!w-[20%]">
      <p class="sm:!text-[12px]">{{ product.price_vat }} {{ $t("currency_code") }}</p>
    </div>
    <div class="product_btn sm:!w-[23%]">
      <button class="add_product addShow_product sm:!text-[12px] sm:!py-[0px] sm:!px-[5px]" style="border-bottom-right-radius: 0 !important; " @click="remove"><i
        class="fa-solid fa-minus"></i></button>
      <input v-model="qty" type="text" class="add_product addShow_product sm:!w-[28px] sm:!w-[28px] sm:!rounded-none sm:!rounded-none">
      <button class="add_product addShow_product sm:!text-[12px] sm:!py-[0px] sm:!px-[5px]" style="border-top-left-radius: 0 !important; " @click="add"><i
        class="fa-solid fa-plus"></i></button>
    </div>
    <div class="product_btn_remove sm:!w-[10%] sm:!hidden sm:!hidden">
      <button @click="removeItem()"><i class="fa-solid fa-xmark sm:!text-[14px]"></i></button>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "ProductCart",
  props: {
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
  mounted() {
    this.qty = this.product.quantity
  },
  methods: {
    ...mapActions('cart', ['removeCartProduct', 'addCartAction']),
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
    },
    removeItem() {
      this.removeCartProduct({product_id: this.product.id});
    }
  }
}
</script>

<style scoped>

</style>
