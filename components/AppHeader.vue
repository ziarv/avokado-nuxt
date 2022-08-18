<template>
  <header class="2xl:py-[10px] xs:py-[0px] sm:py-[0px]">
    <div
      class="2xl:mx-20 2xl:flex header_inner 2xl:flex-row 2xl:flex-wrap xs:flex xs:flex-wrap sm:flex sm:flex-wrap xs:flex-col-reverse xs:mx-0 sm:flex-col-reverse sm:mx-0">
      <div
        class="px_main_bara flex flex-row flex-wrap 2xl:w-[50%] xs:px-10 xs:w-full sm:px-10 sm:w-full items-center xs:justify-between sm:justify-between">
        <button id="hame_buger" type="button" class="hidden xs:!block sm:!block">
          <img src="@/assets/img/ham_buger.svg" alt="ham_buger"/>
        </button>
        <div class="col-4 xs:w-[80px] sm:w-[80px]">
          <NuxtLink to="/">
            <img src="@/assets/img/logo.svg" alt="avokad logo">
          </NuxtLink>
        </div>
        <div
          class="option_setting_px flex items-center input-set 2xl:mx-[48px] xs:mx-[0px] sm:mx-[0px] relative p-[9px] w-[56.7%] 2xl:bg-[#ECECEC] xs:bg-[transparent] sm:bg-[transparent] rounded-[2px] h-[42px] flex-row">
          <select id="" name="" class="bg-[transparent] font-semibold text-[14px] xs:hidden sm:hidden">
            <option value="">All Categories</option>
            <option value="1">categories</option>
            <option value="2">categories</option>
            <option value="3">categories</option>
            <option value="4">categories</option>
          </select>
          <span class="2xl:flex items-center mx-[12px] xs:hidden sm:hidden"> | </span>
          <input
            type="text"
            class="font-light bg-[transparent] text-[#ADADAD] h-[100%] placeholder:text-[#ADADAD] xs:hidden sm:hidden"
            placeholder="Search for items...">
          <div class="none_input">
            <input type="text" placeholder="Search for items...">
          </div>
          <div
            class="search-icon 2xl:!w-[55px] xl:!w-[85px] 2xl:bg-[#7CB118] xs:bg-[transparent] sm:bg-[transparent] flex items-center justify-center rounded-tl-[0px] rounded-tr-[2px] rounded-br-[2px] rounded-bl-[0px] w-[85px] h-[100%] absolute right-[0%] top-[0%]">
            <img src="@/assets/img/search_icon.svg" class="w-[24px] h-[24px] xs:hidden sm:hidden" alt="">
            <img
              src="@/assets/img/search_icon_black.svg"
              class="search_icon_black w-[14px] xs:mx-[5px] sm:mx-[5px] h-[14px] 2xl:hidden xs:block sm:block"
              alt="">
            <img
              src="@/assets/img/favrite.svg"
              class="w-[21px] h-[16px] mx-[5px] 2xl:hidden xs:block sm:block" alt="">
            <img
              src="@/assets/img/shopping.svg"
              class="w-[20px] h-[14px] mx-[5px] 2xl:hidden xs:block sm:block" alt="">
          </div>
        </div>
      </div>
      <div
        class="bara_px_setting flex flex-row flex-wrap items-center 2xl:w-[50%] xs:w-full sm:px-10 sm:w-full xs:bg-[#7CB118] sm:bg-[#7CB118] xs:px-10">
        <div class="flex h-[24px] xs:w-[50%] sm:w-[50%]">
           <span
             class="flex location-img w-[50%] font-[600] items-center xs:text-[#FFFFFF] xs:text-[10px] sm:text-[#FFFFFF] sm:text-[13px]">
           <img src="@/assets/img/location-icon.svg" class="w-[20px] h-[24px] mr-[10px] xs:hidden sm:hidden" alt="">
             <img
               src="@/assets/img/location-icon-white.svg" class="w-[10px] xs:h-[12px] sm:h-[12px] mr-[10px]"
               alt="">
                        Deliver to
                    </span>
          <select
            id="" name=""
            class="w-[51%] font-bold bg-[transparent] 2xl:text-[#7CB118] xs:text-[#FFFFFF] xs:text-[10px] sm:text-[#FFFFFF] sm:text-[13px]">
            <option value="jaddah">Jeddah,Saudi Arabia</option>
            <option value="jaddah">jaddah</option>
            <option value="jaddah">jaddah</option>
            <option value="jaddah">jaddah</option>
            <option value="jaddah">jaddah</option>
          </select>
        </div>
        <div class="flex laiba-iqbal_09 w-[50%] xs:w-[50%] sm:w-[50%] items-center">
          <img src="@/assets/img/favrite.svg" class="w-[27px] h-[25px] mx-[5px] xs:hidden sm:hidden" alt="">
          <img src="@/assets/img/shopping.svg" class="w-[27px] h-[25px] mx-[5px] xs:hidden sm:hidden" alt="">
          <div
            class="laiba-iqbal 2xl:w-[52%] justify-end ml-[15px] flex items-center xs:w-[100%] sm:w-[100%]">
            <img
              id="side_bar_id_block" src="@/assets/img/laiba-iqbal.svg" alt=""
              class="xs:w-[20px] xs:h-[20px] sm:w-[20px] sm:h-[20px]">
            <select
              id="side_bar_id_block_1" name="service"
              class="bg-[transparent] 2xl:mb-[11px] ml-[5px] xs:mb-[0px] xs:w-[10%] xs:block sm:block sm:mb-[0px] sm:w-[10%] sm:block">
              <option value="1" selected>Laiba Iqbal</option>
              <option value="2">Laiba Iqbal</option>
              <option value="3">Laiba Iqbal</option>
              <option value="4">Laiba Iqbal</option>
              <option value="5">Laiba Iqbal</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </header>

</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>

</style>
