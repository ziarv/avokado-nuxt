import mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";


const state = () => ({
  root: [],
  banner_slider: [],
  menu: [],
  locationPopUpStatus: false,
  showSlider: false,
  staticContent: [],
  categorySliders: [],
  promo_banners: [],
  occasional_category: [],
});

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
