import * as types from "./mutation-types";

export const getCartAction = ({commit, rootState}) => {
  const params = {
    key: rootState.key,
    country_id: rootState.country_id,
    city_id: rootState.city_id,
    district_id: rootState.district_id,
    warehouse_id: rootState.warehouse_id,
    storeLanguageId: rootState.storeLanguageId,
    requestSource: rootState.requestSource
  };
  if (rootState.cart.quote_id) {
    params.quote_id = rootState.cart.quote_id;
  }
  if (rootState.auth && Object.keys(rootState.auth.customer).length > 0) {
    params.customer_id = rootState.auth.customer.customerId;
  }
  // console.log(params);
  window.axios
    .get(`/jeddah-en/api-v2/cart/get`, {
      params
    })
    .then(response => {
      const quoteData = response;
      commit(types.UPDATE_CART_DATA, quoteData);
      commit(types.UPDATE_QUOTE_ID, quoteData.quote_id);
      commit(types.UPDATE_CART_ITEMS_DATA, quoteData.cart);
    });
};
export const addCartAction = ({commit, rootState}, product) => {
  const params = {
    key: rootState.key,
    country_id: rootState.country_id,
    city_id: rootState.city_id,
    district_id: rootState.district_id,
    warehouse_id: rootState.warehouse_id,
    storeLanguageId: rootState.storeLanguageId,
    requestSource: rootState.requestSource,
    product_id: product.product_id,
    qty: product.qty
  };
  if (rootState.cart.quote_id) {
    params.quote_id = rootState.cart.quote_id;
  }
  if (rootState.auth && Object.keys(rootState.auth.customer).length > 0) {
    params.customer_id = rootState.auth.customer.customerId;
  }
  window.axios
    .get(`/jeddah-en/api-v2/cart/add`, {
      params
    })
    .then(response => {
      const quoteData = response;
      if (quoteData.status === 200 && quoteData.quote_id) {
        commit(types.UPDATE_CART_DATA, quoteData);
        commit(types.UPDATE_QUOTE_ID, quoteData.quote_id);
        commit(types.UPDATE_CART_ITEMS_DATA, quoteData.cart);
      }
    });

}
export const removeCartProduct = ({commit, rootState}, product) => {
  const params = {
    key: rootState.key,
    country_id: rootState.country_id,
    city_id: rootState.city_id,
    district_id: rootState.district_id,
    warehouse_id: rootState.warehouse_id,
    storeLanguageId: rootState.storeLanguageId,
    requestSource: rootState.requestSource,
    product_id: product.product_id
  };
  if (rootState.cart.quote_id) {
    params.quote_id = rootState.cart.quote_id;
  }
  if (rootState.auth && Object.keys(rootState.auth.customer).length > 0) {
    params.customer_id = rootState.auth.customer.customerId;
  }
  window.axios
    .get(`/jeddah-en/api-v2/cart/removeItem`, {
      params
    })
    .then(response => {
      const quoteData = response;
      commit(types.UPDATE_CART_DATA, quoteData);
      commit(types.UPDATE_QUOTE_ID, quoteData.quote_id);
      commit(types.UPDATE_CART_ITEMS_DATA, quoteData.cart);
    })
}
export const clearCart = ({commit, rootState}) => {
  const params = {
    key: rootState.key,
    country_id: rootState.country_id,
    city_id: rootState.city_id,
    district_id: rootState.district_id,
    warehouse_id: rootState.warehouse_id,
    storeLanguageId: rootState.storeLanguageId,
    requestSource: rootState.requestSource
  };
  if (rootState.cart.quote_id) {
    params.quote_id = rootState.cart.quote_id;
  }
  if (rootState.auth &&Object.keys(rootState.auth.customer).length > 0) {
    params.customer_id = rootState.auth.customer.customerId;
  }
  window.axios
    .get(`/jeddah-en/api-v2/cart/clear`, {
      params
    })
    .then(response => {
      const quoteData = response;
      commit(types.UPDATE_CART_DATA, quoteData);
      commit(types.UPDATE_QUOTE_ID, quoteData.quote_id);
      commit(types.UPDATE_CART_ITEMS_DATA, quoteData.cart);
    });
}
export const cartReview = ({commit, rootState}, info) => {
  const params = {
    key: rootState.key,
    country_id: rootState.country_id,
    city_id: rootState.city_id,
    district_id: rootState.district_id,
    warehouse_id: rootState.warehouse_id,
    storeLanguageId: rootState.storeLanguageId,
    requestSource: rootState.requestSource,
    payment_method: info.method,
    use_wallet: info.use_wallet
  };
  if (rootState.cart.quote_id) {
    params.quote_id = rootState.cart.quote_id;
  }
  if (rootState.auth && Object.keys(rootState.auth.customer).length > 0) {
    params.customer_id = rootState.auth.customer.customerId;
  }
  window.axios
    .get(`/jeddah-en/api-v2/cart/review`, {
      params
    })
    .then(response => {
      commit(types.UPDATE_CART_REVIEW, response);
    });
}
export const cartAddAddress = ({commit, rootState}, addressId) => {
  const params = {
    key: rootState.key,
    country_id: rootState.country_id,
    city_id: rootState.city_id,
    district_id: rootState.district_id,
    warehouse_id: rootState.warehouse_id,
    storeLanguageId: rootState.storeLanguageId,
    requestSource: rootState.requestSource,
    address_id: addressId
  };
  if (rootState.auth && Object.keys(rootState.auth.customer).length > 0) {
    params.customer_id = rootState.auth.customer.customerId;
  }
  if (rootState.cart.quote_id) {
    params.quote_id = rootState.cart.quote_id;
  }
  window.axios
    .get(`/jeddah-en/api-v2/cart/address`, {
      params
    })
    .then(response => {
      const quoteData = response;
      commit(types.UPDATE_CART_DATA, quoteData);
      commit(types.UPDATE_QUOTE_ID, quoteData.quote_id);
      commit(types.UPDATE_CART_ITEMS_DATA, quoteData.cart);
    });
}
export const applyCoupon = ({commit, rootState}, code) => {
  const params = {
    key: rootState.key,
    country_id: rootState.country_id,
    city_id: rootState.city_id,
    district_id: rootState.district_id,
    warehouse_id: rootState.warehouse_id,
    storeLanguageId: rootState.storeLanguageId,
    requestSource: rootState.requestSource,
    coupon: code
  };
  if (rootState.auth && Object.keys(rootState.auth.customer).length > 0) {
    params.customer_id = rootState.auth.customer.customerId;
  }
  if (rootState.cart.quote_id) {
    params.quote_id = rootState.cart.quote_id;
  }
  window.axios
    .get(`/jeddah-en/api-v2/cart/coupon`, {
      params
    })
    .then(response => {
      const coupon = response;
      commit(types.COUPON_RESPONSE, coupon);
    })
}
export const cartOrderSave = ({commit, rootState}, orderData) => {
  let params = {
    key: rootState.key,
    country_id: rootState.country_id,
    city_id: rootState.city_id,
    district_id: rootState.district_id,
    warehouse_id: rootState.warehouse_id,
    storeLanguageId: rootState.storeLanguageId,
    requestSource: rootState.requestSource,
    device_name: "Web " + window.navigator.platform,
    app_version: "1.0",
    device_os_version: window.navigator.appVersion,
    extra_info: "Vendor " + window.navigator.vendor
  };
  if (rootState.auth && Object.keys(rootState.auth.customer).length > 0) {
    params.customer_id = rootState.auth.customer.customerId;
  }
  if (rootState.cart.quote_id) {
    params.quote_id = rootState.cart.quote_id;
  }
  params = {...params, ...orderData};
  window.axios
    .get(`/jeddah-en/api-v2/cart/save`, {
      params
    })
    .then(response => {
      const order = response;
      commit(types.ORDER_SAVE, order);
      commit(types.PAYMENT_METHOD, orderData.payment_method);
      commit(types.UPDATE_CART_ITEMS_DATA, []);
      commit(types.UPDATE_CART_REVIEW, []);
      commit(types.UPDATE_CART_DATA, []);
    })
}
export const paymentStatus = ({commit, rootState}, request) => {
  let params = {
    key: rootState.key,
    country_id: rootState.country_id,
    city_id: rootState.city_id,
    district_id: rootState.district_id,
    warehouse_id: rootState.warehouse_id,
    storeLanguageId: rootState.storeLanguageId,
    requestSource: rootState.requestSource
  };
  if (rootState.auth && Object.keys(rootState.auth.customer).length > 0) {
    params.customer_id = rootState.auth.customer.customerId;
  }
  if (rootState.cart.quote_id) {
    params.quote_id = rootState.cart.quote_id;
  }
  params = {...params, ...request};
  window.axios
    .get(`/jeddah-en/api-v2/payment/status`, {
      params
    })
    .then(response => {
      commit(types.PAYMENT_STATUS, response);
      commit(types.UPDATE_CART_ITEMS_DATA, []);
      commit(types.UPDATE_CART_REVIEW, []);
      commit(types.UPDATE_CART_DATA, []);
    });
}
export const getMinimumOrderAmount = ({commit, rootState}) => {
  window.axios
    .get(`/jeddah-en/apis/index/getMinimumOrderAmount`, {
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
      commit(
        types.UPDATE_MIN_ORDER_AMOUNT,
        parseInt(response.minimumOrderAmount)
      );
    })
}
