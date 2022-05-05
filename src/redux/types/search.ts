import { BookModel } from "../../interfaces/book.interface";

export interface SearchState {
  books: BookModel[];
  value: string;
}

export enum SearchActionType {
  INIT = "INIT",
  FIND_BOOKS = "FIND_BOOKS",
  RESET_BOOKS = "RESET_BOOKS",
}

interface init {
  type: SearchActionType.INIT;
  payload: BookModel[];
}

interface findBooks {
  type: SearchActionType.FIND_BOOKS;
  payload: string;
}

interface ResetBooks {
  type: SearchActionType.RESET_BOOKS;
  payload: BookModel[];
}

export type SearchAction = init | findBooks | ResetBooks;
