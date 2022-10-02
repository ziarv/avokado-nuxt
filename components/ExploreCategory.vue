<template>
  <section>
    <div
      v-if="menu.length > 0"
      class="hidden sm:!flex flex-wrap justify-center mx-5 explore_categories">
      <h2 class="sm:!text-[20px]">{{ $t("explore_categories") }}</h2>
      <div ref="swiper" class="swiper mySwiper_1">
        <div  class="swiper-wrapper">
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
        <div class="swiper-button-next"><img src="@/assets/img/right_arrow.svg" alt="slider_img"></div>
        <div class="swiper-button-prev"><img src="@/assets/img/left_arrow.svg" alt="slider_img"></div>
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
