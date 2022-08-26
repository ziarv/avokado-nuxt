<template>
  <section id="hyperpay" class="grid text-center my-10">
    <h1 class="text-3xl mb-2">Payment</h1>
  </section>
</template>

<script>
export default {
  name: "PaymentPage",
  computed: {
    order() {
      return this.$store.state.cart.order_save.order;
    },
    payment_method() {
      return this.$store.state.cart.payment_method;
    }
  },
  mounted() {

    window.wpwlOptions = {
      style: "card",
      locale: this.$i18n.locale,
      paymentTarget: "_top",
      iframeStyles: {
        "card-number": {
          color: "#ff0000",
          "font-size": "16px",
          "font-family": "monospace"
        },
        cvv: {
          color: "#0000ff",
          "font-size": "16px",
          "font-family": "Arial"
        }
      }
    };
    if (Object.keys(this.order).length <= 0) {
      this.$router.push({
        path: "/"
      });
    } else {
      this.loadHyperPayForm();
    }
  },
  methods: {
    loadHyperPayForm() {
      this.$store.commit('local/UPDATE_TMP_ORDER_ID', null);
      this.$store.commit('local/UPDATE_TMP_PAYMENT_METHOD', null);
      this.$store.commit('local/UPDATE_TMP_ORDER_SAVE_RESPONSE', null);
      const script = document.createElement("script");
      script.src = `https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${this.order.checkout_id}`;
      if (process.env.BASE_URL === "https://avokado.sa") {
        script.src = `https://oppwa.com/v1/paymentWidgets.js?checkoutId=${this.order.checkout_id}`;
      }
      script.async = true;
      document.body.appendChild(script);
      const form = document.createElement("form");
      form.action = "";
      form.setAttribute("class", "paymentWidgets");
      if (
        this.payment_method === "hyperpay_creditcard" ||
        this.payment_method === "ncbcard"
      ) {
        form.setAttribute("data-brands", "VISA MASTER");
      }
      if (this.payment_method === "madapay") {
        form.setAttribute("data-brands", "MADA");
      }
      if (this.payment_method === "stcpay") {
        form.setAttribute("data-brands", "STC_PAY");
      }
      this.$store.commit('local/UPDATE_TMP_ORDER_ID', this.order.order_id);
      this.$store.commit('local/UPDATE_TMP_PAYMENT_METHOD', this.payment_method);
      this.$store.commit('local/UPDATE_TMP_ORDER_SAVE_RESPONSE', this.order);
      document.getElementById("hyperpay").appendChild(form);
      this.$toast.success("Please Process Payment");
    }
  }
}
</script>

<style scoped>

</style>
