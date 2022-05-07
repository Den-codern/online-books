import styles from "./Modal.module.css";
import { object, string } from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import BookService from "../../services/BookService";
import { RootState } from "../../redux/reducers";
import { useSelector } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { ModalActionType } from "../../redux/types/modal";
import { BookActionType } from "../../redux/types/book";

function Modal() {
  const bookValues = useSelector((state: RootState) => state.modal.cardValues);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      photo: bookValues.photo,
      name: bookValues.name,
      author: bookValues.author,
      genre: bookValues.genre,
    },
    validationSchema: object({
      photo: string().required("Выберите изображение"),
      name: string().required("Заполните это поле"),
      author: string().required("Заполните это поле"),
      genre: string().required("Заполните это поле"),
    }),
    onSubmit: async (value, { resetForm }) => {
      const books = bookValues;
      books.author = value.author;
      books.genre = value.genre;
      books.photo = value.photo;
      books.name = value.name;

      dispatch({ type: BookActionType.EDIT_BOOK, payload: books });
      BookService.editBook(value, bookValues.id).then((data) => {
        toast.success(data.message);
        resetForm();
        dispatch({
          type: ModalActionType.CLOSE_MODAL,
        });
      });
    },
  });
  function onClick() {
    dispatch({
      type: ModalActionType.CLOSE_MODAL,
    });
  }
  return (
    <div className={styles.modal}>
      <AiFillCloseCircle
        className={styles.icon}
        color="var(--blue)"
        size={30}
        onClick={onClick}
      />
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div>
          <input
            onChange={formik.handleChange}
            value={formik.values.photo}
            name="photo"
            placeholder="Фото книги"
            className={styles.input}
          />
          {formik.touched.photo && formik.errors.photo ? (
            <div className={styles.error}>{formik.errors.photo}</div>
          ) : null}
        </div>
        <div>
          <input
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Название"
            name="name"
            className={styles.input}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className={styles.error}>{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <input
            onChange={formik.handleChange}
            value={formik.values.author}
            name="author"
            placeholder="Имя автора"
            className={styles.input}
          />
          {formik.touched.author && formik.errors.author ? (
            <div className={styles.error}>{formik.errors.author}</div>
          ) : null}
        </div>
        <div>
          <input
            onChange={formik.handleChange}
            value={formik.values.genre}
            placeholder="Жанр"
            name="genre"
            className={styles.input}
          />
          {formik.touched.genre && formik.errors.genre ? (
            <div className={styles.error}>{formik.errors.genre}</div>
          ) : null}
        </div>
        <button className={styles.btn} type="submit">
          Сохранить
        </button>
      </form>
    </div>
  );
}

export default Modal;
