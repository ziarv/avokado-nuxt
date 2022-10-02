<template>
  <div>
    <div v-if="menu && menu.length >= 0" class="juices sm:!hidden">
      <nuxt-link
        v-if="menu[0] !== undefined"
        :to="localePath(`/category/${menu[0].id}/${menu[0].category_slug}?cid=${menu[0].id}`)"
        :style="{'background-color': menu[0].menu_icon_background_color, 'background-image': 'url('+menu[0].menu_icon+')'}"
      >
        {{ menu[0].name }}
      </nuxt-link>
      <div class="juice-col">
        <div class="juices_one flex">
          <nuxt-link
            v-if="menu[1] !== undefined"
            :to="localePath(`/category/${menu[1].id}/${menu[1].category_slug}?cid=${menu[1].id}`)"
            :style="{'background-color': menu[1].menu_icon_background_color,'background-image': 'url('+menu[1].menu_icon+')'}"
          >
            {{ menu[1].name }}
          </nuxt-link>
          <nuxt-link
            v-if="menu[2] !== undefined"
            :to="localePath(`/category/${menu[2].id}/${menu[2].category_slug}?cid=${menu[2].id}`)"
            :style="{'background-color': menu[2].menu_icon_background_color,'background-image': 'url('+menu[2].menu_icon+')'}"
          >
            {{ menu[2].name }}
          </nuxt-link>
        </div>
        <div class="juices_one flex">
          <nuxt-link
            v-if="menu[3] !== undefined"
            :to="localePath(`/category/${menu[3].id}/${menu[3].category_slug}?cid=${menu[3].id}`)"
            :style="{'background-color': menu[3].menu_icon_background_color,'background-image': 'url('+menu[3].menu_icon+')'}"
          >
            {{ menu[3].name }}
          </nuxt-link>
          <nuxt-link
            v-if="menu[4] !== undefined"
            :to="localePath(`/category/${menu[4].id}/${menu[4].category_slug}?cid=${menu[4].id}`)"
            :style="{'background-color': menu[4].menu_icon_background_color,'background-image': 'url('+menu[4].menu_icon+')'}"
          >
            {{ menu[4].name }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
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
