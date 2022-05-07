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
  let books;
  let findIndex;
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
    case BookActionType.ADD_STAR:
      books = [...state.books];
      findIndex = books.findIndex((book) => book.id === action.payload.bookId);
      if (books[findIndex].users.includes(action.payload.userId)) {
        books[findIndex].users = [];
      } else {
        books[findIndex].users.push(action.payload.userId);
      }
      return { ...state, books };
    case BookActionType.EDIT_BOOK:
      books = [...state.books];
      findIndex = books.findIndex((book) => book.id === action.payload.id);
      books[findIndex].author = action.payload.author;
      books[findIndex].name = action.payload.name;
      books[findIndex].photo = action.payload.photo;
      books[findIndex].genre = action.payload.genre;
      return { ...state, books };
    case BookActionType.DELETE_BOOK:
      books = [...state.books];
      findIndex = books.findIndex((book) => book.id === action.payload);

      books.splice(findIndex, 1);

      return { ...state, books };
    default:
      return state;
  }
};
