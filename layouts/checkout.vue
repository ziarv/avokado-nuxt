<template>
  <div>
    <checkout-header/>
    <Nuxt/>
    <app-footer/>
  </div>
</template>

<script>
// import AOS from 'aos'
import CheckoutHeader from "~/components/checkout/CheckoutHeader";
import AppFooter from "~/components/AppFooter";
import 'aos/dist/aos.css'

export default {
  name: "CheckoutLayout",
  components: {AppFooter, CheckoutHeader},
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    }
  },
  mounted() {
    // AOS.init();
  }
}
</script>

<style scoped>

</style>
