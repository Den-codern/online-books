import { BookModel } from '../interfaces/book.interface';
import books from "../testData";
class BookService {
  constructor() {
    localStorage.setItem("books", JSON.stringify(books));
  }
  getAllBook() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(JSON.parse(localStorage.getItem('books')));
        
      }, 800);
    });
  }
}
export default new BookService();
