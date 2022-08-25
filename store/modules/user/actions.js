import * as types from "./mutation-types";

export const fetchAddresses = ({commit, rootState}, id) => {
  const data = new FormData();
  data.append("key", rootState.key);
  data.append("customerId", id);
  return window.$nuxt.$axios
    .post(`/jeddah-en/apis/index/getCustomerAddresses`, data)
    .then(response => {
      const add = [
        ...response.data.customerAddresses.additionalAddresses,
        ...response.data.customerAddresses.shippingAddress
      ];
      commit(types.UPDATE_USER_ADDRESSES, add);
      commit(
        types.UPDATE_USER_SHIPPING_ADDRESSES,
        response.data.customerAddresses.shippingAddress
      );
    });
}

export const fetchMyOrders = ({commit, rootState}, id) => {
  const data = new FormData();
  data.append("key", rootState.key);
  data.append("country_id", rootState.country_id);
  data.append("city_id", rootState.city_id);
  data.append("district_id", rootState.district_id);
  data.append("warehouse_id", rootState.warehouse_id);
  data.append("storeLanguageId", rootState.storeLanguageId);
  data.append("requestSource", rootState.requestSource);
  data.append("customerId", id);
  return window.$nuxt.$axios
    .post(`/jeddah-en/apis/index/customerGetAllOrdersDetail`, data)
    .then(response => {
      if (response.data.customerOrders) {
        commit(types.UPDATE_USER_ORDERS, response.data.customerOrders.orders);
      } else {
        commit(types.UPDATE_USER_ORDERS, []);
      }
    });
}
export const deleteMyAddress = ({rootState}, id) => {
  const data = new FormData();
  data.append("key", rootState.key);
  data.append("country_id", rootState.country_id);
  data.append("city_id", rootState.city_id);
  data.append("district_id", rootState.district_id);
  data.append("warehouse_id", rootState.warehouse_id);
  data.append("storeLanguageId", rootState.storeLanguageId);
  data.append("requestSource", rootState.requestSource);
  data.append("addressId", id);
  return window.$nuxt.$axios
    .post(`/jeddah-en/apis/index/customerAddressDelete`, data);
}

export const createMyAddress = ({rootState}, addr) => {
  const data = new FormData();
  data.append("key", rootState.key);
  data.append("country_id", rootState.country_id);
  data.append("city_id", rootState.city_id);
  data.append("district_id", rootState.district_id);
  data.append("warehouse_id", rootState.warehouse_id);
  data.append("storeLanguageId", rootState.storeLanguageId);
  data.append("requestSource", rootState.requestSource);
  data.append("firstname", addr.firstname);
  data.append("lastname", addr.lastname);
  data.append("telephone", addr.telephone);
  data.append("street", addr.street);
  data.append("city", addr.city);
  data.append("customerId", addr.customerId);
  data.append("customer_address_lat", addr.customer_address_lat);
  data.append("customer_address_lng", addr.customer_address_lng);
  data.append(
    "customer_address_opt_phone",
    addr.customer_address_opt_phone
  );
  return window.$nuxt.$axios
    .post(`/jeddah-en/apis/index/customerAddressCreate`, data);
}

export const orderCancel = ({rootState}, id) => {
  const data = new FormData();
  data.append("key", rootState.key);
  data.append("country_id", rootState.country_id);
  data.append("city_id", rootState.city_id);
  data.append("district_id", rootState.district_id);
  data.append("warehouse_id", rootState.warehouse_id);
  data.append("storeLanguageId", rootState.storeLanguageId);
  data.append("requestSource", rootState.requestSource);
  data.append("reason", "");
  data.append("orderId", id);
  return window.$nuxt.$axios
    .post(`/jeddah-en/apis/index/customerOrderCancel`, data);
}
