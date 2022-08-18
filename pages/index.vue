<template>
  <div>
    <app-slider></app-slider>
    <explore-category></explore-category>
    <shop-by-recommendation></shop-by-recommendation>
    <product-section></product-section>
    <promo-slider></promo-slider>
    <product-section :title="false"></product-section>
    <product-section :title="false"></product-section>
    <promo-slider></promo-slider>
    <product-section :title="false"></product-section>
    <key-values></key-values>
  </div>
</template>

<script>
import AppSlider from "~/components/AppSlider";
import ExploreCategory from "~/components/ExploreCategory";
import ShopByRecommendation from "~/components/ShopByRecommendation";
import ProductSection from "~/components/ProductSection";
import PromoSlider from "~/components/PromoSlider";
import KeyValues from "~/components/KeyValues";

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
}
</script>
