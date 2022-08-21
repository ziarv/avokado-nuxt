import * as types from "./mutation-types";

export default {
  [types.UPDATE_MIN_ORDER_AMOUNT]: (state, data) => {
    state.minOrderAmount = data;
  },
  [types.UPDATE_CART_DATA]: (state, data) => {
    state.cart_data = data;
  },
  [types.UPDATE_CART_ITEMS_DATA]: (state, items) => {
    state.cart_items = items;
  },
  [types.UPDATE_QUOTE_ID]: (state, quoteId) => {
    state.quote_id = quoteId;
  },
  [types.UPDATE_CART_REVIEW]: (state, reviewData) => {
    state.cart_review = reviewData;
  },
  [types.ORDER_SAVE]: (state, orderSave) => {
    state.order_save = orderSave;
  },
  [types.PAYMENT_METHOD]: (state, method) => {
    state.payment_method = method;
  },
  [types.PAYMENT_STATUS]: (state, status) => {
    state.payment_status = status;
  },
  [types.COUPON_RESPONSE]: (state, coupon) => {
    state.coupon = coupon;
  }
};
