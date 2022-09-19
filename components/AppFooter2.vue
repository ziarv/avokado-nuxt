<template>
  <footer>
    <footer class="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 sm:grid-cols-1 pl-[5%] pr-[5%]">
      <div class="footer-links">
        <div class="footerLogo">
          <img src="@/assets/img/logo.svg" class="w-[152px] h-[55px]" alt="">
        </div>
        <ul>
          <li class="sm:!text-[12px] sm:!text-[12px] sm:!text-[12px sm:!text-[14px] sm:!my-[15px]">
            <a href="#">
              <img
                src="@/assets/img/li_map-pin.svg"
                class="inline-block sm:!mr-[10px] sm:!w-[16px] sm:!h-[16px]" alt="">
              Address:
              1762 School House Roadx</a>
          </li>
          <li class="sm:!text-[12px] sm:!text-[12px] sm:!text-[12px sm:!text-[14px] sm:!my-[15px]">
            <a href="#">
              <img
                src="@/assets/img/li_phone.svg"
                class="inline-block sm:!mr-[10px] sm:!w-[16px] sm:!h-[16px]" alt="">
              Call Us:
              1233-777
            </a>
          </li>
          <li class="sm:!text-[12px] sm:!text-[12px] sm:!text-[12px sm:!text-[14px] sm:!my-[15px]">
            <a href="#">
              <img
                src="@/assets/img/li_mail.svg"
                class=" inline-block sm:!mr-[10px] sm:!w-[16px] sm:!h-[16px]" alt="">
              Email:
              care@avokado.sa
            </a>
          </li>
          <li class="sm:!text-[12px] sm:!text-[12px] sm:!text-[12px sm:!text-[14px] sm:!my-[15px]">
            <a href="#">
              <img
                src="@/assets/img/li_clock-9.svg"
                class="inline-block sm:!mr-[10px] sm:!w-[16px] sm:!h-[16px]" alt="">
              Work
              hours: 8:00 - 20:00, Sunday -
              Thursday
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-links">
        <h5 class="text-2xl mt-5">Useful links</h5>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Terms & conditions</a></li>
        </ul>
      </div>
      <div>
        <div class="application">
          <h5 class="text-2xl mt-5 mb-5">We Accept</h5>
          <a href="#"><img src="@/assets/img/Payment.png" class="sm:!h-[33px]" alt=""></a>
        </div>
        <div>
          <h5 class="text-2xl mt-5 mb-5">Download App</h5>
          <a href="#"><img src="@/assets/img/apple-store.png" class="inline sm:!h-[34px]" alt=""></a>
          <a href="#"><img src="@/assets/img/play-store.png" class="inline sm:!h-[36px]" alt=""></a>
        </div>
      </div>
    </footer>

    <hr class="mx-20 sm:!mx-10">

    <div class="footer_bottom flex flex-row flex-wrap justify-center">
      <div class="container">
        <div class="footer_bottom_copyri8 justify-center">
          <p class="sm:!text-[10px msm:!text-[10px] sm:!mt-5">© 2022, All rights reserved</p>
        </div>
        <div class="footer_icon">
          <a href="#" class="fb_icon"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class="in_icon"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="#" class="insta_icon"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" class="twit_icon"><i class="fa-brands fa-twitter"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter2",
  computed: {
    cart_items() {
      return this.$store.state.cart.cart_items;
    }
  }
}
</script>

<style scoped>

</style>
