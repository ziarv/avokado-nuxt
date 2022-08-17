<template>
  <div>
    <app-slider></app-slider>
    <explore-category></explore-category>
  </div>
</template>

<script>
import AppSlider from "~/components/AppSlider";
import ExploreCategory from "~/components/ExploreCategory";
export default {
  name: 'IndexPage',
  components: {ExploreCategory, AppSlider},
}
</script>
