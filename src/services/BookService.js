import { BookModel } from "../interfaces/book.interface";
import books from "../testData";
import { generatedID } from "../utils";
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

  getBookCountInGenre() {
    const books = JSON.parse(localStorage.getItem("books"));

    const bookCount = books.reduce((acc, book) => {
      if (acc[book.genre]) {
        acc[book.genre]++;
      } else {
        acc[book.genre] = 1;
      }
      return acc;
    }, {});

    return bookCount;
  }

  addBook(book) {
    const books = JSON.parse(localStorage.getItem("books"));
    book.id = generatedID();
    return new Promise((resolve) => {
      setTimeout(() => {
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
        resolve({
          message: "Книга добавлена",
        });
      }, 1000);
    });
  }
}
export default new BookService();
