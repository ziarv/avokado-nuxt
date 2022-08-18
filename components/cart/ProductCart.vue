<template>
  <div class="product_1 xs:!h-[80px]">
    <div class="product_img xs:!w-[15%]">
      <img src="@/assets/img/Packages.png" class="xs:!w-[40px] xs:!h-[40px] xs:!ml-[0px]" alt="">
    </div>
    <div class="product_name xs:!w-[25%]">
      <p class="xs:!text-[12px]">Apple</p>
    </div>
    <div class="product_price xs:!w-[20%]">
      <p class="xs:!text-[12px]">100 SAR</p>
    </div>
    <div class="product_btn xs:!w-[23%]">
      <button class="add_product addShow_product xs:!text-[12px] xs:!py-[0px] xs:!px-[5px]" @click="remove"><i
        class="fa-solid fa-minus"></i></button>
      <input v-model="qty" type="text"  class="add_product addShow_product xs:!w-[25px]">
      <button class="add_product addShow_product xs:!text-[12px] xs:!py-[0px] xs:!px-[5px]"  @click="add"><i
        class="fa-solid fa-plus"></i></button>
    </div>
    <div class="product_btn_remove xs:!w-[10%]">
      <button><i class="fa-solid fa-xmark xs:!text-[14px]"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCart",
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
