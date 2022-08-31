import mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const state = {
  city_id: 1,
  location_selected: false,
  warehouse_id: 1,
  quote_id: null,
  customer_id: null,
  customer: {},
  tmp_order_id: null,
  tmp_payment_method: null,
  tmp_order_save_response: null,
  lang: 'en',
  storeLanguageId: 1,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
