import * as types from "./mutation-types";

export const fetchDeliveryDatesAndTime = ({commit, rootState}) => {
  window.$nuxt.$axios
    .get(`/v3/delivery-dates`, {
      params: {
        key: rootState.key,
        country_id: rootState.country_id,
        city_id: rootState.local.city_id,
        district_id: rootState.district_id,
        warehouse_id: rootState.local.warehouse_id,
        storeLanguageId: rootState.local.storeLanguageId,
        lang_id: rootState.local.storeLanguageId,
        requestSource: rootState.requestSource
      }
    })
    .then(response => {
      commit(types.UPDATE_DELIVERY_DATES_AND_TIME, response.data.normal);
    });
}

export const fetchPaymentMethods = ({commit, rootState}) => {
  const formData = new FormData();
  formData.append("key", rootState.key);
  formData.append("country_id", rootState.country_id);
  formData.append("city_id", rootState.local.city_id);
  formData.append("district_id", rootState.district_id);
  formData.append("warehouse_id", rootState.warehouse_id);
  formData.append("storeLanguageId", rootState.local.storeLanguageId);
  formData.append("requestSource", rootState.requestSource);
  window.$nuxt.$axios
    .post(`/jeddah-en/apis/index/getActivePaymentMethods`, formData)
    .then(response => {
      commit(
        types.UPDATE_PAYMENT_METHODS,
        response.data.availablePaymentMethods
      );
    });
}

export const fetchShippingMethods = ({commit, rootState}) => {
  const formData = new FormData();
  formData.append("key", rootState.key);
  formData.append("country_id", rootState.country_id);
  formData.append("city_id", rootState.local.city_id);
  formData.append("district_id", rootState.district_id);
  formData.append("warehouse_id", rootState.warehouse_id);
  formData.append("storeLanguageId", rootState.local.storeLanguageId);
  formData.append("requestSource", rootState.requestSource);
  window.$nuxt.$axios
    .post(
      `/jeddah-en/apis/index/getActiveShippingMethods`,
      formData
    )
    .then(response => {
      commit(
        types.UPDATE_SHIPPING_METHODS,
        response.data.availableShippingMethods
      );
    });
}

export const placeOrderReview = ({commit, rootState}, cdata) => {
  const data = {};
  data.key = rootState.key;
  data.fcm_token = "";
  data.country_id = rootState.country_id;
  data.city_id = rootState.local.city_id;
  data.district_id = rootState.district_id;
  data.warehouse_id = rootState.warehouse_id;
  data.storeLanguageId = rootState.local.storeLanguageId;
  data.requestSource = rootState.requestSource;
  data.customerId = cdata.customerId;
  // Products
  data.product = cdata.product;
  data.addresses = cdata.addresses;
  data.coupon = cdata.couponName;
  data.newCustomerAddress = false;
  data.shippingMethod = "firstfreeship_firstfreeship";
  data.amdeliverydate = cdata.delivery;
  data.payment = {};
  data.address_id = cdata.address_id;
  window.$nuxt.$axios
    .post(`/jeddah-en/api-v2/placeOrder/review`, data, {
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })
    .then(response => {
      commit(types.UPDATE_ORDER_REVIEW, response.data.data);
      commit(types.UPDATE_ORDER_REVIEW_REQUEST, data);
    });
}

export const placeOrderSave = ({commit}, cdata) => {
  window.$nuxt.$axios
    .post(`/jeddah-en/api-v2/placeOrder/save`, cdata, {
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })
    .then(response => {
      commit(
        types.UPDATE_ORDER_SAVE_RESPONSE,
        response.data.placeOrderResponse
      );
    });
}

export const fetchCouponData = ({commit, rootState}, data) => {
  const formData = new FormData();
  formData.append("key", rootState.key);
  formData.append("country_id", rootState.country_id);
  formData.append("city_id", rootState.local.city_id);
  formData.append("district_id", rootState.district_id);
  formData.append("warehouse_id", rootState.warehouse_id);
  formData.append("storeLanguageId", rootState.local.storeLanguageId);
  formData.append("requestSource", rootState.requestSource);
  formData.append("coupon", data.coupon);
  formData.append("subtotal", data.subtotal);
  formData.append("customer_id", data.customerId);
  window.$nuxt.$axios
    .post(`/jeddah-en/apis/index/getCouponAmount`, formData)
    .then(response => {
      commit(types.UPDATE_COUPON, response.data);
    });
}

export const fetchPriceDetails = ({commit, rootState}, payload) => {
  window.$nuxt.$axios
    .post(`/jeddah-en/api-v2/placeOrder/priceDetails`, {
      key: rootState.key,
      country_id: rootState.country_id,
      city_id: rootState.local.city_id,
      district_id: rootState.district_id,
      warehouse_id: rootState.warehouse_id,
      storeLanguageId: rootState.local.storeLanguageId,
      requestSource: rootState.requestSource,
      quote_id: payload.quote_id,
      payment_method: payload.payment_method
    })
    .then(response => {
      commit(types.UPDATE_PRICE_DETAIL, response.data.data);
    });
}

export const hyperPayStatusCheck = ({commit, rootState}, payload) => {
  const formData = new FormData();
  formData.append("key", rootState.key);
  formData.append("country_id", rootState.country_id);
  formData.append("city_id", rootState.local.city_id);
  formData.append("district_id", rootState.district_id);
  formData.append("warehouse_id", rootState.warehouse_id);
  formData.append("storeLanguageId", rootState.local.storeLanguageId);
  formData.append("requestSource", rootState.requestSource);
  formData.append("hyperPayCheckoutId", payload.hyperPayCheckoutId);
  formData.append("payment_method", payload.payment_method);
  formData.append("orderId", payload.orderId);
  window.$nuxt.$axios
    .post(
      `/jeddah-en/apis/index/getHyperPayTransactionStatus`,
      formData
    )
    .then(response => {
      commit(types.UPDATE_HYPERPAY_STATUS, response.data);
    });
}
