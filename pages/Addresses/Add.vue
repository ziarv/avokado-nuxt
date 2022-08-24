<template>
  <div>
    <section>
      <div class="mx-20 flex xs:!mx-10 md:!mx-10 sm:!mx-10">
        <div class="subscibtion my-5 w-full">
          <h1 class="xs:!text-[22px] xs:!my-[10px]">Add new address</h1>
<!--          <div class="flex">-->
<!--                    <span class="flex location-img xs:!text-[10px] xs:!items-center">-->
<!--                        <img src="@/assets/img/location-icon.svg" class="xs:!w-[10px] xs:!h-[12px] xs:!mr-[5px]" alt="">-->
<!--                        Deliver to-->
<!--                    </span>-->
<!--            <select class="xs:!text-[10px] bg-[transparent]">-->
<!--              <option value="jaddah">Jeddah,Saudi Arabia</option>-->
<!--              <option value="jaddah">jaddah</option>-->
<!--              <option value="jaddah">jaddah</option>-->
<!--              <option value="jaddah">jaddah</option>-->
<!--              <option value="jaddah">jaddah</option>-->
<!--            </select>-->
<!--          </div>-->
          <h2 class="text-[22px] font-bold my-8 xs:!my-4 xs:!text-[16px]">Drop address from map</h2>
          <div class="google_map w-full">
            <iframe
              class="rounded-[20px] w-full xs:!h-[200px]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d54065.48734402186!2d74.19969250000001!3d32.1207917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1659725910176!5m2!1sen!2s"
              width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <p class="text-center my-10 xs:!my-3 xs:!text-[10px] font-bold">OR</p>
        </div>
      </div>
    </section>

    <section>
      <div class="mx-20 flex xs:!mx-10 md:!mx-10 sm:!mx-10">
        <div class="address_menual w-full">
          <h1 class="text-[22px] font-bold mb-3 xs:!text-[16px]">Enter address manually</h1>
          <div class="form">
            <div class="name_area flex flex-row flex-wrap justify-between">
              <input
                type="text"
                class="w-[48%] bg-[#ECECEC] py-[16px] rounded-md text=[#848484] placeholder:text=[#848484] px-[22px] outline-none my-4 xs:!my-1.5 xs:!h-[40px] xs:!px-[12px] xs:!py-[5px] xs:!text-[12px]"
                placeholder="Name">
              <input
                type="text"
                class="w-[48%] bg-[#ECECEC] py-[16px] rounded-md text=[#848484] placeholder:text=[#848484] px-[22px] outline-none my-4 xs:!my-1.5 xs:!h-[40px] xs:!px-[12px] xs:!py-[5px] xs:!text-[12px]"
                placeholder="Area">
            </div>
            <div class="address_enter">
              <input
                class="w-[100%] bg-[#ECECEC] py-[16px] rounded-md text=[#848484] placeholder:text=[#848484] px-[22px] outline-none my-4 xs:!my-1.5 xs:!h-[40px] xs:!px-[12px] xs:!py-[5px] xs:!text-[12px]"
                type="text" placeholder="Address">
              <input
                class="w-[100%] bg-[#ECECEC] py-[16px] rounded-md text=[#848484] placeholder:text=[#848484] px-[22px] outline-none my-4 xs:!my-1.5 xs:!h-[40px] xs:!px-[12px] xs:!py-[5px] xs:!text-[12px]"
                type="number" placeholder="Phone Number">
              <textarea
                class="w-[100%] bg-[#ECECEC] py-[16px] resize-none rounded-md text=[#848484] placeholder:text=[#848484] px-[22px] outline-none my-4 xs:!my-1.5 xs:!text-[12px] xs:!px-[12px] xs:!py-[5px]"
                cols="30" rows="10" placeholder="Extra address details(Optional)"></textarea>
            </div>
            <div class="form_btn flex justify-end">
              <button
                class="px-[45px] rounded-full text-[#FFFFFF] mt-2 mb-20 xs:!mb-0 text-base py-[8px] bg-[#7CB118] shadow-2xl xs:!pt-[3px] xs:!pb-[3px] xs:!pl-[25px] xs:!pr-[25px] xs:!text-[10px]">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="m-20 mt-16 xs:!m-10 xs:!mt-8 md:!mx-10">
  </div>
</template>

<script>
export default {
  name: "AddPage"
}
</script>

<style scoped>

</style>
