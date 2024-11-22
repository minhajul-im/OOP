/**
 * I run a small library, and I want to manage books and authors. Every book has an author, and an author can write multiple books. I need a system where I can keep track of the books in the library and the authors who wrote them. Each book should have a title and an ISBN number, and each author should have a name and a birth year.

I want to be able to:

Add a book to the library and link it to its author.
List all the books by a particular author.
See the author of a given book.
 */
class Author {
  public userName: string;
  public birthYear: number;

  constructor(userName: string, birthYear: number) {
    this.userName = userName;
    this.birthYear = birthYear;
  }
}

class Book {
  public author: Author;
  public bookName: string;
  public isbnNumber: number;
  public bookPublishDate: number;

  constructor(bookName: string, author: Author) {
    this.author = author;
    this.bookName = bookName;
    this.bookPublishDate = new Date().getFullYear();
    this.isbnNumber = Math.ceil(Math.random() * 1000000000);
  }
}

class Library {
  private bookList: Book[] = [];
  private authorList: Author[] = [];

  addBook(book: Book) {
    if (!this.bookList.some((b) => b.bookName === book.bookName)) {
      this.bookList.push(book);
    }

    if (!this.authorList.some((a) => a.userName === book.author.userName)) {
      this.authorList.push(book.author);
    }
  }

  getBooksByAuthor(author: Author): Book[] {
    const filterBook = this.bookList.filter((b: Book) => b.author === author);
    return filterBook.length > 0 ? filterBook : [];
  }

  getAuthorByBook(bookName: string): Author | string {
    const book = this.bookList.find((b) => b.bookName === bookName);
    if (!book) {
      return "No such book found!";
    }
    return book.author;
  }

  getListOfBook(): Book[] {
    return this.bookList;
  }
}

const author = new Author("John Smith", 1990);
const book = new Book("JavaScript Basics", author);
const library = new Library();

library.addBook(book);

console.log(library.getBooksByAuthor(author));
console.log(library.getAuthorByBook("JavaScript Basics"));
console.log(library.getListOfBook());
