<template>
  <div>
    <header class="2xl:py-[10px] xs:py-[0px] sm:py-[0px]">
      <div
        class="2xl:mx-20 2xl:flex header_inner 2xl:flex-row 2xl:flex-wrap xs:flex xs:flex-wrap sm:flex sm:flex-wrap xs:flex-col-reverse xs:mx-0 sm:flex-col-reverse sm:mx-0">
        <div
          class="px_main_bara flex flex-row flex-wrap 2xl:w-[50%] xs:px-10 xs:w-full sm:px-10 sm:w-full items-center xs:justify-between sm:justify-between">
          <button id="hame_buger" type="button" class="block ml-2 mr-2" @click="userSidebar">
            <img src="@/assets/img/ham_buger.svg" alt="ham_buger"/>
          </button>
          <div class="col-4 xs:w-[80px] sm:w-[80px]">
            <nuxt-link :to="localePath('/')">
              <img src="@/assets/img/logo_en.png" class="max-w-[150px]" alt="avokad logo">
            </nuxt-link>
          </div>
          <div
            class="option_setting_px flex items-center input-set 2xl:mx-[48px] xs:mx-[0px] sm:mx-[0px] relative p-[9px] w-[56.7%] 2xl:bg-[#ECECEC] xs:bg-[transparent] sm:bg-[transparent] rounded-[2px] h-[42px] flex-row">
            <form action="" @submit.prevent="searchKeyword">
              <input
                v-model="keyword"
                type="text"
                class="font-light bg-[transparent] text-[#ADADAD] h-[100%] placeholder:text-[#ADADAD] xs:hidden sm:hidden"
                :placeholder="$t('search_for_items')">
            </form>
            <div class="none_input">
              <input type="text" :placeholder="$t('search_for_items')">
            </div>
            <div
              class="search-icon 2xl:!w-[55px] xl:!w-[85px] 2xl:bg-[#7CB118] xs:bg-[transparent] sm:bg-[transparent] flex items-center justify-center rounded-tl-[0px] rounded-tr-[2px] rounded-br-[2px] rounded-bl-[0px] w-[85px] h-[100%] absolute right-[0%] top-[0%]">
              <img src="@/assets/img/search_icon.svg" class="w-[24px] h-[24px] xs:hidden sm:hidden" alt="">
              <img
                src="@/assets/img/search_icon_black.svg"
                class="search_icon_black w-[14px] xs:mx-[5px] sm:mx-[5px] h-[14px] 2xl:hidden xs:block sm:block"
                alt="">
              <!--              <img-->
              <!--                src="@/assets/img/favrite.svg"-->
              <!--                class="w-[21px] h-[16px] mx-[5px] 2xl:hidden xs:block sm:block" alt="">-->
              <nuxt-link
                :to="localePath('/cart')">
                <img
                  src="@/assets/img/shopping.svg"
                  class="w-[20px] h-[14px] mx-[5px] 2xl:hidden xs:block sm:block" alt="">
              </nuxt-link>
            </div>
          </div>
        </div>
        <div
          class="bara_px_setting flex flex-row flex-wrap items-center 2xl:w-[50%] xs:w-full sm:px-10 sm:w-full xs:bg-[#7CB118] sm:bg-[#7CB118] xs:px-10">
          <div class="flex h-[24px] xs:w-[50%] sm:w-[50%]">
           <span
             class="flex location-img w-[50%] font-[600] items-center xs:text-[#FFFFFF] xs:text-[10px] sm:text-[#FFFFFF] sm:text-[13px]">
             <img src="@/assets/img/location-icon.svg" class="w-[20px] h-[24px] mr-[10px] xs:hidden sm:hidden" alt="">
             <span  class="w-[140px]">{{$t("deliver_to")}}</span>
           </span>
            <select
              v-model="city_id"
              class="w-[51%] font-bold bg-[transparent] 2xl:text-[#7CB118] xs:text-[#FFFFFF] xs:text-[10px] sm:text-[#FFFFFF] sm:text-[13px]"
              @change="updateLocation()">
              <option v-for="(location,index) in service_locations" :key="index" :value="location.id">
                {{ location.city_name_en }}
              </option>

            </select>
          </div>
          <div class="flex laiba-iqbal_09 w-[50%] xs:w-[50%] sm:w-[50%] items-center">

            <nuxt-link :to="localePath('/cart')">
              <img src="@/assets/img/shopping.svg" class="w-[27px] h-[25px] mx-[5px] xs:hidden sm:hidden" alt="">
            </nuxt-link>
            <div
              v-if="customer.customerId"
              class="laiba-iqbal 2xl:w-[52%] justify-end ml-[15px] flex items-center xs:w-[100%] sm:w-[100%]">
              <p class="mr-1">{{ customer.customerData.firstName }} {{ customer.customerData.lastName }}</p>
              <i class="text-red-700 fa fa-sign-out cursor-pointer" @click="logoutUser"></i>
            </div>
            <div
              v-else
              class="laiba-iqbal 2xl:w-[52%] justify-end ml-[15px] flex items-center xs:w-[100%] sm:w-[100%]">
              <nuxt-link :to="localePath('/login')">{{$t('login')}}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- User Sidebar -->
    <div class="side_bar_back z-10" :class=" {side_bar_id_block : user_sidebar}" @click="userSidebar"></div>
    <aside
      id="side_bar_id_pl"
      ref="user_sidebar" class="w-64" :class="{side_bar_id_block:user_sidebar}"
      aria-label="Sidebar">
      <div class="overflow-y-auto py-4 px-6 bg-[#FFFFFF]">
        <button class="cros" @click="userSidebar">
          <img src="@/assets/img/cross.svg" alt="">
        </button>
        <div class="side-bar-heading justify-center">
          <div class="id user_Edit">
            <img src="@/assets/img/user_edit.svg" class="w-[100%]" alt="">
            <a href="#" class="use_edit">
              <img src="@/assets/img/camera.svg" alt="">
            </a>
          </div>
          <!--          <button class="w-full font-bold mt-8">User <span class="text-[#7CB118]">EDIT</span></button>-->
        </div>
        <hr class="mt-10 mb-0">
        <div class="special_card_location flex justify-between flex-row flex-wrap items-center w-[100%]">
          <div class="special_card_heading flex items-center">
            <img src="@/assets/img/about_icon.svg" alt="">
            <h5 class="ml-5">{{$t('menu_popup.about')}} </h5>
          </div>
          <img src="@/assets/img/back_arrow.svg" alt="">
        </div>

        <div
          v-if="customer.customerId"
          class="special_card_location flex justify-between flex-row flex-wrap items-center w-[100%]">
          <div class="special_card_heading flex items-center">
            <img src="@/assets/img/about_icon.svg" alt="">
            <nuxt-link :to="localePath('/addresses')">
              <h5 class="ml-5">{{$t('menu_popup.addresses')}}</h5>
            </nuxt-link>
          </div>
          <img src="@/assets/img/back_arrow.svg" alt="">

        </div>
        <div class="special_card_location flex justify-between flex-row flex-wrap items-center w-[100%]">
          <div class="special_card_heading flex items-center">
            <img src="@/assets/img/team_condition.svg" alt="">
            <h5 class="ml-5">{{$t('menu_popup.terms_conditions')}}</h5>
          </div>
          <img src="@/assets/img/back_arrow.svg" alt="">
        </div>
        <div class="special_card_location flex justify-between flex-row flex-wrap items-center w-[100%]">
          <div class="special_card_heading flex items-center">
            <img src="@/assets/img/cell_icon.svg" alt="">
            <h5 class="ml-5">{{$t('menu_popup.help_center')}}</h5>
          </div>
          <img src="@/assets/img/back_arrow.svg" alt="">
        </div>
        <div
          v-if="customer.customerId"
          class="special_card_location flex justify-between flex-row flex-wrap items-center w-[100%]">
          <div class="special_card_heading flex items-center">
            <img src="@/assets/img/login.svg" alt="">
            <h5 class="ml-5 cursor-pointer" @click="logoutUser">{{ $t("logout") }}</h5>
          </div>
        </div>

        <div v-else class="special_card_location flex justify-between flex-row flex-wrap items-center w-[100%]">
          <div class="special_card_heading flex items-center">
            <img src="@/assets/img/about_icon.svg" alt="">
            <nuxt-link :to="localePath('/login')">
              <h5 class="ml-5">{{ $t("login") }}</h5>
            </nuxt-link>
          </div>
          <img src="@/assets/img/back_arrow.svg" alt="">

        </div>

        <div class="language_btn_main">
          <div class="language_btn">
            <button
              class="english rounded-full border-[1px] border-[solid] border-[#7CB118] py-2 px-10 my-3 text-[#7CB118]"
              :class="{language_btn_button: $i18n.locale === 'en'}"
              @click="switchLang('en')">
              English
            </button>
          </div>
          <div class="language_btn">
            <button
              :class="{language_btn_button: $i18n.locale === 'ar'}"
              class="arabic rounded-full border-[1px] border-[solid] border-[#7CB118] py-2 px-10 my-3 text-[#7CB118]"
              @click="switchLang('ar')">
              Arabic
            </button>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "AppHeader",
  data() {
    return {
      user_sidebar: false,
      city_id: 1,
      keyword: ""
    }
  },
  computed: {
    service_locations() {
      return this.$store.state.home.service_locations;
    },
    cityId() {
      return this.$store.state.local.city_id;
    },
    customer() {
      return this.$store.state.local.customer;
    },
  },
  async mounted() {
    await this.getCartAction();
    this.city_id = this.cityId;
    this.fetchServiceLocation();
    document.body.classList.remove('overflow_hide');
  },
  methods: {
    ...mapActions('home', ['fetchServiceLocation']),
    ...mapActions('cart', ['getCartAction']),
    switchLang(lang) {
      this.$i18n.setLocale(lang)
      this.$store.commit('local/UPDATE_LANG', lang)
      this.$store.commit('local/UPDATE_LANG_ID', lang === 'ar' ? 2 : 1)
      this.user_sidebar = false;
    },
    searchKeyword() {
      this.$router.push({
        path: this.localePath('/search'),
        query: {
          keyword: this.keyword
        }
      })
    },
    logoutUser() {
      this.$store.commit('local/UPDATE_CUSTOMER', []);
      this.$store.commit('local/UPDATE_QUOTE_ID', null);
      this.$toast.warning("Logged Out");
      location.reload();
    },
    userSidebar() {
      this.user_sidebar = !this.user_sidebar;
      document.body.classList.remove('overflow_hide');
    },
    updateLocation() {
      const city = this.service_locations.filter((item) => {
        return item.id === this.city_id;
      });
      this.$store.commit('local/UPDATE_CITY_ID', this.city_id);
      this.$store.commit('local/UPDATE_WAREHOUSE_ID', city[0].warehouse_id);
      location.reload();
    }
  }
}
</script>

<style scoped>

</style>
