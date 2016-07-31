import * as types from './actionTypes';
import BookApi from '../../api/mockBookApi';

export function loadBooksSuccess(books) {
  return {type: types.LOAD_BOOKS_SUCCESS, books};
}

export function loadBooks() {
  return function(dispatch) {
    BookApi.getAllBooks().then(books => {
      return dispatch(loadBooksSuccess(books));
    }).catch(error => {
      throw(error);
    });
  };
}
