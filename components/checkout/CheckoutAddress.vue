<template>
  <section>
    <div class="mx-20 flex sm:!mx-10 sm:!mx-10">
      <div class="wishlist">
        <h1 class="sm:!text-[16px]">{{ $t('pages.checkout.checkout') }}</h1>
        <div class="checkout_para flex w-full justify-between items-center">
          <p class="text-xl font-normal my-6 sm:!hidden">
            {{ $t('pages.checkout.select_address') }}
          </p>
          <nuxt-link :to="localePath(`/addresses/add`)" class="text-xl text-lime-600 uppercase sm:!text-[12px]">
            {{ $t('pages.checkout.add_new_address') }}
          </nuxt-link>
        </div>
        <div ref="product_main" class="product_main w-full my-4" @click="showAddresses()">
          <div class="product_1 product_main_child product_10987" :class="{product_main_3:showCard}">
            <div class="location_home flex items-center">
              <div class="product_img mr-5">
                <img
                  src="@/assets/img/location_home.svg" class="sm:!h-[40px] sm:!w-[40px] sm:!ml-0"
                  alt="">
              </div>
              <div class="product_name">
                <h6 class="font-bold text-xl sm:!text-[16px]">{{ $t('pages.checkout.address') }}</h6>
                <p class="text-[#848484] text-lg sm:!text-[16px]">{{ selectedAddress }}</p>
              </div>
            </div>
            <div class="product_quality location_home_2 flex justify-end mr-5 sm:!mr-2.5">
              <img
                src="@/assets/img/li_chevron-down_green.svg" :class="{product_main_4:showCard}"
                class="sm:!w-[19px] sm:!h-[11px]" alt="">
            </div>
          </div>
          <div class="product_main_1" :class="{product_main_2:showCard}">
            <div
              v-for="(address ,index) in addresses " :key="index" class="product_1 product_10987"
              @click="selectAddress(address)">
              <div class="location_home flex items-center">
                <div class="product_img mr-5">
                  <img src="@/assets/img/location_home.svg" class="sm:!h-[40px] sm:!w-[40px] sm:!ml-0" alt="">
                </div>
                <div class="product_name">
                  <h6 class="font-bold text-xl sm:!text-[16px]">{{ address.type }}</h6>
                  <p class="text-[#848484] text-lg sm:!text-[16px]"> {{ address.street }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "CheckoutAddress",
  data() {
    return {
      showCard: false,
      address_id: null,
      selectedAddress: "Please Select Address"
    }
  },
  computed: {
    addresses() {
      return this.$store.state.user.addresses;
    },
    customer() {
      return this.$store.state.local.customer;
    }
  },
  mounted() {
    this.fetchAddresses(this.customer.customerId);
  },
  methods: {
    ...mapActions('user', ['fetchAddresses']),
    showAddresses() {
      this.showCard = !this.showCard;
    },
    selectAddress(address) {
      this.address_id = address.address_id;
      this.selectedAddress = address.street;
      this.$emit('addressSelected', address.address_id)
    }
  },
}
</script>

<style scoped>

</style>
