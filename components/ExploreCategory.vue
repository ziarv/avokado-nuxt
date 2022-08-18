<template>
  <section>
    <div
      class="2xl:mx-20 2xl:flex 2xl:flex-row 2xl:flex-wrap xs:flex xs:flex-wrap sm:flex sm:flex-wrap justify-center xs:!mx-5 sm:!mx-5 explore_categories">
      <h1 class="xs:!text-[16px] xs:!mb-[30px] sm:!text-[20px] sm:!mb-[30px]">Explore Categories</h1>
      <div ref="swiper" class="swiper mySwiper_1">
        <div class="swiper-wrapper">
          <div class="card swiper-slide">
            <img src="@/assets/img/baskit.png" class="xs:!w-[45] xs:!h-[45] sm:!w-[45] sm:!h-[45]" alt="">
            <p class="xs:!text-[12px] sm:!text-[14px]">Baskets</p>
          </div>
          <div class="card swiper-slide">
            <img src="@/assets/img/Vegetables.png" class="xs:!w-[45] xs:!h-[45] sm:!w-[45] sm:!h-[45]" alt="">
            <p class="xs:!text-[12px] sm:!text-[14px]">Vegetables</p>
          </div>
          <div class="card swiper-slide">
            <img src="@/assets/img/Fruits.png" class="xs:!w-[45] xs:!h-[45] sm:!w-[45] sm:!h-[45]" alt="">
            <p class="xs:!text-[12px] sm:!text-[14px]">Fruits</p>
          </div>
          <div class="card swiper-slide">
            <img src="@/assets/img/Packages.png" class="xs:!w-[45] xs:!h-[45] sm:!w-[45] sm:!h-[45]" alt="">
            <p class="xs:!text-[12px] sm:!text-[14px]">Packages</p>
          </div>
          <div class="card swiper-slide">
            <img src="@/assets/img/Herbs.png" class="xs:!w-[45] xs:!h-[45] sm:!w-[45] sm:!h-[45]" alt="">
            <p class="xs:!text-[12px] sm:!text-[14px]">Herbs</p>
          </div>
        </div>
        <div
          class="swiper-button-next xs:!w-[20px] xs:!h-[20px] xs:!top-[80%] sm:!w-[20px] sm:!h-[20px] sm:!top-[80%]">
          <i
            class="xs:!text-[12px xs:!text-[12px] sm:!text-[12px sm:!text-[14px] fa-solid fa-arrow-right"></i>
        </div>
        <div
          class="swiper-button-prev xs:!w-[20px] xs:!h-[20px] xs:!top-[80%] sm:!w-[20px] sm:!h-[20px] sm:!top-[80%] xs:!right-[40px] sm:!right-[40px]">
          <i class="xs:!text-[12px xs:!text-[12px] sm:!text-[12px sm:!text-[14px] fa-solid fa-arrow-left"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min';
import 'swiper/swiper-bundle.min.css';

export default {
  name: "ExploreCategory",
  async mounted() {
    await this.$nextTick();
    // eslint-disable-next-line no-new
    new Swiper(this.$refs.swiper, {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
    });
  }
}
</script>

<style scoped>

</style>
