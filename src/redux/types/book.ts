import { BookModel } from "../../interfaces/book.interface";

export interface BookState {
  books: BookModel[];
  loading: boolean;
}

export enum BookActionType {
  FETCH_BOOKS_BEGIN = "FETCH_BOOKS_BEGIN",
  FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS",
}

interface fetchBooksBegin {
  type: BookActionType.FETCH_BOOKS_BEGIN;
}

interface fetchBooksSuccess {
  type: BookActionType.FETCH_BOOKS_SUCCESS;
  payload: BookModel[];
}

export type BookAction = fetchBooksBegin | fetchBooksSuccess;
