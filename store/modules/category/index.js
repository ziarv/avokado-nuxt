import mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const state = {
  products: [],
  totalPages: 0,
  currentPage: 1,
  categoriesList: [],
  response: []
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
