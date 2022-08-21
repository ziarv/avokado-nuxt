<template>
  <section>
    <div class="mx-20 flex mt-10 flex-row flex-wrap justify-end xs:!mx-10 sm:!mx-5">
      <div class="sighn_login_btn w-full text-end my-10">
        <button
          class="login_sign_up px-[60px] py-[10px] login_block bg-[#ECECEC] text-[#848484] rounded-full">Login
        </button>
      </div>
      <div class="back_ground_img w-full h-[100%]">
        <div
          class="address_menual w-[50%] h-[100%] flex flex-row shadow-2xl flex-wrap bg-[#FFFFFF] rounded-[20px] signup_none_1 ">

          <div class="form w-full py-[40px] pl-[40px] pr-[80px] self-center">
            <form @submit.prevent="sendCode">
              <div class="name_area flex flex-row flex-wrap justify-between">
                <h1 class="w-full text-[32px] font-['futur-extra']">Hello! Welcome back!</h1>
              </div>
              <div class="mobile_number relative mb-5">
                <label for="" class="w-full text-[18px] block mt-5 mb-0">Mobile Number</label>
                <input
                  v-model="countryCode" readonly type="text"
                  class="absolute w-[7%] top-[62%] left-[4%] bg-[transparent]">
                <span> </span>
                <input
                  v-model="phoneNumber"
                  required
                  class="w-[100%] bg-[#ECECEC] py-[16px] rounded-md text=[#848484] placeholder:text=[#848484] pl-[75px] pr-[22px] outline-none mt-4"
                  type="number" placeholder="Enter  your mobile number">
              </div>
              <div class="login_btn text-center">
                <button
                  type="submit"
                  class="rounded-full bg-[#7CB118] mb-5 py-2 px-[40px] uppercase text-[#FFFFFF]">
                  Send Access Code
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
    }
  },
  computed: {
    otp_send_response() {
      return this.$store.state.auth.otpSendResponse;
    },
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
        alert('invalid phone number');
        return false;
      }

      this.otpSendAction(this.phone).then(() => {
        this.v_code = "";
        this.phone_verify = this.otp_send_response.mobileNumber;
        this.is_login = false;
        this.is_verify = true;
        this.is_register = false;
      });
    }
  }
}
</script>

<style scoped>

</style>
