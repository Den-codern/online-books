import styles from "../page-style/Favorite.module.css";
import BookService from "../services/BookService";
import UserService from "../services/UserService";
function Favorite() {
  return (
    <div className={styles.favorite}>
      <div className={styles.books}>
        {BookService.getFavoriteBook(UserService.getId()).map((book) => {
          return (
            <div className={styles.books__item}>
              <img className={styles.photo} src={book.photo} alt="book" />
              <div className={styles.name}>{book.name}</div>
              <div className={styles.author}>{book.author}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favorite;
