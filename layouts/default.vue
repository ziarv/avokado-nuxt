<template>
  <div>
    <app-header/>
      <Nuxt/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from "~/components/AppHeader";
import AppFooter from "~/components/AppFooter";

export default {
  name: "DefaultLayout",
  components: {AppFooter, AppHeader}
}
</script>

<style scoped>

</style>
