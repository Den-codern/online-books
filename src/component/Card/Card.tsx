import styles from "./Card.module.css";
import { CardProps } from "./Card.props";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import BookService from "../../services/BookService";
import UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { BookActionType } from "../../redux/types/book";
import { ModalActionType } from "../../redux/types/modal";
function Card({ photo, genre, name, users, author, id, isStar }: CardProps) {
  const dispatch = useDispatch();
  function onStar() {
    BookService.addStar(id, UserService.getId());
    dispatch({
      type: BookActionType.ADD_STAR,
      payload: { bookId: id, userId: UserService.getId() },
    });
  }
  function onClick() {
    dispatch({
      type: ModalActionType.OPEN_MODAL,
      payload: { photo, name, author, id, genre, users },
    });
  }
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={photo} alt="book" />
      </div>
      <div className={styles.card__info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.author}>{author}</div>
      </div>
      <div onClick={onStar} className={styles.star}>
        {isStar ? (
          <AiFillStar color="var(--blue)" size={30} />
        ) : (
          <AiOutlineStar color="var(--blue)" size={30} />
        )}
      </div>

      <button onClick={onClick} className={styles.edit}>Edit</button>
      <button className={styles.delete}>Delete</button>
    </div>
  );
}

export default Card;
