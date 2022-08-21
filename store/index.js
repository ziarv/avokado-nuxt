import Vuex from "vuex";
import * as getters from "./getters";
import mutations from "./mutations";
import * as actions from "./actions";
import home from "./modules/home";
import products from "./modules/products";
import category from "./modules/category";
import {KEY} from "@/constants";
import ls from "@/services/ls";


const lang = ls.get('lang', 'en');
const state = () => ({
  isLoading: false,
  key: KEY,
  city_id: ls.get('city_id', 1),
  warehouse_id: ls.get('warehouse_id', 1),
  district_id: '1',
  country_id: '1',
  storeLanguageId: lang === 'ar' ? 2 : 1,
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
    modules: {home, products, category}
  });
};
export default createStore
