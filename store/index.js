import Vuex from "vuex";
import * as getters from "./getters";
import mutations from "./mutations";
import * as actions from "./actions";
import home from "./modules/home";
import {KEY} from "@/constants";



const state = () => ({
  isLoading: false,
  key: KEY,
  city_id: '1',
  district_id: '1',
  country_id: '1',
  warehouse_id: '1',
  storeLanguageId: '1',
  requestSource: 'web',
});


// eslint-disable-next-line no-new,import/no-named-as-default-member
new Vuex.Store({
  strict: true, state, getters, mutations, actions, modules: {
    home
  }
});
