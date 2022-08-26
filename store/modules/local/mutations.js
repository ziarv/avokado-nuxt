import * as types from "./mutation-types";
import {UPDATE_TMP_ORDER_ID} from "./mutation-types";

export default {
  [types.UPDATE_CITY_ID]: (state, cityId) => {
    state.city_id = cityId;
  },
  [types.UPDATE_WAREHOUSE_ID]: (state, warehouseId) => {
    state.warehouse_id = warehouseId;
  },
  [types.UPDATE_QUOTE_ID]: (state, quoteId) => {
    state.quote_id = quoteId;
  },
  [types.UPDATE_CUSTOMER]: (state, data) => {
    state.customer = data;
  },
  [types.UPDATE_CUSTOMER_ID]: (state, data) => {
    state.customer_id = data;
  },
  [types.UPDATE_TMP_ORDER_ID]: (state, data) => {
    state.tmp_order_id = data;
  },
  [types.UPDATE_TMP_ORDER_SAVE_RESPONSE]: (state, data) => {
    state.tmp_order_save_response = data;
  },
  [types.UPDATE_TMP_PAYMENT_METHOD]: (state, data) => {
    state.tmp_payment_method = data;
  },
};
