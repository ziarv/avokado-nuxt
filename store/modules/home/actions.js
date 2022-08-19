import * as types from "./mutation-types";

export const updateLocationPopupStatus = ({commit}, status) => {
  commit(types.LOCATION_POPUP_STATUS, status);
};
export const fetchHomeData = ({commit, rootState}) => {
  // return new Promise((resolve, reject) => {
  return  window.$nuxt.$axios.$get(`/v3/home`, {
    progress: true,
    params: {
      key: rootState.key,
      country_id: rootState.country_id,
      city_id: rootState.city_id,
      district_id: rootState.district_id,
      warehouse_id: rootState.warehouse_id,
      storeLanguageId: rootState.storeLanguageId,
      requestSource: rootState.requestSource
    }
  }).then(response => {
      commit(types.UPDATE_ROOT, response);
      commit(types.UPDATE_BANNER_SLIDER, response.banner_slider);
      commit(types.UPDATE_MENU_DATA, response.menu);
      commit(types.PROMO_BANNERS, response.promo_banners);
      commit(types.OCCASIONAL_CATEGORY, response.occasional_category);
      // resolve(response);
    });
  // });
};
