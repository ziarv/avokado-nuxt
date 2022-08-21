import mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";
import {RECOMMENDED_PRODUCTS} from "~/store/modules/home/mutation-types";


const state = () => ({
  root: [],
  banner_slider: [],
  menu: [],
  locationPopUpStatus: false,
  showSlider: false,
  staticContent: [],
  categorySliders: [],
  promo_banners: [],
  recommended_products: [],
  occasional_category: [],
});

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
