<template>
  <client-only>
    <div>
      <div class="top_header flex justify-center flex-row flex-wrap">
        <div class="container flex justify-between flex-row flex-wrap sm:flex-col">
          <div class="flex items-center justify-between flex-row flex-wrap">
            <p class="text-[#000000] mr-[10px]">{{ $t('deliver_to') }}</p>
            <div class="location-links">
              <a
                v-for="(location,index) in service_locations"
                :key="index" href="javascript:void(0)"
                class="text-[#A3CE51]"
                :class="{'!text-[#E55B7F]' : location.id.toString() === cityId.toString() }"
                @click="selectLocation(location)"
              >
                <span v-if="$i18n.locale === 'ar'">{{ location.city_name_ar }}</span>
                <span v-else>{{ location.city_name_en }}</span>
              </a>
            </div>
          </div>
          <div class="relative h-[35px] grow sm:m-4 m-2 mx-[2%] ">
            <form method="GET" @submit.prevent="searchKeyword">
              <input
                v-model="keyword"
                type="text"
                class="w-[100%] border-[1px] h-[100%] border-[solid] bg-[#fff] border-[#E6E6E6] outline-none px-[25px] py-[9px] placeholder:text-[#CCCCCC] text-[#CCCCCC] text-[15px]"
                :placeholder="$t('search_for_items')"
                required
              >
              <button class="bg-[#a3ce51] search_btn w-[40px] p-[8px] absolute top-0 right-0" style="height: inherit">
                <img src="@/assets/img/search_icon.svg" class="h-[100%] w-[100%]" alt="search_icon">
              </button>
            </form>
          </div>
          <div class="flex items-center justify-between">
            <div class="hidden sm:block">
              <nuxt-link :to="localePath('/')">
                <img src="@/assets/img/logo.svg" class="w-[150px] h-[40px]" alt="">
              </nuxt-link>
            </div>
            <div class="flex items-center top-icons">
              <div class="">
              <span v-if="customer.customerId"><a href="javascript:void(0)" class="text-[#A3CE51]" @click="logoutUser">{{
                  $t("logout")
                }}</a></span>
                <span v-else><nuxt-link :to="localePath('/login')" class="text-[#A3CE51]">{{
                    $t('login')
                  }}</nuxt-link></span>
              </div>
              <div class="">
                <nuxt-link :to="localePath('/cart')">
                  <img src="@/assets/img/shopping_bag.svg" class="w-[35px]" alt="shopping_bag">
                </nuxt-link>
              </div>
              <div class=" hidden text-[#A3CE51]" style="visibility: hidden">
                <a href="#">Daily Offers</a>
              </div>
              <div class="cursor-pointer" @click="userSidebar">
                <img src="@/assets/img/ham_buger.svg" class="w-[35px]" alt="shopping_bag">
              </div>
            </div>
          </div>
        </div>
      </div>

      <header class="flex header_seccond flex-row flex-wrap justify-center sm:p-0 sm:hidden">
        <div class="container flex flex-row flex-wrap justify-between">
          <div class="text-center flex sm:justify-center sm:w-full sm:hidden">
            <nuxt-link :to="localePath('/')">
              <img src="@/assets/img/logo.svg" class="w-[200px]" alt="">
            </nuxt-link>
          </div>
          <nav class="items-center top-nav">
            <ul>
              <li v-for="(category,index) in menu" :key="index">
                <nuxt-link
                  :to="localePath(`/category/${category.id}/${category.category_slug}?cid=${category.id}`)"
                  :class="{'!text-[#E55B7F]' : category.id == $route.query.cid }"
                >
                  {{ category.name }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
          <div class="flex items-center md:hidden">
            <a href="#" class="text-[#da374a]" style="visibility: hidden">Daily Offers</a>
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
              <nuxt-link :to="localePath('/about')">
                <h5 class="ml-5">{{ $t('menu_popup.about') }} </h5>
              </nuxt-link>
            </div>
            <img src="@/assets/img/back_arrow.svg" alt="">
          </div>

          <div
            v-if="customer.customerId"
            class="special_card_location flex justify-between flex-row flex-wrap items-center w-[100%]">
            <div class="special_card_heading flex items-center">
              <img src="@/assets/img/about_icon.svg" alt="">
              <nuxt-link :to="localePath('/addresses')">
                <h5 class="ml-5">{{ $t('menu_popup.addresses') }}</h5>
              </nuxt-link>
            </div>
            <img src="@/assets/img/back_arrow.svg" alt="">

          </div>
          <div class="special_card_location flex justify-between flex-row flex-wrap items-center w-[100%]">
            <div class="special_card_heading flex items-center">
              <img src="@/assets/img/team_condition.svg" alt="">
              <nuxt-link :to="localePath('/terms')">
                <h5 class="ml-5">{{ $t('menu_popup.terms_conditions') }}</h5>
              </nuxt-link>
            </div>
            <img src="@/assets/img/back_arrow.svg" alt="">
          </div>
          <div class="special_card_location flex justify-between flex-row flex-wrap items-center w-[100%]">
            <div class="special_card_heading flex items-center">
              <img src="@/assets/img/cell_icon.svg" alt="">
              <h5 class="ml-5">{{ $t('menu_popup.help_center') }}</h5>
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
  </client-only>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "AppHeader2",
  data() {
    return {
      user_sidebar: false,
      mobile_search: false,
      city_id: 1,
      keyword: ""
    }
  },
  computed: {
    service_locations() {
      return this.$store.state.home.service_locations;
    },
    menu() {
      return this.$store.state.home.menu;
    },
    cityId() {
      return this.$store.state.local.city_id;
    },
    customer() {
      return this.$store.state.local.customer;
    },
    location_selected() {
      return this.$store.state.local.location_selected;
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

    selectLocation(location) {
      this.$store.commit('local/UPDATE_CITY_ID', location.id);
      this.$store.commit('local/UPDATE_WAREHOUSE_ID', location.warehouse_id);
      this.$store.commit('local/UPDATE_LOCATION_SELECTED', true);
      window.location.reload();
    },
    switchLang(lang) {
      this.$i18n.setLocale(lang)
      this.$store.commit('local/UPDATE_LANG', lang)
      this.$store.commit('local/UPDATE_LANG_ID', lang === 'ar' ? 2 : 1)
      this.userSidebar();
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
      document.body.classList.toggle('overflow_hide');
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
