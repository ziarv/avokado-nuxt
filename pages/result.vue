<template>
  <div>
    <div v-if="!status && !failed" class="grid  text-center my-10">
      <h1 class="text-3xl mb-2"> Checking Payment Status</h1>
    </div>
    <div v-if="status && !failed" class="grid  text-center my-10">
      <h1 class="text-3xl mb-2">Payment Successfully Processed</h1>
      <img class="mx-auto mb-2" src="@/assets/img/thank_you.png" alt="thank_you">
      <h1 class="text-2xl "> {{ $t("pages.thanks.thanks_description") }} </h1>
      <p>{{ $t("pages.thanks.order_number") }} {{ order_number }}.</p>
      <nuxt-link class="font-bold text-blue-800" :to="localePath(`/`)">Go to home</nuxt-link>
    </div>
    <div v-if="failed" class="grid  text-center my-10">
      <h1 class="text-3xl mb-2">Payment Failed</h1>
      <p> Please Contact With Support for further details your order number {{ order_number }}</p>
      <nuxt-link class="font-bold text-blue-800" :to="localePath(`/`)">Go to home</nuxt-link>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "PaymentResult",
  data() {
    return {
      status: false,
      failed: false,
      order_number: null
    }
  },
  computed: {
    payment_status() {
      return this.$store.state.cart.payment_status;
    },
    tmp_order_id() {
      return this.$store.state.local.tmp_order_id;
    },
    tmp_order_save_response() {
      return this.$store.state.local.tmp_order_save_response;
    },
    tmp_payment_method() {
      return this.$store.state.local.tmp_payment_method;
    }
  },
  mounted() {
    const request = {};
    request.checkout_id = this.$route.query.id;
    request.resource_path_url = this.$route.query.resourcePath;
    request.order_id = this.order_number = this.tmp_order_id;
    request.payment_method = this.tmp_payment_method;
    if (!this.tmp_order_id) {
      this.$router.push({
        path: "/"
      });
      this.$toast.warning("No Payment Session Found");
    }
    this.$store.commit('UPDATE_LOADING', true);
    this.paymentStatus(request).then(() => {
      this.$store.commit('UPDATE_LOADING', false);
      this.$toast.success(this.payment_status.message);
      if (this.payment_status.status) {
        this.status = true;
        this.$store.commit('cart/ORDER_SAVE', this.tmp_order_save_response);
      } else {
        this.failed = true;
        this.$store.commit('local/UPDATE_TMP_ORDER_ID', null);
        this.$store.commit('local/UPDATE_TMP_PAYMENT_METHOD', null);
        this.$store.commit('local/UPDATE_TMP_ORDER_SAVE_RESPONSE', null);
        // this.$router.push({
        //   path: this.localePath("/checkout")
        // });
      }
    });
  },
  methods: {
    ...mapActions("cart", ["paymentStatus"])
  },
};
</script>

<style scoped></style>
