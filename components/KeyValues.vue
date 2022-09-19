<template>
  <div class="container mb-5">
    <div class="grid grid-cols-3 gap-2 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-3">
      <div class="cardFooterFirst">
        <div class="dollarImg">
          <img src="@/assets/img/cardFirst.svg" class="dollarImg" alt="img">
        </div>
        <div class="dollarHeading">
          <h2 class="sm:text-1xl text-2xl">{{ $t("key_value.best_prices") }}</h2>
          <p>{{ $t("key_value.best_prices_desc") }}</p>
        </div>
      </div>
      <div class="cardFooterFirst">
        <div class="dollarImg">
          <img src="@/assets/img/dolllarCardSec.svg" class="dollarImg" alt="img">
        </div>
        <div class="dollarHeading">
          <h2 class="sm:text-1xl  text-2xl">{{ $t("key_value.refundable") }}</h2>
          <p>{{ $t("key_value.refundable_desc") }}</p>
        </div>
      </div>
      <div class="cardFooterFirst">
        <div class="dollarImg">
          <img src="@/assets/img/carCarThr.svg" class="dollarImg" alt="img">
        </div>
        <div class="dollarHeading">
          <h2 class="sm:text-1xl  text-2xl">{{ $t("key_value.free_delivery") }}</h2>
          <p>{{ $t("key_value.free_delivery_desc") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KeyValues"
}
</script>

<style scoped>

</style>
