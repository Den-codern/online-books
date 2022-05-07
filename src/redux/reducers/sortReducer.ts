import { BookModel } from "./../../interfaces/book.interface";
import { Reducer } from "react";

import { SortActionType, SortState, SortAction, Option } from "../types/sort";

const initialState = {
  books: [],
  value: "",
  sortType: "asc",
  options: [],
};

export const sortReducer: Reducer<SortState, SortAction> = (
  state = initialState,
  action: SortAction
): SortState => {
  let books: BookModel[];
  switch (action.type) {
    case SortActionType.INIT:
      books = action.payload.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
      return { ...state, books };
    case SortActionType.FIND_BOOKS:
      books = state.books.filter((book) => {
        return (
          book.author.toLowerCase().indexOf(action.payload.toLowerCase()) > -1
        );
      });
      return { ...state, books, value: action.payload };
    case SortActionType.RESET_BOOKS:
      return { ...state, books: action.payload };
    case SortActionType.SORT_ASC:
      books = [...state.books].sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });

      return { ...state, books, sortType: action.payload };
    case SortActionType.SORT_DESC:
      books = [...state.books].sort((a, b) => {
        return a.name < b.name ? 1 : -1;
      });
      return { ...state, books, sortType: action.payload };
    case SortActionType.OPTIONS:
      const allOption = {
        label: "All",
        value: "all",
      };

      const options = action.payload;
      options.unshift(allOption);
      return { ...state, options };
    case SortActionType.SELECT:
      books = [...state.books].filter((book) => {
        return book.genre === action.payload;
      });

      return { ...state, books };
    case SortActionType.ADD_BOOKS:
      return { ...state, books: action.payload };
    case SortActionType.BOOK_DELETE:
      books = [...state.books];
      const findIndex = books.findIndex((book) => book.id === action.payload);
      books.splice(findIndex, 1);
      return { ...state, books };

    default:
      return state;
  }
};
