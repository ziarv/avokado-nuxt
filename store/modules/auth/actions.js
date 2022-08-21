import * as types from "./mutation-types";

export const otpSendAction = ({commit, rootState}, phone) => {
  const formData = new FormData();
  formData.append("key", rootState.key);
  formData.append("country_id", rootState.country_id);
  formData.append("city_id", rootState.city_id);
  formData.append("district_id", rootState.district_id);
  formData.append("warehouse_id", rootState.warehouse_id);
  formData.append("storeLanguageId", rootState.storeLanguageId);
  formData.append("requestSource", rootState.requestSource);
  formData.append("mobileNumber", phone);
  return window.$nuxt.$axios.post(
    `/jeddah-en/smsverification/index/SendAccessCode`,
    formData
  )
    .then(response => {
      commit(types.UPDATE_SEND_DATA, response.data);
    });
}

export const verifyOtpAction = ({commit, rootState}, data) => {
  const formData = new FormData();
  formData.append("key", rootState.key);
  formData.append("country_id", rootState.country_id);
  formData.append("city_id", rootState.city_id);
  formData.append("district_id", rootState.district_id);
  formData.append("warehouse_id", rootState.warehouse_id);
  formData.append("storeLanguageId", rootState.storeLanguageId);
  formData.append("requestSource", rootState.requestSource);
  formData.append("mobileNumber", data.phone);
  formData.append("vCode", data.code);
  formData.append("existingCustomer", data.existing);
  return window.$nuxt.$axios.post(
    `/jeddah-en/smsverification/index/ConfirmAccessCode`,
    formData
  ).then(response => {
    if (
      response.data.customerId !== "" ||
      response.data.customerId !== null
    ) {
      commit(types.UPDATE_CUSTOMER_DATA, response.data);
    }
    commit(types.UPDATE_VERIFY_DATA, response.data);
  });
}

export const registerNewUserAccount = ({commit, rootState}, data) => {
  const formData = new FormData();
  formData.append("key", rootState.key);
  formData.append("country_id", rootState.country_id);
  formData.append("city_id", rootState.city_id);
  formData.append("district_id", rootState.district_id);
  formData.append("warehouse_id", rootState.warehouse_id);
  formData.append("storeLanguageId", rootState.storeLanguageId);
  formData.append("requestSource", rootState.requestSource);
  formData.append("customer_mobile_post", data.phone);
  formData.append("vcode", data.code);
  formData.append("email", data.email);
  formData.append("first_name", data.first_name);
  formData.append("last_name", data.last_name);
  formData.append("customerSelectedLanguage", rootState.storeLanguageId);
  return window.$nuxt.$axios.post(
    `/jeddah-en/smsverification/index/OnBoardingFormHandler`,
    formData
  ).then(response => {
    commit(types.UPDATE_CUSTOMER_DATA, response.data);
  });
}
