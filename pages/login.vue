<template>
  <section>
    <div class="mx-20 flex mt-10 flex-row flex-wrap justify-end sm:!mx-10 sm:!mx-5">
<!--      <div class="sighn_login_btn w-full text-end my-10">-->
<!--        <button-->
<!--          class="login_sign_up px-[60px] py-[10px] login_block bg-[#ECECEC] text-[#848484] rounded-full">-->
<!--          {{ $t("pages.login.login") }}-->
<!--        </button>-->
<!--      </div>-->
      <div class="back_ground_img w-full h-[100%]">
        <div
          class="address_menual w-[50%] h-[100%] flex flex-row shadow-2xl flex-wrap bg-[#FFFFFF] rounded-[20px] signup_none_1 ">
          <div v-if="is_login" class="form w-full py-[40px] pl-[40px] pr-[80px] self-center">
            <form @submit.prevent="sendCode">
              <div class="name_area flex flex-row flex-wrap justify-between">
                <h1 class="w-full text-[32px] font-['futur-extra']"> {{ $t("pages.login.welcome") }}</h1>
              </div>
              <div class="mobile_number relative mb-5">
                <label for="" class="w-full text-[18px] block mt-5 mb-0"> {{ $t("pages.login.mobile_number") }}</label>
                <input
                  v-model="countryCode" readonly type="text"
                  class="absolute w-[7%] top-[62%] left-[4%] bg-[transparent]">
                <span> </span>
                <input
                  v-model="phoneNumber"
                  required
                  class="w-[100%] bg-[#ECECEC] py-[16px] rounded-md text=[#848484] placeholder:text=[#848484] pl-[75px] pr-[22px] outline-none mt-4"
                  type="number" :placeholder="$t('pages.login.login_placeholder')">
              </div>
              <div class="login_btn text-center">
                <button
                  type="submit"
                  class="rounded-full bg-[#7CB118] mb-5 py-2 px-[40px] uppercase text-[#FFFFFF]">
                  {{ $t('pages.login.send_access_code') }}
                </button>
                <!--              <div class="login_or_main">-->
                <!--                <div class="login_or flex justify-center items-center">-->
                <!--                  <hr class="w-[30%] mr-[20px]">-->
                <!--                  Or Login with-->
                <!--                  <hr class="w-[30%] ml-[20px]">-->
                <!--                </div>-->
                <!--              </div>-->
                <!--              <div class="google_facebook_icon flex justify-center">-->
                <!--                <button-->
                <!--                  class="w-[22%] flex justify-center items-center border-[1px] border-[#7CB118] border-[solid] rounded-[10px] mx-5 mt-5 py-1">-->
                <!--                  <img-->
                <!--                    src="@/assets/img/google_icon.svg" alt=""></button>-->
                <!--                <button-->
                <!--                  class="w-[22%] flex justify-center items-center border-[1px] border-[#7CB118] border-[solid] rounded-[10px] mx-5 mt-5 py-1">-->
                <!--                  <img-->
                <!--                    src="@/assets/img/Facebook.svg" alt=""></button>-->
                <!--              </div>-->
              </div>
            </form>
          </div>
          <div v-if="is_verify" class="form w-full py-[40px] pl-[40px] pr-[80px] self-center">
            <form @submit.prevent="verifyCode">
              <div class="name_area flex flex-row flex-wrap justify-between">
                <h1 class="w-full text-[32px] font-['futur-extra']">{{ $t('pages.login.verify_code') }}</h1>
              </div>
              <div class="relative mb-5">
                <label for="" class="w-full  text-[18px] block mt-5 mb-0"> {{
                    $t('pages.login.verification_code')
                  }} </label>
                <input
                  v-model="v_code"
                  class="w-[100%] pl-10 bg-[#ECECEC] py-[16px] rounded-md text=[#848484] placeholder:text=[#848484] pr-[22px] outline-none mt-4"
                  type="number" :placeholder="$t('pages.login.enter_verification_code')">
              </div>
              <div class="login_btn text-center">
                <button
                  type="submit"
                  class="rounded-full bg-[#7CB118] mb-5 py-2 px-[40px] uppercase text-[#FFFFFF]">
                  {{ $t('pages.login.verify_code') }}
                </button>
                <!--              <div class="login_or_main">-->
                <!--                <div class="login_or flex justify-center items-center">-->
                <!--                  <hr class="w-[30%] mr-[20px]">-->
                <!--                  Or Login with-->
                <!--                  <hr class="w-[30%] ml-[20px]">-->
                <!--                </div>-->
                <!--              </div>-->
                <!--              <div class="google_facebook_icon flex justify-center">-->
                <!--                <button-->
                <!--                  class="w-[22%] flex justify-center items-center border-[1px] border-[#7CB118] border-[solid] rounded-[10px] mx-5 mt-5 py-1">-->
                <!--                  <img-->
                <!--                    src="@/assets/img/google_icon.svg" alt=""></button>-->
                <!--                <button-->
                <!--                  class="w-[22%] flex justify-center items-center border-[1px] border-[#7CB118] border-[solid] rounded-[10px] mx-5 mt-5 py-1">-->
                <!--                  <img-->
                <!--                    src="@/assets/img/Facebook.svg" alt=""></button>-->
                <!--              </div>-->
              </div>
            </form>
          </div>
          <div v-if="is_register" class="form w-full py-[40px] pl-[40px] pr-[80px] self-center">
            <form @submit.prevent="registerUser">
              <div class="name_area flex flex-row flex-wrap justify-between">
                <h1 class="w-full text-[32px] font-['futur-extra']">
                  {{ $t('pages.login.new_account') }}
                </h1>
              </div>
              <div class="relative mb-5">
                <label for="" class="w-full text-[18px] block mt-5 mb-0">{{ $t('pages.login.first_name') }}</label>
                <input
                  v-model="customer.first_name"
                  required
                  class="w-[100%] bg-[#ECECEC] py-[16px] rounded-md text=[#848484] placeholder:text=[#848484]  pr-[22px] outline-none mt-4"
                  type="text" :placeholder="$t('pages.login.first_name')">
              </div>
              <div class="relative mb-5">
                <label for="" class="w-full text-[18px] block mt-5 mb-0">{{ $t('pages.login.last_name') }}</label>
                <input
                  v-model="customer.last_name"
                  required
                  class="w-[100%] bg-[#ECECEC] py-[16px] rounded-md text=[#848484] placeholder:text=[#848484]  pr-[22px] outline-none mt-4"
                  type="text" :placeholder="$t('pages.login.last_name')">
              </div>
              <div class="relative mb-5">
                <label for="" class="w-full text-[18px] block mt-5 mb-0">{{ $t('pages.login.email') }}</label>
                <input
                  v-model="customer.email"
                  required
                  class="w-[100%] bg-[#ECECEC] py-[16px] rounded-md text=[#848484] placeholder:text=[#848484]  pr-[22px] outline-none mt-4"
                  type="email" :placeholder="$t('pages.login.email')">
              </div>
              <div class="relative mb-5">
                <label for="" class="w-full text-[18px] block mt-5 mb-0">{{ $t('pages.login.ref_code') }}</label>
                <input
                  v-model="customer.ref_code"
                  class="w-[100%] bg-[#ECECEC] py-[16px] rounded-md text=[#848484] placeholder:text=[#848484] pr-[22px] outline-none mt-4"
                  type="email" :placeholder="$t('pages.login.ref_code')">
              </div>

              <div class="login_btn text-center">
                <button
                  type="submit"
                  class="rounded-full bg-[#7CB118] mb-5 py-2 px-[40px] uppercase text-[#FFFFFF]">
                  {{ $t('pages.login.register') }}
                </button>
                <!--              <div class="login_or_main">-->
                <!--                <div class="login_or flex justify-center items-center">-->
                <!--                  <hr class="w-[30%] mr-[20px]">-->
                <!--                  Or Login with-->
                <!--                  <hr class="w-[30%] ml-[20px]">-->
                <!--                </div>-->
                <!--              </div>-->
                <!--              <div class="google_facebook_icon flex justify-center">-->
                <!--                <button-->
                <!--                  class="w-[22%] flex justify-center items-center border-[1px] border-[#7CB118] border-[solid] rounded-[10px] mx-5 mt-5 py-1">-->
                <!--                  <img-->
                <!--                    src="@/assets/img/google_icon.svg" alt=""></button>-->
                <!--                <button-->
                <!--                  class="w-[22%] flex justify-center items-center border-[1px] border-[#7CB118] border-[solid] rounded-[10px] mx-5 mt-5 py-1">-->
                <!--                  <img-->
                <!--                    src="@/assets/img/Facebook.svg" alt=""></button>-->
                <!--              </div>-->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "LoginPage",
  data() {
    return {
      countryCode: '+966',
      phoneNumber: null,
      v_code: "",
      phone_verify: "",
      is_login: true,
      is_verify: false,
      is_register: false,
      customer: {
        first_name: "",
        last_name: "",
        email: "",
        ref_code: "",
        code: "",
        phone: ""
      }
    }
  },
  computed: {
    otp_send_response() {
      return this.$store.state.auth.otpSendResponse;
    },
    otp_verify_response() {
      return this.$store.state.auth.otpVerifyResponse;
    },
    customer_login() {
      return this.$store.state.auth.customer;
    },
    customer_local() {
      return this.$store.state.local.customer;
    },
  },
  mounted() {
    if (this.customer_local.customerId) {
      this.$toast.warning('Already Logged In.');
      this.$router.push({
        'path': this.localePath('/')
      })
    }
  },
  methods: {
    ...mapActions("auth", [
      "otpSendAction",
      "verifyOtpAction",
      "registerNewUserAccount"
    ]),
    sendCode() {
      if (this.phoneNumber.startsWith("966")) {
        this.phoneNumber = this.phoneNumber.replace(/^(966)/, "");
      }
      if (this.phoneNumber.length !== 9) {
        this.$toast.warning("invalid phone number");
        return false;
      }

      this.otpSendAction(this.phoneNumber).then(() => {
        this.v_code = "";
        this.phone_verify = this.otp_send_response.mobileNumber;
        this.is_login = false;
        this.is_verify = true;
        this.is_register = false;
      });
    },
    verifyCode() {
      this.verifyOtpAction({
        phone: this.phone_verify,
        code: this.v_code
      }).then(() => {
        if (this.otp_verify_response.customerId == null) {
          this.$toast.warning("OTP Verification Failed");
          return;
        }
        if (
          this.otp_verify_response.customerId === "" &&
          this.otp_verify_response.existingCustomer === "0"
        ) {
          this.is_login = false;
          this.is_verify = false;
          this.is_register = true;
          this.customer.phone = this.phone_verify;
          this.customer.code = this.v_code;
          this.$toast.warning("Please Register As new user.");
        } else {
          this.$store.commit('local/UPDATE_CUSTOMER', this.otp_verify_response)
          this.$router.push({
            path: this.localePath("/")
          });
        }
      });
    },
    registerUser() {
      this.registerNewUserAccount(this.customer).then(() => {
        this.$store.commit('local/UPDATE_CUSTOMER', this.customer_login)
        this.$toast.warning("Welcome.");
        this.$router.push({
          path: this.localePath("/")
        });
      });
    },
  }
}
</script>

<style scoped>

</style>
