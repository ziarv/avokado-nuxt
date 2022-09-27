import * as types from "./mutation-types";

export const fetchByCategoryId = ({commit, rootState}, payload) => {
  commit(types.FETCH_CATEGORY_ID_DATA, []);
  return payload.context.$axios.post(`/jeddah-en/api-v2/category/get/page/${payload.page}`, {
    key: rootState.key,
    country_id: rootState.country_id,
    city_id: rootState.local.city_id,
    district_id: rootState.district_id,
    warehouse_id: rootState.local.warehouse_id,
    storeLanguageId: rootState.local.storeLanguageId,
    requestSource: rootState.requestSource,
    categoryId: payload.id
  });
};
export const fetchSliderByCategoryId = ({commit, rootState}, id) => {
  const params = {
    key: rootState.key,
    country_id: rootState.country_id,
    city_id: rootState.local.city_id,
    district_id: rootState.district_id,
    warehouse_id: rootState.local.warehouse_id,
    storeLanguageId: rootState.local.storeLanguageId,
    requestSource: rootState.requestSource,
    categoryId: id
  };
  if (rootState.cart.quote_id) {
    params.quote_id = rootState.cart.quote_id;
  }
  return window.$nuxt.$axios.post(`/jeddah-en/api-v2/home/category`, params);
};
