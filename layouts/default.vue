<template>
  <div>
    <app-header/>
    <div class="container mx-auto py-[100px] px-[100px]">
      <Nuxt/>
    </div>
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
