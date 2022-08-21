import * as types from "./mutation-types";

export default {
  [types.UPDATE_SINGLE_BY_ID]: (state, data) => {
    state.single = data;
  },
  [types.PRODUCT_BY_SEARCH]: (state, data) => {
    state.searchProducts = data;
  }
};
