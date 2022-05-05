import styles from "./Genre.module.css";
import { GenreProps } from "./Genre.props";
function Genre({ name, count }: GenreProps) {
  return (
    <li className={styles.category}>
      <div className={styles.genre}>{name}</div>
      <div className={styles.count}>{count}</div>
    </li>
  );
}

export default Genre;
