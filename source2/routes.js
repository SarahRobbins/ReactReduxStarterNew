import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import HomePage from './components/home/HomePage';
import BookPage from './components/books/BookPage';
import BookDetailsPage from './components/books/BookDetailsPage';
import ContactPage from './components/contact/ContactPage';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage} />
    <Route path="books" component={BookPage} />
    <Route path="books/:category" component={BookPage}/>
    <Route path="book" component={BookDetailsPage} />
    <Route path="book/:category" component={BookDetailsPage} />
    <Route path="book/:category/:bookId" component={BookDetailsPage} />
    <Route path="contact" component={ContactPage} />
  </Route>
);

