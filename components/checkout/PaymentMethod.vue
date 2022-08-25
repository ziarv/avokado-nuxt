<template>
  <div>
    <section>
      <div class="mx-20 flex flex-row flex-wrap xs:!mx-10 sm:!mx-10">
        <div class="promo_code">
          <h1 class="xs:!text-[16px]">Payment Method</h1>
          <a id="payment_methood" href="javascript:void(0)">
            <div class="promo_code_input" @click="showPaymentMethods">
              <div class="promo_code_input_1">
                <img src="@/assets/img/money.svg" class="xs:!w-[25px] xs:!h-[25px]" alt="">
                <p v-if="selectedPaymentMethod" class="xs:!text-[14px]">{{ selectedPaymentMethod.label }}</p>
                <p v-else class="xs:!text-[14px]">Cash on delivery (COD)</p>
              </div>
              <p class="xs:!text-[12px]">Change</p>
            </div>
          </a>
        </div>
      </div>
    </section>
    <div class="side_bar_back" :class="{side_bar_id_block:popupShow}" @click="popupShow = false"></div>
    <aside id="side_bar_pay" :class="{side_bar_id_block:popupShow}" class="w-64" aria-label="Sidebar">
      <div class="overflow-y-auto py-4 px-6 bg-gray-50 bg-[#FFFFFF]">
        <div class="cros" @click="popupShow = false"><img src="@/assets/img/cross.svg" alt=""></div>
        <div class="side-bar-heading">
          <h1>Payment Method</h1>
          <p>Select the payment method you want to use</p>
        </div>
        <div class="overflow_auto">
          <div class="overflow_auto_1">
            <div v-for="(method,index) in paymentMethods" :key="index" class="btn_set">
              <button class="visa_btn" @click="selectPaymentMethod(method,$event)">
                <img v-if="method.value === 'madapay'" src="@/assets/img/mada.svg" alt="">
                <img v-else-if="method.value === 'stcpay'" src="@/assets/img/stcpay.png" alt="">
                <img v-else-if="method.value === 'hyperpay_creditcard'" src="@/assets/img/visa.svg" alt="">
                <img v-else-if="method.value === 'cashondelivery'" src="@/assets/img/money.svg" alt="">
                <img v-else src="@/assets/img/money.svg" alt="">
              </button>
              <p class="text-center">{{ method.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "PaymentMethod",
  data() {
    return {
      selectedPaymentMethod: null,
      popupShow: false
    }
  },
  computed: {
    paymentMethods() {
      return this.$store.state.checkout.paymentMethods;
    }
  },
  mounted() {
    this.fetchPaymentMethods()
  },
  methods: {
    ...mapActions('checkout', ['fetchPaymentMethods']),
    showPaymentMethods() {
      this.popupShow = !this.popupShow;
    },
    async selectPaymentMethod(method, event) {
      this.selectedPaymentMethod = method;
      const items = document.querySelectorAll('.btn_set > button');
      await items.forEach((item) => {
        item.classList.remove('btn_setting_side');
      });
      event.target.closest('button').classList.toggle('btn_setting_side');
      this.popupShow = !this.popupShow;
      this.$emit('paymentSelected', {
        payment_method: this.selectedPaymentMethod.value,
      });
    }
  }
}
</script>

<style scoped>


</style>
