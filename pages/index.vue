<template>
  <div>
    <app-slider></app-slider>
    <explore-category></explore-category>
    <shop-by-recommendation></shop-by-recommendation>

    <product-section v-for="(item, index) in menu" :key="index" :category="item"></product-section>

    <key-values></key-values>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import AppSlider from "~/components/AppSlider";
import ExploreCategory from "~/components/ExploreCategory";
import ShopByRecommendation from "~/components/ShopByRecommendation";
import ProductSection from "~/components/ProductSection";

import KeyValues from "~/components/KeyValues";
import 'swiper/swiper-bundle.min.css';


export default {
  name: 'IndexPage',
  components: {
    ProductSection,
    ShopByRecommendation,
    ExploreCategory,
    AppSlider,

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
