import { BookModel } from "../../interfaces/book.interface";
import { BookActionType } from "../types/book";
import BookService from "../../services/BookService";
import { Option, SortActionType } from "../types/sort";
export function fetchBook(
  dispatch: (arg0: {
    type: BookActionType | SortActionType;
    payload?: BookModel[] | Option[];
  }) => void
) {
  dispatch(fetchBooksBegin());

  BookService.getAllBook().then((books) => {
    dispatch(fetchBooksSuccess(books));
    dispatch(init(books));
  });
  const genres = BookService.getAllGenres();
  dispatch(getGenre(genres));
}

export const fetchBooksBegin = () => {
  return {
    type: BookActionType.FETCH_BOOKS_BEGIN,
  };
};

export function getGenre(genre: Option[]) {
  return {
    type: SortActionType.OPTIONS,
    payload: genre,
  };
}
function init(books: BookModel[]) {
  return {
    type: SortActionType.INIT,
    payload: books,
  };
}
export const fetchBooksSuccess = (books: BookModel[]) => {
  return {
    type: BookActionType.FETCH_BOOKS_SUCCESS,
    payload: books,
  };
};
