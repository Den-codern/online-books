import { BookModel } from "../../interfaces/book.interface";

export interface Genres {
  name: string;
  count: number;
}
export interface BookState {
  books: BookModel[];
  loading: boolean;
  genres: Genres[];
}

export enum BookActionType {
  FETCH_BOOKS_BEGIN = "FETCH_BOOKS_BEGIN",
  FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS",
  GET_BOOK_GENRES = "GET_BOOK_GENRES",
}

interface fetchBooksBegin {
  type: BookActionType.FETCH_BOOKS_BEGIN;
}

interface fetchBooksSuccess {
  type: BookActionType.FETCH_BOOKS_SUCCESS;
  payload: BookModel[];
}

interface getBookGenres {
  type: BookActionType.GET_BOOK_GENRES;
  payload: Genres[];
}

export type BookAction = fetchBooksBegin | fetchBooksSuccess | getBookGenres;
