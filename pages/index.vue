<template>
  <div>
    <app-slider></app-slider>
    <explore-category></explore-category>
    <shop-by-recommendation></shop-by-recommendation>
    <!--    <promo-slider :slider="promo_banners.middle"></promo-slider>-->
    <div class="overflow-hidden ml-[80px] mr-[80px] sm:m-0 mb-3">
      <div class="swiper-wrapper ">
        <div class="swiper-slide m-1 mb-3">

<!--          <nuxt-link :to="localePath('/category/2')">-->
            <img src="@/assets/img/banners/banner1.png" alt="banner1">
<!--          </nuxt-link>-->
        </div>
      </div>
    </div>
    <product-section v-for="(item, index) in menu" :key="index" :category="item"></product-section>
    <!--    <promo-slider :slider="promo_banners.bottom"></promo-slider>-->
    <div class="overflow-hidden ml-[80px] mr-[80px] sm:m-0 mb-3">
      <div class="swiper-wrapper ">
        <div class="swiper-slide m-1 mb-3">
          <img src="@/assets/img/banners/banner2.png" alt="banner2">
        </div>
      </div>
    </div>
    <key-values></key-values>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import AppSlider from "~/components/AppSlider";
import ExploreCategory from "~/components/ExploreCategory";
import ShopByRecommendation from "~/components/ShopByRecommendation";
import ProductSection from "~/components/ProductSection";
// import PromoSlider from "~/components/PromoSlider";
import KeyValues from "~/components/KeyValues";
import 'swiper/swiper-bundle.min.css';


export default {
  name: 'IndexPage',
  components: {
    ProductSection,
    ShopByRecommendation,
    ExploreCategory,
    AppSlider,
    // PromoSlider,
    KeyValues,
  },
  computed: {
    promo_banners() {
      return this.$store.state.home.promo_banners;
    },
    menu() {
      return this.$store.state.home.menu;
    }
  },
  mounted() {
    this.fetchHomeData();
  },
  methods: {
    ...mapActions('home', ['fetchHomeData']),
    ...mapActions('cart', ['getCartAction'])
  },
}
</script>
