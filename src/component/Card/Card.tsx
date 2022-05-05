import styles from "./Card.module.css";
import {CardProps} from './Card.props'
function Card({ photo, name, author }:CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={photo} alt="book" />
      </div>
      <div className={styles.card__info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.author}>{author}</div>
      </div>

      <button className={styles.btn}>Add to wish list</button>
    </div>
  );
}

export default Card;
