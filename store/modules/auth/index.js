import mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const state = {
  status: false,
  points: {},
  otpSendResponse: {},
  otpVerifyResponse: {},
  billingAddress: {},
  shippingAddress: {}
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
