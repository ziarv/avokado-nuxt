import mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";
import ls from "@/services/ls";

const state = {
  cart_data: [],
  cart_items: [],
  cart_review: [],
  order_save: [],
  payment_method: "",
  payment_status: [],
  coupon: [],
  total: 0,
  minOrderAmount: 0,
  subtotal: 0,
  quote_id: ls.get("quote_id", null)
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
