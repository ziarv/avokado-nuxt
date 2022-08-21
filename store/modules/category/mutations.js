import * as types from "./mutation-types";

export default {
  [types.FETCH_CATEGORY_ID_DATA]: (state, data) => {
    state.products = data;
  },
  [types.FETCH_PAGINATION_DATA]: (state, data) => {
    state.totalPages = parseInt(data.total_pages);
    state.currentPage = parseInt(data.current_page);
    state.response = data;
  }
};
