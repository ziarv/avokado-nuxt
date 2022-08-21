<template>
  <div>
    <app-slider></app-slider>
    <explore-category></explore-category>
    <shop-by-recommendation></shop-by-recommendation>
    <product-section></product-section>
    <promo-slider :slider="promo_banners.middle"></promo-slider>
    <product-section :title="false"></product-section>
    <product-section :title="false"></product-section>
    <promo-slider :slider="promo_banners.bottom"></promo-slider>
    <product-section :title="false"></product-section>
    <key-values></key-values>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import AppSlider from "~/components/AppSlider";
import ExploreCategory from "~/components/ExploreCategory";
import ShopByRecommendation from "~/components/ShopByRecommendation";
import ProductSection from "~/components/ProductSection";
import PromoSlider from "~/components/PromoSlider";
import KeyValues from "~/components/KeyValues";
import 'swiper/swiper-bundle.min.css';


export default {
  name: 'IndexPage',
  components: {
    ProductSection,
    ShopByRecommendation,
    ExploreCategory,
    AppSlider,
    PromoSlider,
    KeyValues,
  },
  computed: {
    promo_banners() {
      return this.$store.state.home.promo_banners;
    }
  },
  mounted() {
    this.fetchHomeData();
    this.getCartAction();
  },
  methods: {
    ...mapActions('home', ['fetchHomeData']),
    ...mapActions('cart', ['getCartAction'])
  },
}
</script>
