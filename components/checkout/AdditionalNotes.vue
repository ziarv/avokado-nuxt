<template>
  <section>
    <div class="mx-20 flex flex-row flex-wrap xs:!mx-10 sm:!mx-10">
      <div class="promo_code">
        <h1 class="xs:!text-[16px] xs:!mb-0">Additional Information</h1>
        <div class="promo_code_input">
          <input
            v-model="deliveryNotes" type="text" placeholder="Delivery Instructions"
            class="bg-[#ECECEC] py-[16px] rounded-md text=[#848484] placeholder:text=[#848484] px-[22px] outline-none my-4 xs:!my-1.5 xs:!h-[40px] xs:!px-[12px] xs:!py-[5px] xs:!text-[12px]">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AdditionalNotes",
  data() {
    return {
      deliveryNotes: ''
    }
  }
}
</script>

<style scoped>

</style>
