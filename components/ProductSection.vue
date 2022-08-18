<template>
  <section>
    <div
      class="2xl:mx-20 2xl:flex 2xl:flex-row 2xl:flex-wrap xs:flex xs:flex-wrap sm:flex sm:flex-wrap justify-center xs:!mx-5 sm:!mx-5 sm:!mx-5 explore_categories">
      <h1 v-if="title" class="xs:!text-[16px] xs:!mb-[30px] sm:!text-[20px] sm:!mb-[30px]">Products</h1>
      <div ref="swiper" class="swiper mySwiper_7">
        <div class="swiper-wrapper">
          <product-list></product-list>
          <product-list></product-list>
          <product-list></product-list>
          <product-list></product-list>
          <product-list></product-list>
          <product-list></product-list>
          <product-list></product-list>
          <product-list></product-list>
        </div>
        <div
          class="swiper-button-next xs:!w-[20px] xs:!h-[20px] xs:!top-[83%] sm:!w-[20px] sm:!h-[20px] sm:!top-[83%] sm:!w-[20px] sm:!h-[20px] sm:!top-[83%]">
          <i class="xs:!text-[12px xs:!text-[12px] sm:!text-[12px sm:!text-[14px] fa-solid fa-arrow-right"></i>
        </div>
        <div
          class="swiper-button-prev xs:!w-[20px] xs:!h-[20px] xs:!top-[83%] sm:!w-[20px] sm:!h-[20px] sm:!top-[83%] xs:!right-[40px] sm:!right-[40px]">
          <i class="xs:!text-[12px xs:!text-[12px] sm:!text-[12px sm:!text-[14px] fa-solid fa-arrow-left"></i>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import Swiper from 'swiper/swiper-bundle.min';
import 'swiper/swiper-bundle.min.css';
import ProductList from "~/components/ProductList";

export default {
  name: "ProductSection",
  components: {ProductList},
  props: {
    title: {
      default: true,
      type: Boolean
    }
  },
  async mounted() {
    await this.$nextTick();
    // eslint-disable-next-line no-new
    new Swiper(this.$refs.swiper, {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      loopFillGroupWithBlank: true,
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
      },
    });
  },
}
</script>

<style scoped>

</style>
