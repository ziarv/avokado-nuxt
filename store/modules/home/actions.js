import * as types from "./mutation-types";

export const updateLocationPopupStatus = ({commit}, status) => {
  commit(types.LOCATION_POPUP_STATUS, status);
};
export const fetchHomeData = ({commit, rootState}) => {
  // return new Promise((resolve, reject) => {
  return window.$nuxt.$axios.$get(`/v3/home`, {
    progress: true,
    params: {
      key: rootState.key,
      country_id: rootState.country_id,
      city_id: rootState.local.city_id,
      district_id: rootState.district_id,
      warehouse_id: rootState.local.warehouse_id,
      storeLanguageId: rootState.local.storeLanguageId,
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
export const fetchHomeRecommendedProducts = ({commit, rootState}) => {
  // return new Promise((resolve, reject) => {
  return window.$nuxt.$axios.$get(`/v3/home/recommended`, {
    progress: true,
    params: {
      key: rootState.key,
      country_id: rootState.country_id,
      city_id: rootState.local.city_id,
      district_id: rootState.district_id,
      warehouse_id: rootState.local.warehouse_id,
      storeLanguageId: rootState.local.storeLanguageId,
      requestSource: rootState.requestSource
    }
  }).then(response => {
    commit(types.RECOMMENDED_PRODUCTS, response.body.products);
    // resolve(response);
  });
  // });
};
export const fetchServiceLocation = ({commit, rootState}) => {
  return window.$nuxt.$axios.$post(`/jeddah-en/api-v2/home/serviceLocation`, {
    key: rootState.key,
    requestSource: rootState.requestSource
  })
    .then(response => {
      commit(types.UPDATE_SERVICE_LOCATIONS, response.data[0].cities);

    })
};
