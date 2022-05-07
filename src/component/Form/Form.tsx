import styles from "./Form.module.css";
import { useFormik } from "formik";
import { object, string } from "yup";
import BookService from "../../services/BookService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Form() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      photo: "",
      name: "",
      author: "",
      genre: "",
    },
    validationSchema: object({
      photo: string().required("Выберите изображение"),

      name: string().required("Заполните это поле"),
      author: string().required("Заполните это поле"),
      genre: string().required("Заполните это поле"),
    }),
    onSubmit: async (value, { resetForm }) => {
      BookService.addBook(value).then((data) => {
        toast.success(data.message);

        resetForm();
        navigate("/");
      });
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div>
        <input
          onChange={formik.handleChange}
          value={formik.values.photo}
          name="photo"
          placeholder="Фото книги"
          className={styles.input}
        />
      </div>
      <div>
        <input
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Название"
          name="name"
          className={styles.input}
        />
      </div>
      <div>
        <input
          onChange={formik.handleChange}
          value={formik.values.author}
          name="author"
          placeholder="Имя автора"
          className={styles.input}
        />
      </div>
      <div>
        <input
          onChange={formik.handleChange}
          value={formik.values.genre}
          placeholder="Жанр"
          name="genre"
          className={styles.input}
        />
      </div>
      <button className={styles.btn} type="submit">
        Add book
      </button>
    </form>
  );
}
export default Form;
