import mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const initialState = {
  products: [],
  totalPages: 0,
  currentPage: 1,
  categoriesList: [],
  response: []
};

export default {
  namespaced: true,

  state: initialState,

  getters: getters,

  actions: actions,

  mutations: mutations
};
