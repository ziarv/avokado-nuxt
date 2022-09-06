<template>
  <section class="max-w-[80%] m-auto p-5 bg-white rounded-2xl my-10 shadow">
    <div class="mb-3">
      <h1 class="text-3xl sm:text-2xl md:text-2xl  text-center"> {{ $t("pages.about.about_us") }} </h1>
    </div>
    <div class="w-[80%] m-auto mb-5">
      <h1 class="text-3xl sm:text-2xl md:text-2xl  text-center">{{ $t("pages.about.heading") }} </h1>
      <p class="text-2xl sm:text-1xl md:text-1xl ">{{ $t("pages.about.p1") }}</p>
      <p class="text-2xl sm:text-1xl md:text-1xl ">{{ $t("pages.about.p2") }}</p>
    </div>
    <div class="w-[80%] m-auto mb-5">
      <h1 class="text-3xl sm:text-2xl md:text-2xl text-center">{{ $t("pages.about.quality") }} </h1>
      <p class="text-2xl sm:text-1xl md:text-1xl ">{{ $t("pages.about.quality_desc") }}</p>
    </div>
    <div class="w-[80%] m-auto mb-5">
      <h1 class="text-3xl sm:text-2xl md:text-2xl  text-center">{{ $t("pages.about.vision") }} </h1>
      <p class="text-2xl sm:text-1xl md:text-1xl "> {{ $t("pages.about.vision_desc") }}</p>
    </div>
  </section>
</template>

<script>

export default {
  name: 'AboutPage',
  head() {
    return {
      title: this.$t("pages.about.about_us")
    };
  },
}
</script>
