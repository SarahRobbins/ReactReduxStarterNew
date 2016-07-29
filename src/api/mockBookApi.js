import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const books = [
  {
    id: "the state's recent architects",
    title: "The State's Recent Architects",
    author: "Robert White",
    pages: "508",
    category: "novels"
  },
  {
    id: "the kingdom's major literary cults",
    title: "The Kingdom's Major Literary Cults",
    author: "Ronald Roger",
    pages: "310",
    category: "short stories"
  },
  {
    id: "architecting apps for the real world",
    title: "Architecting Applications for the Real World",
    author: "Cory House",
    pages: "252",
    category: "biographies"
  },
  {
    id: "becoming an outlier",
    title: "Becoming an Outlier",
    author: "Sally Johnson",
    pages: "230",
    category: "novels"
  },
  {
    id: "the military treaties of the earldoms",
    title: "The Military Treaties of the Earldoms",
    author: "John Doe",
    pages: "510",
    category: "biography"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (book) => {
  return replaceAll(book.title, ' ', '-');
};

class BookApi {
  static getAllBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], books));
      }, delay);
    });
  }

  static saveBook(book) {
    book = Object.assign({}, book); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minBookTitleLength = 1;
        if (book.title.length < minBookTitleLength) {
          reject(`Title must be at least ${minBookTitleLength} characters.`);
        }

        if (book.id) {
          const existingCourseIndex = books.findIndex(a => a.id == book.id);
          books.splice(existingCourseIndex, 1, book);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new books in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          book.id = generateId(book);
          book.watchHref = `http://www.pluralsight.com/courses/${book.id}`;
          books.push(book);
        }

        resolve(book);
      }, delay);
    });
  }

  static deleteBook(bookId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfBookToDelete = books.findIndex(book => {
          return book.id == bookId;
        });
        books.splice(indexOfBookToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default BookApi;
