<template>

  <div ref="swiper_main" class="overflow-hidden">
    <div class="swiper-wrapper">
      <div class="swiper-slide m-1 mb-3">
        <img src="@/assets/img/slides/image.png" alt="">
      </div>
      <div class="swiper-slide  m-1 mb-3">
        <img src="@/assets/img/slides/image.png" alt="">
      </div>
      <div class="swiper-slide  m-1 mb-3">
        <img src="@/assets/img/slides/image.png" alt="">
      </div>
    </div>
    <!--      <div class="swiper-button-next swiper-btn"></div>-->
    <!--      <div class="swiper-button-prev swiper-btn"></div>-->
  </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min';
import 'swiper/swiper-bundle.min.css';

export default {
  name: "AppSlider",
  async mounted() {
    await this.$nextTick();
    // eslint-disable-next-line no-new
    new Swiper(this.$refs.swiper_main, {
      slidesPerView: 1,
      loop:true
    });
  },
}
</script>

<style scoped>
.swiper-btn {
  color: black !important;
}
</style>
