<template>
  <div>
    <section>
      <div class="mx-20 flex sm:!mx-10 md:!mx-10 sm:!mx-10">
        <div class="subscibtion my-5 w-full">
          <h1 class="sm:!text-[22px] sm:!my-[10px]">Add new address</h1>
          <h2 class="text-[22px] font-bold my-8 sm:!my-4 sm:!text-[16px]">Drop address from map</h2>
          <div class="google_map w-full">
            <avokado-google-map @locationSelected="locationUpdated"/>
          </div>
          <p class="text-center my-10 sm:!my-3 sm:!text-[10px] font-bold">OR</p>
        </div>
      </div>
    </section>
    <section>
      <form @submit.prevent="saveAddress">
        <div class="mx-20 flex sm:!mx-10 md:!mx-10 sm:!mx-10">
          <div class="address_menual w-full">
            <h1 class="text-[22px] font-bold mb-3 sm:!text-[16px]">Enter address manually</h1>
            <div class="form">
              <div class="address_enter">
                <input
                  v-model="type"
                  class="w-[100%] bg-[#ECECEC] py-[16px] rounded-md text=[#848484] placeholder:text=[#848484] px-[22px] outline-none my-4 sm:!my-1.5 sm:!h-[40px] sm:!px-[12px] sm:!py-[5px] sm:!text-[12px]"
                  type="text" placeholder="Address Name" required>
                <input
                  v-model="location.placeName"
                  class="w-[100%] bg-[#ECECEC] py-[16px] rounded-md text=[#848484] placeholder:text=[#848484] px-[22px] outline-none my-4 sm:!my-1.5 sm:!h-[40px] sm:!px-[12px] sm:!py-[5px] sm:!text-[12px]"
                  type="text" placeholder="Address" required>
                <input
                  v-model="optPhoneNumber"
                  class="w-[100%] bg-[#ECECEC] py-[16px] rounded-md text=[#848484] placeholder:text=[#848484] px-[22px] outline-none my-4 sm:!my-1.5 sm:!h-[40px] sm:!px-[12px] sm:!py-[5px] sm:!text-[12px]"
                  type="text" placeholder="Receiver Phone Number">
              </div>
              <div class="form_btn flex justify-end">
                <button
                  class="px-[45px] rounded-full text-[#FFFFFF] mt-2 mb-20 sm:!mb-0 text-base py-[8px] bg-[#7CB118] shadow-2xl sm:!pt-[3px] sm:!pb-[3px] sm:!pl-[25px] sm:!pr-[25px] sm:!text-[10px]">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
    <hr class="m-20 mt-16 sm:!m-10 sm:!mt-8 md:!mx-10">
  </div>
</template>

<script>
import {mapActions} from "vuex";
import AvokadoGoogleMap from "~/components/address/AvokadoGoogleMap";

export default {
  name: "AddPage",
  components: {AvokadoGoogleMap},
  data() {
    return {
      location: {
        lat: null,
        lng: null,
        placeName: null,
      },
      optPhoneNumber: "",
      type: "Home"
    }
  },
  computed: {
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
    }
  },
  methods: {
    ...mapActions('user', ['createMyAddress']),
    locationUpdated(location) {
      this.location = location;
    },
    saveAddress() {
      const address = {
        firstname: this.customer.customerData.firstName,
        lastname: this.customer.customerData.lastName,
        telephone: this.customer.customerData.mobileNo,
        customer_address_opt_phone: this.optPhoneNumber,
        street: this.location.placeName,
        city: this.customer.customerData.customerCity,
        customer_address_lat: this.location.lat,
        customer_address_lng: this.location.lng,
        customerId: this.customer.customerId,
      };
      this.createMyAddress(address).then(() => {
        this.$router.push({
          path: this.localePath("/addresses"),
        });
      });
    }
  }
}
</script>

<style scoped>

</style>
