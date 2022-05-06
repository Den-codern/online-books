import styles from "./Spinner.module.css";
import cn from "clsx";
function Spinner() {
  return (
    <div className={styles.bookshelf_wrapper}>
      <ul className={styles.book_list}>
        <li className={cn(styles.book_item, styles.first)}></li>
        <li className={cn(styles.book_item, styles.second)}></li>
        <li className={cn(styles.book_item, styles.third)}></li>
        <li className={cn(styles.book_item, styles.fourth)}></li>
        <li className={cn(styles.book_item, styles.fifth)}></li>
        <li className={cn(styles.book_item, styles.sixth)}></li>
      </ul>
      <div className={styles.shelf}></div>
    </div>
  );
}
export default Spinner;
