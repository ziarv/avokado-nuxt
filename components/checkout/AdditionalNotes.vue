<template>
  <section>
    <div class="mx-20 flex flex-row flex-wrap sm:!mx-10 sm:!mx-10">
      <div class="promo_code">
        <h1 class="sm:!text-[16px] sm:!mb-0">{{ $t('pages.checkout.additional_information') }}</h1>
        <div class="promo_code_input">
          <input
            v-model="deliveryNotes" type="text" placeholder="Delivery Instructions"
            class="bg-[#ECECEC] py-[16px] rounded-md text=[#848484] placeholder:text=[#848484] px-[22px] outline-none my-4 sm:!my-1.5 sm:!h-[40px] sm:!px-[12px] sm:!py-[5px] sm:!text-[12px]">
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
  },
  watch: {
    deliveryNotes() {
      this.$emit('deliveryNoteChanged', this.deliveryNotes);
    }
  }
}
</script>

<style scoped>

</style>
