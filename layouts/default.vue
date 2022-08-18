<template>
  <div>
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
export default {
  name: "DefaultLayout",
  components: {AppFooter, AppHeader},
  mounted() {
    // AOS.init();
  }
}
</script>

<style scoped>

</style>
