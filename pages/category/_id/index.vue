<template>
  <div>
    <section>
      <div class="mx-20 lg:!mx-14 xs:!mx-10 sm:!mx-5 flex-row flex-wrap flex my-14 justify-between">
        <div
          class="side_bar_main w-[20%] sm:!w-[100%] sm:!justify-between xs:!justify-between sm:!mr-0 xs:!flex xs:!flex-row xs:!flex-wrap sm:!flex sm:!flex-row sm:!flex-wrap xs:!w-[100%] xs:!mr-0 mr-5">
          <div class="side_bar sm:!w-[47.5%] xs:!w-[47.5%] mb-14 flex flex-col">
            <h1 class="mb-8">Categories</h1>
            <div v-for="(item, index) in menu" :key="index" class="fresh_fruit flex items-center">

              <img :src="item.menu_icon" alt="">
              <nuxt-link :to="localePath(`/category/${item.id}`)">
                <p>{{ item.name }}</p>
              </nuxt-link>
            </div>
          </div>
          <!--          <div class="side_bar sm:!w-[47.5%] xs:!w-[47.5%]">-->
          <!--            <h1>Filter Price Range</h1>-->
          <!--            <div class="wrap my-5">-->
          <!--              <div class='slider'>-->
          <!--                <input id="r" type="range" class="progress" value='0' min="0" max="5000" step="1">-->
          <!--              </div>-->
          <!--              <div class='slider'>-->
          <!--                <input id="srange" type="range" class="progress" value='5000' max="5000" step="1">-->
          <!--                &lt;!&ndash; <input id="s" type="range"  value='5000' max="5000" step="1"/> &ndash;&gt;-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <p>0 SAR-200 SAR</p>-->
          <!--            <h1>Customer Rating</h1>-->
          <!--            <div class="listing_star">-->
          <!--              <div class="star_img">-->
          <!--                <img src="@/assets/img/Vector_1.svg" alt="">-->
          <!--                <img src="@/assets/img/Vector_1.svg" alt="">-->
          <!--                <img src="@/assets/img/Vector_1.svg" alt="">-->
          <!--                <img src="@/assets/img/Vector_1.svg" alt="">-->
          <!--              </div>-->
          <!--              <span>& up</span>-->
          <!--            </div>-->
          <!--            <div class="listing_star">-->
          <!--              <div class="star_img">-->
          <!--                <img src="@/assets/img/Star_1.svg" alt="">-->
          <!--                <img src="@/assets/img/Star_1.svg" alt="">-->
          <!--                <img src="@/assets/img/Star_1.svg" alt="">-->
          <!--              </div>-->
          <!--              <span>& up</span>-->
          <!--            </div>-->
          <!--            <div class="listing_star">-->
          <!--              <div class="star_img">-->
          <!--                <img src="@/assets/img/Star_1.svg" alt="">-->
          <!--                <img src="@/assets/img/Star_1.svg" alt="">-->
          <!--              </div>-->
          <!--              <span>& up</span>-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
        <div class="main_content w-[76%] sm:!w-[100%] sm:mt-[50px]">
          <div class="flex flex-row flex-wrap justify-between">
            <div class="heading flex flex-row flex-wrap justify-between mx-4">
              <h1> {{ category.category_name }}</h1>
              <!--              <select id="" name="">-->
              <!--                <option value="Recommended">Sort by: Recommended</option>-->
              <!--                <option value="Recommended">Sort by: Recommended</option>-->
              <!--                <option value="Recommended">Sort by: Recommended</option>-->
              <!--                <option value="Recommended">Sort by: Recommended</option>-->
              <!--                <option value="Recommended">Sort by: Recommended</option>-->
              <!--              </select>-->
            </div>


            <product-list v-for="(product,index) in products" :key="index" :product="product"></product-list>
            <div class="pagination mt-5 mb-20">
              <!-- This example requires Tailwind CSS v2.0+ -->
              <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-end">
                <div>
                  <nav class="relative z-0 inline-flex rounded-md -space-x-px" aria-label="Pagination">
                    <!-- <a href="#"
                        class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span class="sr-only">Previous</span>
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </a> -->
                    <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                    <a
                      href="#" aria-current="page"
                      class="z-10 text-white relative inline-flex items-center px-2.5 h-7 rounded-full text-sm font-medium hover:bg-lime-600 hover:text-white pagi">
                      1
                    </a>
                    <a
                      href="#"
                      class="z-10 text-white relative inline-flex items-center px-2.5 h-7 rounded-full text-sm font-medium hover:bg-lime-600 hover:text-white pagi">
                      2
                    </a>
                    <a
                      href="#"
                      class="z-10 text-white relative inline-flex items-center px-2 h-7 rounded-full text-sm font-medium hover:bg-lime-600 hover:text-white pagi">
                      <span class="sr-only">Next</span>
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import Swiper from 'swiper/swiper-bundle.min';
import 'swiper/swiper-bundle.min.css';

export default {
  name: "CategoryIndex",
  data() {
    return {
      slider: null,
      page: 1,
      id: this.$route.params.id
    }
  },
  computed: {
    products() {
      return this.$store.state.category.products;
    },
    menu() {
      return this.$store.state.home.menu;
    },
    category() {
      return this.$store.state.category.response;
    }
  },
  watch: {},
  mounted() {
    const payload = {
      id: this.id,
      page: this.page,
    }
    this.fetchByCategoryId(payload);
  },
  methods: {
    ...mapActions('category', ['fetchByCategoryId']),
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
