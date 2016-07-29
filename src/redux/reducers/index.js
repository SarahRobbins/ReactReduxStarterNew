import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import categoryReducer from './categoryReducer';


const rootReducer = combineReducers({
  books: bookReducer,
  categories:  categoryReducer
});

export default rootReducer;
