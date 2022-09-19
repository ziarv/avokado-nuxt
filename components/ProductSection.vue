<template>
  <section v-if="products && products.length > 0">
    <div
      class="2xl:mx-20 2xl:flex 2xl:flex-row 2xl:flex-wrap sm:flex sm:flex-wrap sm:flex sm:flex-wrap justify-center sm:!mx-5 sm:!mx-5 sm:!mx-5 explore_categories">
      <h2 class="sm:!text-[16px] sm:!mb-[30px] sm:!text-[20px] sm:!mb-[30px]"> {{ category.name }} </h2>
      <div ref="swiper" class="swiper mySwiper_7">
        <div class="swiper-wrapper">
          <product-list
            v-for="(product,index) in products" :key="index" :product="product"
            :is-in-slider="true"></product-list>
        </div>
        <div
          class="swiper-button-next sm:!w-[20px] sm:!h-[20px] sm:!top-[83%] sm:!w-[20px] sm:!h-[20px] sm:!top-[83%] sm:!w-[20px] sm:!h-[20px] sm:!top-[83%]">
          <i class="sm:!text-[12px sm:!text-[12px] sm:!text-[12px sm:!text-[14px] fa-solid fa-arrow-right"></i>
        </div>
        <div
          class="swiper-button-prev sm:!w-[20px] sm:!h-[20px] sm:!top-[83%] sm:!w-[20px] sm:!h-[20px] sm:!top-[83%] sm:!right-[40px] sm:!right-[40px]">
          <i class="sm:!text-[12px sm:!text-[12px] sm:!text-[12px sm:!text-[14px] fa-solid fa-arrow-left"></i>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import Swiper from 'swiper/swiper-bundle.min';

import {mapActions} from "vuex";
import ProductList from "~/components/ProductList";

export default {
  name: "ProductSection",
  components: {ProductList},
  props: {
    title: {
      default: true,
      type: Boolean
    },
    category: {
      default: () => {
      },
      type: Object
    }
  },
  data() {
    return {
      slider: null,
      products: []
    }
  },
  async mounted() {
    await this.fetchSliderByCategoryId(this.category.id)
      .then((response) => {
        this.products = response.data.category_sliders
      })
      .then(() => {
        this.initSlider();
      });
  },
  methods: {
    ...mapActions('category', ['fetchSliderByCategoryId']),
    async initSlider() {
      await this.$nextTick();
      if (this.swiper) {
        this.swiper.reInit();
        return;
      }
      // eslint-disable-next-line no-new
      this.slider = new Swiper(this.$refs.swiper, {
        slidesPerView: 2,
        speed: 400,
        preventClicksPropagation: false,
        spaceBetween: 25,
        freeMode: true,
        preventClicks :true,
        a11y: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
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
