<template>
  <section>
    <div class="m-auto  flex-row flex-wrap flex my-14 justify-center">
      <div class="main_content w-[76%] sm:!w-[100%] sm:mt-[50px]">
        <div class="flex flex-row flex-wrap justify-between">
          <div class="heading flex flex-row flex-wrap justify-between mx-4">
            <h1> {{ $t('pages.search.search_product') }} </h1>
          </div>
          <product-list
v-for="(product,index) in products" :key="index" class="mb-5" ca
                        :product="product"></product-list>
        </div>
      </div>
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
