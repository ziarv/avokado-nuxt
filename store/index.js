import Vuex from "vuex";
import * as getters from "./getters";
import mutations from "./mutations";
import * as actions from "./actions";
import home from "./modules/home";
import products from "./modules/products";
import category from "./modules/category";
import local from "./modules/local";
import cart from "./modules/cart";
import auth from "./modules/auth";
import user from "./modules/user";
import checkout from "./modules/checkout";
import {KEY} from "@/constants";

const state = () => ({
  isLoading: false,
  key: KEY,
  district_id: '1',
  country_id: '1',
  requestSource: 'web',
});

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    strict: true,
    state,
    getters,
    mutations,
    actions,
    modules: {home, products, category, cart, local, auth, user, checkout}
  });
};
export default createStore
