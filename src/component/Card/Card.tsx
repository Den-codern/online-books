import styles from "./Card.module.css";

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51A685AMYoL._SL160_.jpg"
          alt="book"
        />
      </div>
      <div className={styles.card__info}>
        <div className={styles.name}>In Search of Lost Time </div>
        <div className={styles.author}>Marcel Proust</div>
      </div>

      <button className={styles.btn}>Add to wish list</button>
    </div>
  );
}

export default Card;
