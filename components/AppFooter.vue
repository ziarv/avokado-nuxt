<template>
  <footer>
    <select-location/>
    <div class="right-floating-btn">
      <span class="right-floating-btn-cart-summary">{{ cart_items.length }}</span>
      <nuxt-link
        :to="localePath('/cart')"
        class="floatingCart"
      >
        <img
          v-if="cart_items.length > 0"
          class="w-[100%]"
          src="@/assets/img/full.png"
          alt="My Basket"
          style="display: block"
        />
        <img
          v-else
          src="@/assets/img/empty.png"
          alt="My Basket"
          class="w-[100%]"
          style="display: block"
        />
      </nuxt-link>
    </div>
    <div
      class="container grid grid-cols-4 sm:grid-cols-1 justify-center">
      <div></div>
      <div class="footer_logo">
        <img src="@/assets/img/logo.svg" class="sm:!w-[152px] sm:!h-[55px]" alt="">
        <ul>
          <li class="my-[25px] sm:!text-[12px sm:!text-[12px] sm:!text-[12px sm:!text-[14px] sm:!my-[15px]">
            <img src="@/assets/img/li_map-pin.svg" class="inline nsm:!mr-[10px] sm:!w-[16px] sm:!h-[16px]" alt="">
            Address: Al Hamrah, Jeddah, Saudi Arabia
          </li>
          <li class="my-[25px] sm:!text-[12px sm:!text-[12px] sm:!text-[12px sm:!text-[14px] sm:!my-[15px]">
            <img src="@/assets/img/li_phone.svg" class="inline sm:!mr-[10px] sm:!w-[16px] sm:!h-[16px]" alt="">
            Call Us: 920033710
          </li>
          <li class="my-[25px] sm:!text-[12px sm:!text-[12px] sm:!text-[12px sm:!text-[14px] sm:!my-[15px]">
            <img src="@/assets/img/li_mail.svg" class="inline sm:!mr-[10px] sm:!w-[16px] sm:!h-[16px]" alt="">
            Email: care@avokado.sa
          </li>
          <li class="my-[25px] sm:!text-[12px sm:!text-[12px] sm:!text-[12px sm:!text-[14px] sm:!my-[15px]">
            <img src="@/assets/img/li_clock-9.svg" class="inline sm:!mr-[10px] sm:!w-[16px] sm:!h-[16px]" alt="">
            Work hours: From 9:00 AM to 6:00 PM
          </li>
        </ul>
      </div>
      <div class="footer_application">
        <div class="application">
          <h5 class="sm:!text-[16px]">{{ $t("footer.we_accept") }}</h5>
          <div class="payments flex">
            <img class="w-[30px] ml-1" src="@/assets/img/payment/madapay.webp" alt="madapay">
            <img class="w-[30px] ml-1" src="@/assets/img/payment/hyperpay_creditcard.webp" alt="hyperpay_creditcard">
            <img class="w-[30px] ml-1" src="@/assets/img/payment/stcpay.webp" alt="stcpay">
            <img class="w-[30px] ml-1" src="@/assets/img/payment/cashondelivery.png" alt="cashondelivery">
            <img class="w-[30px] ml-1" src="@/assets/img/payment/codspan.png" alt="codspan">
          </div>
        </div>
        <div class="application">
          <h5 class="sm:!text-[16px] m-0">{{ $t("footer.download_app") }}</h5>
          <a href="https://play.google.com/store/apps/details?id=com.akio.avokado" target="_blank"><img src="@/assets/img/play-store.png" class="w-[150px]" alt=""></a>
          <a href="https://apps.apple.com/sa/app/avokado-%D8%A7%D9%81%D9%88%D9%83%D8%A7%D8%AF%D9%88/id1265492118" target="_blank"><img src="@/assets/img/apple-store.png" class="w-[150px]" alt=""></a>
          <a href="https://l.ead.me/bclu5B" target="_blank"><img src="@/assets/qr.jpeg" class="w-[150px] h-[150px]" alt=""></a>
          <!--          <a href="https://play.google.com/store/apps/details?id=com.akio.avokado" target="_blank">-->
          <!--            <img src="@/assets/img/apple-store.png" class="sm:!h-[34px]" alt="">-->
          <!--          </a>-->
          <!--          <a-->
          <!--            href="https://apps.apple.com/us/app/avokado-%D8%A7%D9%81%D9%88%D9%83%D8%A7%D8%AF%D9%88/id1265492118"-->
          <!--            target="_blank">-->
          <!--            <img src="@/assets/img/play-store.png" class="sm:!h-[36px]" alt="">-->
          <!--          </a>-->
        </div>
      </div>
      <div></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  computed: {
    cart_items() {
      return this.$store.state.cart.cart_items;
    }
  }
}
</script>

<style scoped>

</style>
