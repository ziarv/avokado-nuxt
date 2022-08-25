import * as types from "./mutation-types";

export default {
  [types.UPDATE_DELIVERY_DATES_AND_TIME]: (state, data) => {
    state.deliveryDatesAndTime = data;
  },
  [types.UPDATE_PAYMENT_METHODS]: (state, data) => {
    state.paymentMethods = data;
  },
  [types.UPDATE_SHIPPING_METHODS]: (state, data) => {
    state.shippingMethods = data;
  },
  [types.UPDATE_ORDER_REVIEW]: (state, data) => {
    state.orderReview = data;
  },
  [types.UPDATE_ORDER_REVIEW_REQUEST]: (state, data) => {
    state.orderReviewRequest = data;
  },
  [types.UPDATE_ORDER_SAVE_RESPONSE]: (state, data) => {
    state.orderSaveResponse = data;
  },
  [types.UPDATE_COUPON]: (state, data) => {
    state.coupon = data;
  },
  [types.UPDATE_PRICE_DETAIL]: (state, data) => {
    state.priceDetails = data;
  },
  [types.UPDATE_HYPERPAY_STATUS]: (state, data) => {
    state.hyperPayStatusCheck = data;
  }
};
