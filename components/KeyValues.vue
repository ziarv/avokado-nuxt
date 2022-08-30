<template>
  <section class="mb-5">
    <div
      class="2xl:mx-20 2xl:flex 2xl:flex-row 2xl:flex-wrap xs:flex xs:flex-wrap sm:flex sm:flex-wrap justify-between xs:!mx-10 sm:!mx-5 mt-5">
      <div class="best_card xs:!w-[100%] sm:!w-[100%]">
        <img src="@/assets/img/dollar_2.svg" class="xs:!w-[37px] xs:!h-[37px] sm:!w-[37px] sm:!h-[37px]" alt="img">
        <div class="heading_cart">
          <h6 class="xs:!text-[14px] sm:!text-[14px]">{{ $t("key_value.best_prices") }}</h6>
          <p class="xs:!text-[10px] sm:!text-[12px]">{{ $t("key_value.best_prices_desc") }}</p>
        </div>
      </div>
      <div class="best_card xs:!w-[100%] sm:!w-[100%] xs:!my-4 sm:!my-4">
        <img src="@/assets/img/dollar.svg" class="xs:!w-[37px] xs:!h-[37px] sm:!w-[37px] sm:!h-[37px]" alt="img">
        <div class="heading_cart">
          <h6 class="xs:!text-[14px] sm:!text-[14px]">{{ $t("key_value.refundable") }}</h6>
          <p class="xs:!text-[10px] sm:!text-[12px]">{{ $t("key_value.refundable_desc") }}</p>
        </div>
      </div>
      <div class="best_card xs:!w-[100%] sm:!w-[100%]">
        <img src="@/assets/img/car.svg" class="xs:!w-[37px] xs:!h-[37px] sm:!w-[37px] sm:!h-[37px]" alt="img">
        <div class="heading_cart">
          <h6 class="xs:!text-[14px] sm:!text-[14px]">{{ $t("key_value.free_delivery") }}</h6>
          <p class="xs:!text-[10px] sm:!text-[12px]">{{ $t("key_value.free_delivery_desc") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "KeyValues"
}
</script>

<style scoped>

</style>
