import { useEffect } from "react";
import styles from "../page-style/Home.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import Card from "../component/Card/Card";
import { useDispatch } from "react-redux";
import { fetchBook } from "../redux/actions/bookAction";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import BookService from "../services/BookService";
function Home() {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.book.books);

  useEffect(() => {
    dispatch(fetchBook);
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.sort}>
        <div className={styles.sort__item}>
          <button className={styles.btn}>
            <AiFillCaretDown />
            <span>По алфовиту</span>
          </button>
        </div>
        <div className={styles.sort__item}>
          <input placeholder="Введите имя автора" className={styles.search} />
        </div>
        <div className={styles.sort__item}></div>
      </div>

      <div className={styles.books}>
        {books.map((book) => (
          <Card name={book.name} photo={book.photo} author={book.author} />
        ))}
      </div>
    </div>
  );
}
export default Home;
