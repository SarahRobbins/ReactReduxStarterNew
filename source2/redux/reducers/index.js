import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import categoryReducer from './categoryReducer';
import ajaxRequestsReducer from './ajaxRequestsReducer';


const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoryReducer,
  ajaxRequests: ajaxRequestsReducer
});

export default rootReducer;
