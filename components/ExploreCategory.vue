<template>
  <section>
    <div
      class="2xl:mx-20 2xl:flex 2xl:flex-row 2xl:flex-wrap sm:flex sm:flex-wrap sm:flex sm:flex-wrap justify-center sm:!mx-5 sm:!mx-5 explore_categories">
      <h2 class="sm:!text-[16px] sm:!mb-[30px] sm:!text-[20px] sm:!mb-[30px]">{{ $t("explore_categories") }}</h2>
      <div ref="swiper" class="swiper mySwiper_1">
        <div v-if="menu.length > 0" class="swiper-wrapper">
          <div
            v-for="(category,index) in menu" :key="index"
            :style="{'background-color': category.menu_icon_background_color}" class="card swiper-slide">

            <img
:src="category.menu_icon" class="cursor-pointer sm:!w-[45] sm:!h-[45] sm:!w-[45] sm:!h-[45]"
                 alt="" @click="$router.push({path:localePath(`/category/${category.id}/${category.category_slug}?cid=${category.id}`)})">

            <nuxt-link :to="localePath(`/category/${category.id}/${category.category_slug}?cid=${category.id}`)">
              <p class="sm:!text-[12px] sm:!text-[14px]">{{ category.name }}</p>
            </nuxt-link>
          </div>
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
import Swiper from 'swiper/swiper-bundle.min';

export default {
  name: "ExploreCategory",
  data() {
    return {
      slider: null,
      categories: []
    }
  },
  computed: {
    menu() {
      return this.$store.state.home.menu;
    }
  },
  watch: {
    menu() {
      this.initSwiper();
    }
  },
  mounted() {
  },
  methods: {
    async initSwiper() {
      await this.$nextTick();
      if (this.slider) {
        this.slider.reInit();
        return;
      }
      // eslint-disable-next-line no-new
      this.slider = new Swiper(this.$refs.swiper, {
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
}
</script>

<style scoped>

</style>
