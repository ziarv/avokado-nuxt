<template>
  <section>
    <div class="mx-20 flex mt-20 mb-40 flex-row flex-wrap sm:!mx-10 sm:!mt-10 sm:!mb-20 sm:!mx-5">
      <div class="wishlist">
        <div class="delivery_address w-[100%] flex justify-between items-center">
          <h1 class="font-['futur-extra'] text-[30px] sm:!text-[16px]">{{$t('pages.address.addresses')}}</h1>
          <nuxt-link :to="localePath(`/addresses/add`)"   class="uppercase text-[#7CB118] sm:!text-[12px]">
            {{$t('pages.checkout.add_new_address')}}
          </nuxt-link>
        </div>
        <div class="product sm:!h-[40px] sm:!py-[10px] sm:!px-[15px]">
          <h5>{{$t('pages.address.address')}}</h5>
          <h5>{{$t('pages.address.remove')}}</h5>
        </div>
        <div v-for="(address, index) in addresses" :key="index" class="product_1">
          <div class="product_img h-[100%] mr-[15px] location_home_main sm:!w-[40px]">
            <img src="@/assets/img/location_home.svg" class="location_home" alt="">
          </div>
          <div class="product_name product_name_location">
            <p class="sm:!text-[12px]">
              {{ address.street }}
            </p>
          </div>
          <div class="product_btn_remove">
            <button @click="deleteAddress(address.address_id)"><i class="fa-solid fa-xmark sm:!text-[14px]"></i>
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "IndexPage",
  data() {
    return {}
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
    if (!this.customer.customerId) {
      this.$toast.warning('Please login.');
      this.$router.push({
        'path': this.localePath('/login')
      })
      return;
    }
    this.fetchAddresses(this.customer.customerId);
  },
  methods: {
    ...mapActions('user', ['fetchAddresses', 'deleteMyAddress']),
    deleteAddress(id) {
      this.deleteMyAddress(id).then(() => {
        this.fetchAddresses(this.customer.customerId);
      });
    }
  }
}
</script>

<style scoped>

</style>
