import * as types from "./mutation-types";

export default {
  [types.UPDATE_USER_ADDRESSES]: (state, data) => {
    state.addresses = data;
  },
  [types.UPDATE_USER_BILLING_ADDRESSES]: (state, data) => {
    state.billing = data;
  },
  [types.UPDATE_USER_SHIPPING_ADDRESSES]: (state, data) => {
    state.shipping = data;
  },
  [types.UPDATE_USER_ORDERS]: (state, data) => {
    state.orders = data;
  }
};
