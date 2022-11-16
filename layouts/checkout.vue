<template>
  <div>
    <AppLoading/>
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
import AppLoading from "~/components/Loading";
export default {
  name: "CheckoutLayout",
  components: {AppFooter, CheckoutHeader,AppLoading},
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale === 'ar' ? 'rtl' : 'ltr'
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
