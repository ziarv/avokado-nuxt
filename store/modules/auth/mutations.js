import * as types from "./mutation-types";

export default {
  [types.UPDATE_STATUS]: (state, data) => {
    state.status = data;
  },
  [types.UPDATE_SEND_DATA]: (state, data) => {
    state.otpSendResponse = data;
  },
  [types.UPDATE_VERIFY_DATA]: (state, data) => {
    state.otpVerifyResponse = data;
  },
  [types.UPDATE_CUSTOMER_DATA]: (state, data) => {
    state.customer = data;
  }
};
