import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router'
import routes from './routes';
import configureStore from './redux/store/configureStore';
import { Provider } from 'react-redux';
import { loadBooks } from './redux/actions/bookActions';
import { loadCategories } from './redux/actions/categoryActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadBooks());
store.dispatch(loadCategories());

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
       document.getElementById('app')
);
