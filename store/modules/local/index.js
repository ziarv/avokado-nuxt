import mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const state = {
  city_id: 1,
  warehouse_id: 1,
  quote_id: null,
  customer_id: null,
  customer: {},
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
