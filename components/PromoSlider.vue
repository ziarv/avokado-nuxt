<template>
  <div ref="swiper" class="overflow-hidden ml-[80px] mr-[80px] sm:m-0 mb-3">
    <div class="swiper-wrapper ">
      <div class="swiper-slide m-1 mb-3">
        <img src="@/assets/img/slides/promo.png" alt="">
      </div>
      <div class="swiper-slide m-1 mb-3">
        <img src="@/assets/img/slides/promo.png" alt="">
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
  name: "PromoSlider",
  async mounted() {
    await this.$nextTick();
    // eslint-disable-next-line no-new
    new Swiper(this.$refs.swiper, {
      slidesPerView: 1,
      loop:true
    });
  },
}
</script>

<style scoped>

</style>
