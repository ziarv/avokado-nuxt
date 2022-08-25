<template>
  <div>
    <section>
      <div class="mx-20 flex my-10 xs:!mx-10 xs:!my-10 sm:!mx-10">
        <nuxt-link
          to="/cart"
          class="text-xl text-lime-600 flex justify-between w-36 xs:!w-24 xs:!text-[14px] items-center">
          <img src="@/assets/img/li_chevron-right.svg" alt="li_chevron" class="xs:!w-[14px] xs:!h-[14px]"> Back to Cart
        </nuxt-link>
      </div>
    </section>

    <checkout-address @addressSelected="selectedAddress"/>

    <checkout-items-summary/>
    <delivery-dates @deliverySelected="selectedDelivery"/>


    <checkout-summary/>

  </div>
</template>

<script>
import {mapActions} from "vuex";
import CheckoutAddress from "~/components/checkout/CheckoutAddress";
import CheckoutItemsSummary from "~/components/checkout/CheckoutItemsSummary";
import CheckoutSummary from "~/components/checkout/CheckoutSummary";
import DeliveryDates from "~/components/checkout/DeliveryDates";


export default {
  name: "CheckoutPage",
  components: {CheckoutItemsSummary, CheckoutSummary, CheckoutAddress, DeliveryDates},
  layout: 'checkout',
  data() {
    return {
      address_id: null,
      delivery: {
        data: null,
        time: null,
      }
    }
  },
  computed: {
    cart_items() {
      return this.$store.state.cart.cart_items;
    },
    cart_data() {
      return this.$store.state.cart.cart_data;
    }
  },
  mounted() {
    this.getCartAction()
  },
  methods: {
    ...mapActions('cart', ['getCartAction']),
    selectedAddress(addressId) {
      this.address_id = addressId;
    },
    selectedDelivery(delivery) {
      this.delivery = delivery
    }
  }
}
</script>

<style scoped>

</style>
