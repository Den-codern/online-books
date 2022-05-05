import { BookModel } from "../../interfaces/book.interface";
import { BookActionType } from "../types/book";
import BookService from "../../services/BookService";
export function fetchBook(
  dispatch: (arg0: { type: BookActionType; payload?: BookModel[] }) => void
) {
  dispatch(fetchBooksBegin());

  BookService.getAllBook().then((books) => {
    dispatch(fetchBooksSuccess(books));
  });
}

export const fetchBooksBegin = () => {
  return {
    type: BookActionType.FETCH_BOOKS_BEGIN,
  };
};

export const fetchBooksSuccess = (books: BookModel[]) => {

  return {
    type: BookActionType.FETCH_BOOKS_SUCCESS,
    payload: books,
  };
};
