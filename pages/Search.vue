<template>
  <section class="flex px-10 ">
    <div class="flex flex-row flex-wrap justify-between xs:flex-col sm:flex-col">
      <div class="heading flex flex-row flex-wrap justify-between mx-4 ">
        <h1> {{ $t('pages.search.search_product') }} </h1>
      </div>
      <product-list v-for="(product,index) in products" :key="index" class="mb-5" ca :product="product"></product-list>
    </div>
  </section>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "SearchPage",
  data() {
    return {
      query: ""
    }
  },
  computed: {
    products() {
      return this.$store.state.products.searchProducts
    }
  },
  watch: {
    '$route.query.keyword'() {
      this.query = this.$route.query.keyword;
    }
  },
  mounted() {
    this.query = this.$route.query.keyword
    this.fetchSingleBySearch(this.query)
  },
  methods: {
    ...mapActions('products', ['fetchSingleBySearch'])
  }
}
</script>

<style scoped>

</style>
