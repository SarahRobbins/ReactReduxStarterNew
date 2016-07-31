import * as types from './actionTypes';
import BookApi from '../../api/mockBookApi';
import * as ajaxActions from './ajaxActions';

export function loadBooksSuccess(books) {
  return {type: types.LOAD_BOOKS_SUCCESS, books};
}

export function deleteBookSuccess(bookId) {
  return {type: types.DELETE_BOOK_SUCCESS, bookId};
}

export function addBookSuccess(book) {
  return {type: types.ADD_BOOK_SUCCESS, book};
}

export function editBookSuccess(book) {
  return {type: types.EDIT_BOOK_SUCCESS, book};
}

export function loadBooks() {
  return function(dispatch) {
    dispatch(ajaxActions.beginAjaxRequest());
    BookApi.getAllBooks().then(books => {
      dispatch(ajaxActions.completeAjaxRequest());
      return dispatch(loadBooksSuccess(books));
    }).catch(error => {
      dispatch(ajaxActions.ajaxRequestError());
      throw(error);
    });
  };
}

export function deleteBook(bookId) {
  return function(dispatch) {
    dispatch(ajaxActions.beginAjaxRequest());
    BookApi.deleteBook(bookId).then(() => {
      dispatch(ajaxActions.completeAjaxRequest());
      return dispatch(deleteBookSuccess(bookId));
    }).catch(error => {
      dispatch(ajaxActions.ajaxRequestError());
      throw(error);
    });
  };
}

export function saveBook(book) {
  return function(dispatch) {
    dispatch(ajaxActions.beginAjaxRequest());
    BookApi.saveBook(book).then((savedBook) => {
      dispatch(ajaxActions.completeAjaxRequest());
      if(book.id) {
        return dispatch(addBookSuccess(savedBook));
      } else {
        return dispatch(editBookSuccess(savedBook));
      }
    }).catch(error => {
      dispatch(ajaxActions.ajaxRequestError());
      throw(error);
    });
  };
}
