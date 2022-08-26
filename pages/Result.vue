<template>
  <div></div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "PaymentResult",
  computed: {
    payment_status() {
      return this.$store.state.cart.payment_status;
    },
    tmp_order_id() {
      return this.$store.state.local.tmp_order_id;
    },
    tmp_payment_method() {
      return this.$store.state.local.tmp_payment_method;
    }
  },
  mounted() {
    const request = {};
    request.checkout_id = this.$route.query.id;
    request.resource_path_url = this.$route.query.resourcePath;
    request.order_id = this.tmp_order_id;
    request.payment_method = this.tmp_payment_method;
    if (!this.tmp_order_id) {
      this.$router.push({
        path: "/"
      });
    }
    this.paymentStatus(request).then(() => {
      this.$toast.success(this.payment_status.message);
      if (this.payment_status.status) {
        this.$router.push({
          path: "/"
        });
      } else {
        this.$router.push({
          path: "/checkout"
        });
      }
      this.$store.commit('local/UPDATE_TMP_ORDER_ID', null);
      this.$store.commit('local/UPDATE_TMP_PAYMENT_METHOD', null);
      this.$store.commit('local/UPDATE_TMP_ORDER_SAVE_RESPONSE', null);
    });
  },
  methods: {
    ...mapActions("cart", ["paymentStatus"])
  },
};
</script>

<style scoped></style>
