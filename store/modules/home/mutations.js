import * as types from "./mutation-types";

export default {
  [types.UPDATE_BANNER_SLIDER]: (state, data) => {
    state.banner_slider = data;
  },
  [types.UPDATE_CATEGORY_SLIDER_DATA]: (state, data) => {
    state.categorySliders = data;
  },
  [types.UPDATE_STATIC_DATA]: (state, data) => {
    state.staticContent = data;
  },
  [types.UPDATE_CATEGORY_LIST]: (state, data) => {
    state.categoriesList = data;
  },
  [types.UPDATE_SLIDER_STATUS]: (state, data) => {
    state.showSlider = data;
  },
  [types.UPDATE_ROOT]: (state, data) => {
    state.root = data;
  },
  [types.UPDATE_MENU_DATA]: (state, data) => {
    state.menu = data;
  },
  [types.LOCATION_POPUP_STATUS]: (state, status) => {
    state.locationPopUpStatus = status;
  },
  [types.PROMO_BANNERS]: (state, status) => {
    state.promo_banners = status;
  },
  [types.OCCASIONAL_CATEGORY]: (state, status) => {
    state.occasional_category = status;
  }
};
