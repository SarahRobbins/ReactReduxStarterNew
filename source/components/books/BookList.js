import React, { PropTypes } from 'react';
import BookListRecord from './BookListRecord';

const BookList = ({books}) => {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Pages</th>
      </thead>
      <tbody>
      {books.map(book => {
        return <BookListRecord key={book.id} book={book}/>;
      })}
      </tbody>
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.object.isRequired
};

export default BookList;
