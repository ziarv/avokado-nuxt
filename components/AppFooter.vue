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
          src="@/assets/img/full_box.png"
          alt="My Basket"
          style="display: block"
        />
        <img
          v-else
          src="@/assets/img/empty_box.png"
          alt="My Basket"
          class="w-[100%]"
          style="display: block"
        />
      </nuxt-link>
    </div>
    <div
      class="2xl:mx-20 2xl:flex 2xl:flex-row 2xl:flex-wrap xs:flex xs:flex-wrap sm:flex sm:flex-wrap justify-between xs:!mx-10 sm:!mx-5">
      <div class="footer_logo">
        <img src="@/assets/img/logo.svg" class="xs:!w-[152px] xs:!h-[55px]" alt="">
        <ul>
          <li class="my-[25px] xs:!text-[12px xs:!text-[12px] sm:!text-[12px sm:!text-[14px] xs:!my-[15px]">
            <img src="@/assets/img/li_map-pin.svg" class="inline nxs:!mr-[10px] xs:!w-[16px] xs:!h-[16px]" alt="">
            Address: 1762 School House Roadx
          </li>
          <li class="my-[25px] xs:!text-[12px xs:!text-[12px] sm:!text-[12px sm:!text-[14px] xs:!my-[15px]">
            <img src="@/assets/img/li_phone.svg" class="inline xs:!mr-[10px] xs:!w-[16px] xs:!h-[16px]" alt="">
            Call Us: 1233-777
          </li>
          <li class="my-[25px] xs:!text-[12px xs:!text-[12px] sm:!text-[12px sm:!text-[14px] xs:!my-[15px]">
            <img src="@/assets/img/li_mail.svg" class="inline xs:!mr-[10px] xs:!w-[16px] xs:!h-[16px]" alt="">
            Email:
            care@avokado.sa
          </li>
          <li class="my-[25px] xs:!text-[12px xs:!text-[12px] sm:!text-[12px sm:!text-[14px] xs:!my-[15px]">
            <img src="@/assets/img/li_clock-9.svg" class="inline xs:!mr-[10px] xs:!w-[16px] xs:!h-[16px]" alt="">
            Work
            hours: 8:00 - 20:00, Sunday -
            Thursday
          </li>
        </ul>
      </div>
      <div class="footer_link xs:!mb-[15px] xs:!block xs:!w-full">
        <h5 class="xs:!text-[16px] xs:!mb-[10px]">{{ $t("footer.useful_links") }}</h5>
        <ul>
          <li class="xs:!text-[12px] sm:!text-[14px]">About Us</li>
          <li class="xs:!text-[12px] sm:!text-[14px]">Help Center</li>
          <li class="xs:!text-[12px] sm:!text-[14px]">Terms & conditions</li>
        </ul>
      </div>
      <div class="footer_application">
        <div class="application">
          <h5 class="xs:!text-[16px]">{{ $t("footer.we_accept") }}</h5>
          <a href="#"><img src="@/assets/img/Payment.png" class="xs:!h-[33px]" alt=""></a>
        </div>
        <div class="application">
          <h5 class="xs:!text-[16px]">{{ $t("footer.download_app") }}</h5>
          <a href="https://play.google.com/store/apps/details?id=com.akio.avokado" target="_blank">
            <img src="@/assets/img/apple-store.png" class="xs:!h-[34px]" alt="">
          </a>
          <a
            href="https://apps.apple.com/us/app/avokado-%D8%A7%D9%81%D9%88%D9%83%D8%A7%D8%AF%D9%88/id1265492118"
            target="_blank">
            <img src="@/assets/img/play-store.png" class="xs:!h-[36px]" alt="">
          </a>
        </div>
      </div>
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
