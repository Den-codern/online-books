import { BookModel } from "../../interfaces/book.interface";
import { BookActionType } from "../types/book";
import BookService from "../../services/BookService";
import { SearchActionType } from "../types/search";
export function fetchBook(
  dispatch: (arg0: { type: BookActionType | SearchActionType; payload?: BookModel[] }) => void
) {
  dispatch(fetchBooksBegin());

  BookService.getAllBook().then((books) => {
    dispatch(fetchBooksSuccess(books));
    dispatch(init(books));
  });
}

export const fetchBooksBegin = () => {
  return {
    type: BookActionType.FETCH_BOOKS_BEGIN,
  };
};

function init(books: BookModel[]) {
  return {
    type: SearchActionType.INIT,
    payload: books,
  };
}
export const fetchBooksSuccess = (books: BookModel[]) => {
  return {
    type: BookActionType.FETCH_BOOKS_SUCCESS,
    payload: books,
  };
};
