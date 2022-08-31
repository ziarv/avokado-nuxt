<template>
  <div>
    <section>
      <div class="m-auto  flex-row flex-wrap flex my-14 justify-center">
        <div
          class="side_bar_main w-[20%] sm:!w-[100%] sm:!justify-between xs:!justify-between sm:!mr-0 xs:!flex xs:!flex-row xs:!flex-wrap sm:!flex sm:!flex-row sm:!flex-wrap xs:!w-[90%] xs:!mr-0 mr-5">
          <div class="side_bar sm:!w-[47.5%] xs:!w-[47.5%] mb-14 flex flex-col">
            <h1 class="mb-8">{{ $t('pages.categories.name') }}</h1>
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
            </div>


            <product-list v-for="(product,index) in products" :key="index" :product="product"></product-list>
          </div>


          <div class="flex justify-center">
            <paginate
              v-model="page"
              :page-count="parseInt(total_pages)"
              :click-handler="updateRoutePage"
              :prev-text="$t('pagination.prev')"
              :next-text="$t('pagination.next')"
              :container-class="'my-pagination'"
              :page-class="''"
              :page-link-class="''"
              :prev-class="''"
              :next-class="''"
              :prev-link-class="''"
              :next-link-class="''"
            >
            </paginate>
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
// import Paginate from "vuejs-paginate";

const Paginate = process.client ? require('vuejs-paginate') : undefined

export default {
  name: "CategoryIndex",
  components: {Paginate},
  data() {
    return {
      slider: null,
      page: 1,
      id: this.$route.params.id
    }
  },
  computed: {
    total_pages() {
      return this.$store.state.category.totalPages;
    },
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
  watch: {
    "$route.query.page"(pageNo) {
      const payload = {
        id: this.id,
        page: pageNo,
      }
      this.fetchByCategoryId(payload);
      if (window) {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
    }
  },
  mounted() {
    this.page = this.$route.query.page ? parseInt(this.$route.query.page) : 1;
    const payload = {
      id: this.id,
      page: this.page,
    }
    this.fetchHomeData();
    this.fetchByCategoryId(payload);
  },
  methods: {
    ...mapActions('category', ['fetchByCategoryId']),
    ...mapActions('home', ['fetchHomeData']),
    updateRoutePage() {
      this.$router.push({
        path: this.localePath("/category/" + this.id),
        query: {
          page: this.page
        }
      });
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
