<template>

  <div
v-if="promo_banners && promo_banners.top && promo_banners.top.length > 0" ref="swiper_main"
       class="overflow-hidden">
    <div class="swiper-wrapper">
      <div v-for="(banner,index) in promo_banners.top" :key="index" class="swiper-slide m-1 mb-3">
        <img :src="banner.image" alt="banner top">
      </div>
    </div>
    <!--      <div class="swiper-button-next swiper-btn"></div>-->
    <!--      <div class="swiper-button-prev swiper-btn"></div>-->
  </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min';

export default {
  name: "AppSlider",
  data() {
    return {
      slider: null
    }
  },
  computed: {
    promo_banners() {
      return this.$store.state.home.promo_banners;
    }
  },
  watch: {
    promo_banners() {
      this.initSwiper();
    }
  },
  async mounted() {

  },
  methods: {
    async initSwiper() {
      await this.$nextTick();
      if (this.slider) {
        this.slider.reInit();
        return;
      }
      // eslint-disable-next-line no-new
      this.slider = new Swiper(this.$refs.swiper_main, {
        autoplay: {
          delay: 3000,
        },
        slidesPerView: 1,
        loop: true
      });
    }
  }
}
</script>

<style scoped>
.swiper-btn {
  color: black !important;
}
</style>
