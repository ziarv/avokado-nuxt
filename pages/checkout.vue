<template>
  <div>
    <section>
      <div class="mx-20 flex my-10 sm:!mx-10 sm:!my-10 sm:!mx-10">
        <nuxt-link
          :to="localePath(`/cart`)"
          class="text-xl text-lime-600 flex justify-between w-36 sm:!w-24 sm:!text-[14px] items-center">
          <img src="@/assets/img/li_chevron-right.svg" alt="li_chevron" class="sm:!w-[14px] sm:!h-[14px]">
          {{ $t('pages.checkout.back_to_cart') }}
        </nuxt-link>
      </div>
    </section>

    <checkout-address @addressSelected="selectedAddress"/>
    <checkout-items-summary/>
    <delivery-dates @deliverySelected="selectedDelivery"/>
    <promo-code/>
    <additional-notes @deliveryNoteChanged="setDeliveryNote"></additional-notes>
    <payment-method @paymentSelected="paymentSelected"/>


    <checkout-summary @placeOrder="placeOrder"/>


  </div>
</template>

<script>
import {mapActions} from "vuex";
import CheckoutAddress from "~/components/checkout/CheckoutAddress";
import CheckoutItemsSummary from "~/components/checkout/CheckoutItemsSummary";
import CheckoutSummary from "~/components/checkout/CheckoutSummary";
import DeliveryDates from "~/components/checkout/DeliveryDates";
import PaymentMethod from "~/components/checkout/PaymentMethod";
import PromoCode from "~/components/checkout/PromoCode";
import AdditionalNotes from "~/components/checkout/AdditionalNotes";


export default {
  name: "CheckoutPage",
  components: {
    AdditionalNotes,
    PaymentMethod, PromoCode, CheckoutItemsSummary, CheckoutSummary, CheckoutAddress, DeliveryDates
  },
  layout: 'checkout',
  data() {
    return {
      address_id: null,
      payment_method: null,
      comment: "",
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
    },
    order_save() {
      return this.$store.state.cart.order_save;
    },
    customer() {
      return this.$store.state.local.customer;
    },
    min_order_amount() {
      return this.$store.state.cart.minOrderAmount;
    },
  },
  mounted() {

    if (!this.customer.customerId) {
      this.$toast.warning('Please login.');
      this.$router.push({
        'path': this.localePath('/login')
      })
      return;
    }

    this.getCartAction();
    this.getMinimumOrderAmount();

    this.$store.commit('local/UPDATE_TMP_ORDER_ID', null);
    this.$store.commit('local/UPDATE_TMP_PAYMENT_METHOD', null);
    this.$store.commit('local/UPDATE_TMP_ORDER_SAVE_RESPONSE', null);
  },
  methods: {
    ...mapActions('cart', ['getCartAction', 'getMinimumOrderAmount', 'cartOrderSave']),
    selectedAddress(addressId) {
      this.address_id = addressId;
    },
    selectedDelivery(delivery) {
      this.delivery = delivery
    },
    paymentSelected(method) {
      this.payment_method = method.payment_method
    },
    setDeliveryNote(note) {
      this.comment = note
    },
    placeOrder() {
      if (this.cart_items.length <= 0) {
        this.$toast.warning("Empty Cart");
        return;
      }
      if (this.cart_data.sub_total < this.min_order_amount) {
        this.$toast.warning(this.$t("cart.minimum_order_amount_is") + " " + this.minimum_order_amount + " " + this.$t("currency_code"));
        return;
      }
      const order = {
        delivery_date: this.delivery.data,
        deliver_time_interval: this.delivery.time,
        comment: this.comment,
        use_wallet: false,
        payment_method: this.payment_method
      };
      if (!this.address_id) {
        this.$toast.warning("Please Select Address.");
        return;
      }
      if (!this.delivery.data || !this.delivery.time) {
        this.$toast.warning("Please Select Delivery Details.");
        return;
      }
      if (!this.payment_method) {
        this.$toast.warning("Please Select Payment Method.");
        return;
      }
      this.$store.commit('UPDATE_LOADING', true);
      this.cartOrderSave(order).then(() => {
        this.$store.commit('UPDATE_LOADING', false);
        if (this.order_save.status.toString() === "200") {
          if (this.order_save.order.checkout_id) {
            this.$router.push({
              path: this.localePath("/payment")
            });
          } else {
            this.$toast.success("Order Placed");
            this.$router.push({
              path: this.localePath("/thanks"),
            });
          }
        } else {
          this.$toast.success(this.order_save.message);
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
