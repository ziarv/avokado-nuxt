import mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";
import ls from "../../../services/ls";

const initialState = {
  status: false,
  customer: ls.getObject("customer") ? ls.getObject("customer") : {},
  points: {},
  otpSendResponse: {},
  otpVerifyResponse: {},
  billingAddress: {},
  shippingAddress: {}
};

export default {
  namespaced: true,
  state: initialState,
  getters: getters,
  actions: actions,
  mutations: mutations
};
