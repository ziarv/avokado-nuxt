<template>
  <div>
    <AppLoading/>
    <app-header/>
    <Nuxt/>
    <app-footer/>
  </div>
</template>

<script>
// import AOS from 'aos'
import AppHeader from "~/components/AppHeader";
import AppFooter from "~/components/AppFooter";
import 'aos/dist/aos.css'
import AppLoading from "~/components/Loading";

export default {
  name: "DefaultLayout",
  components: {AppLoading, AppFooter, AppHeader},
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale === 'ar' ? 'rtl' : 'ltr'
      }
    }
  },
  computed: {
    lang() {
      return this.$store.state.local.lang;
    }
  },
  mounted() {
    if (this.$i18n.locale !== this.lang) {
      // this.$i18n.setLocale(this.lang);
      // location.reload();
    }
  }
}
</script>

<style scoped>
</style>
