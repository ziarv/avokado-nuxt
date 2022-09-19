<template>
  <section>
    <div
      class="2xl:mx-20 2xl:flex 2xl:flex-row 2xl:flex-wrap sm:flex sm:flex-wrap sm:flex sm:flex-wrap justify-center sm:!mx-5 sm:!mx-5 explore_categories">
      <h2 class="sm:!text-[16px] sm:!mb-[30px] sm:!text-[20px] sm:!mb-[30px]">{{$t('shop_by_recommendation')}}</h2>
      <div
v-if="recommended_products && recommended_products.length > 0" ref="swiper"
           class="swiper mySwiper_12 mySwiper_2">
        <div class="swiper-wrapper">
          <product-card v-for="(product,index) in recommended_products" :key="index" :product="product"></product-card>
        </div>
        <div class="swiper-button-next sm:!w-[20px] sm:!h-[20px] sm:!top-[80%] sm:!w-[20px] sm:!h-[20px] sm:!top-[80%]">
          <i class="sm:!text-[12px sm:!text-[12px] sm:!text-[12px sm:!text-[14px] fa-solid fa-arrow-right"></i>
        </div>
        <div
          class="swiper-button-prev sm:!w-[20px] sm:!h-[20px] sm:!top-[80%] sm:!w-[20px] sm:!h-[20px] sm:!top-[80%] sm:!right-[40px] sm:!right-[40px]">
          <i class="sm:!text-[12px sm:!text-[12px] sm:!text-[12px sm:!text-[14px] fa-solid fa-arrow-left"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions} from "vuex";
import Swiper from 'swiper/swiper-bundle.min';

import ProductCard from "~/components/ProductCard";

export default {
  name: "ShopByRecommendation",
  components: {ProductCard},
  data() {
    return {
      slider: null
    }
  },
  computed: {
    recommended_products() {
      return this.$store.state.home.recommended_products;
    }
  },
  watch: {
    recommended_products(){
      this.initSwiper();
    }
  },
  mounted() {
    this.fetchHomeRecommendedProducts();
  },
  methods: {
    ...mapActions('home', ['fetchHomeRecommendedProducts']),
    async initSwiper() {
      await this.$nextTick();
      if (this.slider) {
        this.slider.reInit();
        return;
      }
      // eslint-disable-next-line no-new
      this.slider = new Swiper(this.$refs.swiper, {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });
    }
  }
}
</script>

<style scoped>

</style>
