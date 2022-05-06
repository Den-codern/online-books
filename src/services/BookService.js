import { BookModel } from "../interfaces/book.interface";
import books from "../testData";
class BookService {
  constructor() {
    if (!localStorage.getItem("books")) {
      localStorage.setItem("books", JSON.stringify(books));
    }
  }
  getAllBook() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(JSON.parse(localStorage.getItem("books")));
      }, 2000);
    });
  }

  getAllGenres() {
    const genres = JSON.parse(localStorage.getItem("books")).filter(
      (thing, index, self) => {
        const findIndex = self.findIndex((t) => t.genre === thing.genre);
        return index === findIndex;
      }
    );

    return genres.map((genre) => {
      return {
        label: genre.genre,
        value: genre.genre.toLowerCase(),
      };
    });
  }
}
export default new BookService();
