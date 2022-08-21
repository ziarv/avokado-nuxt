import * as types from "./mutation-types";

export default {
  [types.UPDATE_CITY_ID]: (state, cityId) => {
    state.city_id = cityId;
  },
  [types.UPDATE_WAREHOUSE_ID]: (state, warehouseId) => {
    state.warehouse_id = warehouseId;
  },
  [types.UPDATE_QUOTE_ID]: (state, quoteId) => {
    state.quote_id = quoteId;
  }
};
