import { BookModel } from "../../interfaces/book.interface";
import { BookActionType, Genres } from "../types/book";
import BookService from "../../services/BookService";
import { Option, SortActionType } from "../types/sort";
export function fetchBook(
  dispatch: (arg0: {
    type: BookActionType | SortActionType;
    payload?: BookModel[] | Option[] | Genres[];
  }) => void
) {
  dispatch(fetchBooksBegin());

  BookService.getAllBook().then((books) => {
    dispatch(fetchBooksSuccess(books));
    dispatch(init(books));
  });
  const genres = BookService.getAllGenres();
  dispatch(getGenre(genres));
  const bookCountInGenre = [];
  const count = BookService.getBookCountInGenre();

  for (const book in count) {
    bookCountInGenre.push({ name: book, count: count[book] });
  }

  dispatch(getBookGenres(bookCountInGenre));
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

function getBookGenres(genres: Genres[]) {
  return {
    type: BookActionType.GET_BOOK_GENRES,
    payload: genres,
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
