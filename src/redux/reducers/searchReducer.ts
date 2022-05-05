import { Reducer } from "react";
import { SearchActionType, SearchState, SearchAction } from "../types/search";

const initialState = {
  books: [],
  value: "",
};

export const searchReducer: Reducer<SearchState, SearchAction> = (
  state = initialState,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    case SearchActionType.INIT:
      return { ...state, books: action.payload };
    case SearchActionType.FIND_BOOKS:
      const { payload } = action;

      const books = state.books.filter((book) => book.author.includes(payload));
      return { ...state, books, value: payload };
    case SearchActionType.RESET_BOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
};
