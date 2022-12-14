import mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const initialState = {
  single: [],
  searchProducts: []
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
};
