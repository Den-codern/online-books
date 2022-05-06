import { BookModel } from "../../interfaces/book.interface";

export interface Option {
  label: string;
  value: string;
}

export interface SortState {
  books: BookModel[];
  value: string;
  sortType: string;
  options: Option[];
}

export enum SortActionType {
  INIT = "INIT",
  FIND_BOOKS = "FIND_BOOKS",
  RESET_BOOKS = "RESET_BOOKS",
  SORT_ASC = "SORT_ASC",
  SORT_DESC = "SORT_DESC",
  SELECT = "SELECT",
  OPTIONS = "OPTIONS",
}

interface init {
  type: SortActionType.INIT;
  payload: BookModel[];
}

interface findBooks {
  type: SortActionType.FIND_BOOKS;
  payload: string;
}

interface resetBooks {
  type: SortActionType.RESET_BOOKS;
  payload: BookModel[];
}
interface select {
  type: SortActionType.SELECT;
  payload: string;
}

interface sortAsc {
  type: SortActionType.SORT_ASC;
  payload: string;
}

interface sortDesc {
  type: SortActionType.SORT_DESC;
  payload: string;
}

interface options {
  type: SortActionType.OPTIONS;
  payload: Option[];
}

export type SortAction =
  | init
  | findBooks
  | resetBooks
  | sortAsc
  | sortDesc
  | select
  | options;
