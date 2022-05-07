import { useEffect } from "react";
import styles from "../page-style/Home.module.css";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import Card from "../component/Card/Card";
import { useDispatch } from "react-redux";
import { fetchBook } from "../redux/actions/bookAction";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import BookService from "../services/BookService";
import { SortActionType } from "../redux/types/sort";
import Spinner from "../component/Spinner/Spinner";
import Select from "react-select";
import UserService from "../services/UserService";
import Modal from "../component/Modal/Modal";
import { BookActionType } from "../redux/types/book";
import { toast } from "react-toastify";
function Home() {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.sort.books);
  const defaultBooks = useSelector((state: RootState) => state.book.books);
  const sortType = useSelector((state: RootState) => state.sort.sortType);
  const loading = useSelector((state: RootState) => state.book.loading);
  const options = useSelector((state: RootState) => state.sort.options);
  const open = useSelector((state: RootState) => state.modal.open);

  useEffect(() => {
    dispatch(fetchBook);
  }, []);

  function onDelete(id: string) {
    BookService.deleteBook(id);
    dispatch({ type: BookActionType.DELETE_BOOK, payload: id });
    dispatch({ type: SortActionType.BOOK_DELETE, payload: id });
    toast.success("Книга удалена");
  }
  function onChange(e) {
    dispatch({
      type: SortActionType.RESET_BOOKS,
      payload: defaultBooks,
    });

    dispatch({
      type: SortActionType.FIND_BOOKS,
      payload: e.currentTarget.value,
    });
  }

  function onClick() {
    if (sortType === "asc") {
      dispatch({ type: SortActionType.SORT_DESC, payload: "desc" });
    }
    if (sortType === "desc") {
      dispatch({ type: SortActionType.SORT_ASC, payload: "asc" });
    }
  }

  function onSelect({ label }) {
    if (label === "All") {
      return dispatch({
        type: SortActionType.RESET_BOOKS,
        payload: defaultBooks,
      });
    }
    dispatch({
      type: SortActionType.RESET_BOOKS,
      payload: defaultBooks,
    });

    dispatch({ type: SortActionType.SELECT, payload: label });
  }

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className={styles.home}>
      <div className={styles.sort}>
        <div className={styles.sort__item}>
          <button className={styles.btn} onClick={onClick}>
            {sortType === "asc" ? (
              <AiOutlineSortAscending />
            ) : (
              <AiOutlineSortDescending />
            )}
            <span>По алфовиту</span>
          </button>
        </div>
        <div className={styles.sort__item}>
          <input
            onChange={onChange}
            placeholder="Введите имя автора"
            className={styles.search}
          />
        </div>

        <div className={styles.sort__item}>
          <Select
            placeholder="Выберите жанр"
            onChange={onSelect}
            options={options}
          />
        </div>
      </div>

      <div className={styles.books}>
        {books.map((book) => (
          <Card
            key={book.id}
            users={book.users}
            genre={book.genre}
            id={book.id}
            name={book.name}
            photo={book.photo}
            author={book.author}
            onDelete={onDelete}
            isStar={book.users.includes(UserService.getId())}
          />
        ))}
      </div>
      {open ? <Modal /> : null}
    </div>
  );
}
export default Home;
