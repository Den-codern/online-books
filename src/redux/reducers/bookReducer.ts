import { Reducer } from "react";
import { BookAction, BookActionType, BookState } from "../types/book";
const initialState = {
  books: [],
  genres: [],
  loading: false,
};

export const bookReducer: Reducer<BookState, BookAction> = (
  state = initialState,
  action: BookAction
): BookState => {
  switch (action.type) {
    case BookActionType.FETCH_BOOKS_BEGIN:
      return { ...state, loading: true };
    case BookActionType.FETCH_BOOKS_SUCCESS:
      return { ...state, books: action.payload, loading: false };
    case BookActionType.GET_BOOK_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
};
