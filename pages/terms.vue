<template>
  <section class="max-w-[80%] m-auto p-5 bg-white rounded-2xl my-10 shadow">
    <div class="mb-3">
      <h1 class="text-3xl sm:text-2xl md:text-2xl  text-center"> {{ $t("pages.terms.heading") }} </h1>
    </div>
    <div class="w-[80%] m-auto mb-5">
      <p class="text-2xl sm:text-1xl md:text-1xl mb-5">{{ $t("pages.terms.p") }}</p>
      <ul class="list-disc">
        <li>{{ $t("pages.terms.u1") }}</li>
        <li>{{ $t("pages.terms.u2") }}</li>
        <li>{{ $t("pages.terms.u3") }}</li>
        <li>{{ $t("pages.terms.u4") }}</li>
        <li>{{ $t("pages.terms.u5") }}</li>
        <li>{{ $t("pages.terms.u6") }}</li>
        <li>{{ $t("pages.terms.u7") }}</li>
        <li>{{ $t("pages.terms.u8") }}</li>
      </ul>

    </div>
  </section>
</template>

<script>

export default {
  name: 'AboutPage',
}
</script>
