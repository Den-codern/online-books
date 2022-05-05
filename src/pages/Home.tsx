import { useEffect } from "react";
import styles from "../page-style/Home.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import Book from "../services/Book";
import Card from "../component/Card/Card";
function Home() {
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
        <Card />
      </div>
    </div>
  );
}
export default Home;
