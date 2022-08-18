import * as types from "./mutation-types";

export const updateLocationPopupStatus = ({ commit }, status) => {
  commit(types.LOCATION_POPUP_STATUS, status);
};
export const fetchHomeData = ({ commit, rootState }) => {
  return new Promise((resolve, reject) => {
    this.$axios.$get(`/v3/home`, {
        params: {
          key: rootState.key,
          country_id: rootState.country_id,
          city_id: rootState.city_id,
          district_id: rootState.district_id,
          warehouse_id: rootState.warehouse_id,
          storeLanguageId: rootState.storeLanguageId,
          requestSource: rootState.requestSource
        }
      })
      .then(response => {
        commit(types.UPDATE_ROOT, response.data);
        commit(types.UPDATE_BANNER_SLIDER, response.data.banner_slider);
        commit(types.UPDATE_MENU_DATA, response.data.menu);
        commit(types.PROMO_BANNERS, response.data.promo_banners);
        commit(types.OCCASIONAL_CATEGORY, response.data.occasional_category);
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
};
