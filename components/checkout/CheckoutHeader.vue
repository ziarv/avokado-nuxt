<template>
  <header>
    <div class="mx-20 xs:!mx-10 flex header_inner justify-between items-center md:!mx-10">
      <div class="flex">
        <button id="hame_buger" type="button" class="xs:!block sm:!block">
          <img src="@/assets/img/ham_buger.svg" alt="">
        </button>
        <nuxt-link  :to="localePath('/')">
          <img src="@/assets/img/logo.svg" class="xs:!w-[80px] xs:!h-[29px]" alt="">
        </nuxt-link>
      </div>
      <div class="header_heading flex justify-end">
        <a href="javascript:void(0)">
          <h4 class="text-xl xs:!text-[10px]">Need Help?1234567</h4>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "CheckoutHeader"
}
</script>

<style scoped>

</style>
