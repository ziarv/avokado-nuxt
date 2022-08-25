import mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const state = {
  deliveryDatesAndTime: [],
  paymentMethods: [],
  shippingMethods: [],
  orderReview: [],
  orderReviewRequest: [],
  orderSaveResponse: [],
  coupon: [],
  priceDetails: [],
  hyperPayStatusCheck: []
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
