<template>
  <section>
    <div class="mx-20 flex mt-20 mb-40 flex-row flex-wrap xs:!mx-10 xs:!mt-10 xs:!mb-20 sm:!mx-5">
      <div class="wishlist">
        <div class="delivery_address w-[100%] flex justify-between items-center">
          <h1 class="font-['futur-extra'] text-[30px] xs:!text-[16px]">Addresses</h1>
          <nuxt-link to="/addresses/add" class="uppercase text-[#7CB118] xs:!text-[12px]">Add new Address</nuxt-link>
        </div>
        <div class="product xs:!h-[40px] xs:!py-[10px] xs:!px-[15px]">
          <h5>Address</h5>
          <h5>Remove</h5>
        </div>
        <div v-for="(address, index) in addresses" :key="index" class="product_1">
          <div class="product_img h-[100%] mr-[15px] location_home_main xs:!w-[40px]">
            <img src="@/assets/img/location_home.svg" class="location_home" alt="">
          </div>
          <div class="product_name product_name_location">
            <p class="xs:!text-[12px]">
              {{ address.street }}
            </p>
          </div>
          <div class="product_btn_remove">
            <button @click="deleteAddress(address.address_id)"><i class="fa-solid fa-xmark xs:!text-[14px]"></i>
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
        'path': '/login'
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
