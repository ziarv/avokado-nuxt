<template>
  <div>
    <app-slider></app-slider>
    <explore-category2></explore-category2>
    <explore-category></explore-category>
    <shop-by-recommendation></shop-by-recommendation>

    <!--    <promo-slider :slider="promo_banners.middle"></promo-slider>-->
    <div class="container">
      <div class="w-full m-1 mb-3">
        <img src="@/assets/img/banners/mid.jpg"  class="w-full" alt="bottom">
      </div>
    </div>
    <product-section v-for="(item, index) in menu" :key="index" :category="item"></product-section>
    <!--    <promo-slider :slider="promo_banners.bottom"></promo-slider>-->

    <div class="container">
      <div class="w-full m-1 mb-3">
        <img src="@/assets/img/banners/newbottom.jpg" class="w-full" alt="bottom">
      </div>
    </div>

    <key-values></key-values>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import AppSlider from "~/components/AppSlider";
import ExploreCategory from "~/components/ExploreCategory";
import ExploreCategory2 from "~/components/ExploreCategory2";
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
    ExploreCategory2,
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
