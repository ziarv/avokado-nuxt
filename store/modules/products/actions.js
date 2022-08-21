import * as types from "./mutation-types";
import {KEY} from "@/constants";

export const fetchSingleById = ({commit, rootState}, id) => {
  // return new Promise((resolve, reject) => {
  return window.$nuxt.$axios.post(`/jeddah-en/api-v2/product/get`, {
    key: KEY,
    country_id: rootState.country_id,
    city_id: rootState.local.city_id,
    district_id: rootState.district_id,
    warehouse_id: rootState.warehouse_id,
    storeLanguageId: rootState.storeLanguageId,
    requestSource: rootState.requestSource,
    pid: id
  })
    .then(response => {
      commit(types.UPDATE_SINGLE_BY_ID, response.data.product_details);
    })
};

export const fetchSingleBySearch = ({commit, rootState}, keyword) => {
  const formData = new FormData();
  formData.append("key", KEY);
  formData.append("country_id", rootState.country_id);
  formData.append("city_id", rootState.local.city_id);
  formData.append("district_id", rootState.district_id);
  formData.append("warehouse_id", rootState.warehouse_id);
  formData.append("storeLanguageId", rootState.storeLanguageId);
  formData.append("requestSource", rootState.requestSource);
  formData.append("keyword", keyword);
  return window.$nuxt.$axios.post(`/jeddah-en/apis/index/getProductsBySearch`, formData, {
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    }
  })
    .then(response => {
      commit(types.PRODUCT_BY_SEARCH, response.data.products);
    });
};
