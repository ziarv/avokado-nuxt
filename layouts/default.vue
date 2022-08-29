<template>
  <div>
    <AppLoading />
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
  mounted() {
    // AOS.init();
  }
}
</script>

<style scoped>
</style>
