<template>
  <div v-if="slider && slider.length > 0" ref="swiper" class="overflow-hidden ml-[80px] mr-[80px] sm:m-0 mb-3">
    <div class="swiper-wrapper ">
      <div v-for="(slide, index) in slider" :key="index" class="swiper-slide m-1 mb-3">
        <img :src="slide.image" style="max-height: 300px;object-fit: cover" alt="">
      </div>
    </div>
    <!--      <div class="swiper-button-next swiper-btn"></div>-->
    <!--      <div class="swiper-button-prev swiper-btn"></div>-->
  </div>
</template>
<script>
import Swiper from 'swiper/swiper-bundle.min';


export default {
  name: "PromoSlider",
  props: {
    slider: {
      default: () => [],
      type: Array
    }
  },
  data() {
    return {
      swiper: null
    };
  },
  watch: {
    slider() {
      this.initSwiper();
    }
  },
  mounted() {

  },
  methods: {
    async initSwiper() {
      await this.$nextTick();
      if (this.swiper) {
        this.swiper.reInit();
        return;
      }
      // eslint-disable-next-line no-new
      this.swiper = new Swiper(this.$refs.swiper, {
        slidesPerView: 1,
        loop: true
      });
    }
  }
}
</script>

<style scoped>

</style>
