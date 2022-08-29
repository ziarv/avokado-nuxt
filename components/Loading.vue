<template>
  <div
    class="loadin-wrapper"
    :class="{hidden: !isLoading}">
    <img class="loading" alt="loading" src="@/assets/logo-1.gif"/>
  </div>
</template>

<script>
export default {
  name: "AppLoading",
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  },
  watch: {
    isLoading(value) {
      if (value) {
        document.body.classList.add('overflow_hide');
      } else {
        document.body.classList.remove('overflow_hide');
      }
    }
  }
}
</script>

<style scoped>
.loadin-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 111111;
  background-color: #1e1e1ee0;
}

.loadin-wrapper > img {
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;

}
</style>
