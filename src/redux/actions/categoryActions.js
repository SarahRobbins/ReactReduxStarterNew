import * as types from './actionTypes';
import CategoryApi from '../../api/mockCategoryApi';

export function loadCategoriesSuccess(categories) {
  return {type: types.LOAD_CATEGORIES_SUCCESS, categories};
}

export function loadCategories() {
  return function(dispatch) {
    CategoryApi.getAllCategories().then(categories => {
      return dispatch(loadCategoriesSuccess(categories));
    }).catch(error => {
      throw(error);
    });
  };
}
