<template>
  <div class="product_1 xs:!h-[80px]">
    <div class="product_img xs:!w-[15%]">
      <img :src="product.thumbnail" class="xs:!w-[40px] xs:!h-[40px] xs:!ml-[0px]" alt="">
    </div>
    <div class="product_name xs:!w-[25%]">
      <p v-if="$i18n.locale === 'ar'" class="xs:!text-[12px]">{{ product.name_ar }}</p>
      <p v-else  class="xs:!text-[12px]">{{ product.name }}</p>
    </div>
    <div class="product_price xs:!w-[20%]">
      <p class="xs:!text-[12px]">{{ product.price_vat }} {{ $t("currency_code") }}</p>
    </div>
    <div class="product_btn xs:!w-[23%]">
      <button class="add_product addShow_product xs:!text-[12px] xs:!py-[0px] xs:!px-[5px]" @click="remove"><i
        class="fa-solid fa-minus"></i></button>
      <input v-model="qty" type="text" class="add_product addShow_product xs:!w-[28px] sm:!w-[28px] xs:!rounded-none sm:!rounded-none">
      <button class="add_product addShow_product xs:!text-[12px] xs:!py-[0px] xs:!px-[5px]" @click="add"><i
        class="fa-solid fa-plus"></i></button>
    </div>
    <div class="product_btn_remove xs:!w-[10%] xs:!hidden sm:!hidden">
      <button @click="removeItem()"><i class="fa-solid fa-xmark xs:!text-[14px]"></i></button>
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
