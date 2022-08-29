import * as types from "./mutation-types";

export default {
  [types.UPDATE_LOADING]: (state, data) => {
    state.isLoading = data;
  }
};
