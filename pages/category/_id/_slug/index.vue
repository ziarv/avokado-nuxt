<template>
  <div>
    <section>
      <div class="m-auto  flex-row flex-wrap flex my-14 justify-center">
        <div
          class="side_bar_main w-[20%] sm:!w-[100%] sm:!justify-between sm:!justify-between sm:!mr-0 sm:!flex sm:!flex-row sm:!flex-wrap sm:!flex sm:!flex-row sm:!flex-wrap sm:!w-[90%] sm:!mr-0 mr-5">
          <div class="side_bar sm:!w-[47.5%] sm:!w-[47.5%] mb-14 flex flex-col">
            <h1 class="mb-8">{{ $t('pages.categories.name') }}</h1>
            <div v-for="(item, index) in menu" :key="index" class="fresh_fruit flex items-center">
              <img :src="item.menu_icon" alt="">
              <nuxt-link :to="localePath(`/category/${item.id}/${category.category_slug}?cid=${item.id}`)">
                <p>{{ item.name }}</p>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="main_content w-[76%] sm:!w-[100%] sm:mt-[50px]">
          <div class="flex flex-row flex-wrap justify-between">
            <div v-if="category" class="heading flex flex-row flex-wrap justify-between mx-4">
              <h1> {{ category.category_name }}</h1>
            </div>
            <product-list v-for="(product,index) in products" :key="index" :product="product"></product-list>
          </div>
          <infinite-loading @infinite="infiniteHandler">
            <div slot="no-more"></div>
            <div slot="no-results"></div>
            <div slot="error"></div>
          </infinite-loading>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import Swiper from 'swiper/swiper-bundle.min';
import 'swiper/swiper-bundle.min.css';
// import * as types from "~/store/modules/category/mutation-types";
// import Paginate from "vuejs-paginate";

// const Paginate = process.client ? require('vuejs-paginate') : undefined

export default {
  name: "CategoryIndex",
  // components: {Paginate},
  data() {
    return {
      slider: null,
      page: 0,
      products: [],
      category: [],
      id: isNaN(this.$route.params.id) ? this.$route.query.cid : this.$route.params.id
    }
  },
  async fetch() {

  },
  head() {
    return {
      title: this.category.category_name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.category.category_name
        }
      ]
    };
  },
  computed: {
    total_pages() {
      return this.$store.state.category.totalPages;
    },
    // products() {
    //   return this.$store.state.category.products;
    // },
    menu() {
      return this.$store.state.home.menu;
    }
  },
  watch: {
  },
  mounted() {
    this.$store.commit('category/FETCH_CATEGORY_ID_DATA', []);
    this.$store.commit('category/FETCH_PAGINATION_DATA', []);
    this.fetchHomeData();
  },
  methods: {
    ...mapActions('category', ['fetchByCategoryId']),
    ...mapActions('home', ['fetchHomeData']),
    infiniteHandler($state) {
      const payload = {
        id: this.id,
        page: ++this.page,
        context: this
      }
      this.fetchByCategoryId(payload).then(response => {
        if (response.data && response.data.products && response.data.products.length > 0) {
          this.category = response.data;
          this.products.push(...response.data.products)
          $state.loaded();
        } else {
          $state.complete();
        }
      })
    },
    async initSlider() {
      await this.$nextTick();
      if (this.slider) {
        this.slider.reInit();
        return;
      }
      // eslint-disable-next-line no-new
      this.slider = new Swiper(this.$refs.swiper, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }
}
</script>

<style scoped>

</style>
