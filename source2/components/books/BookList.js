import React, { PropTypes } from 'react';
import BookListRecord from './BookListRecord';
import toastr from 'toastr';

const BookList = ({books, deleteConfirmation}) => {

  return (
    <table className="table table-striped table-hover">
      <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Pages</th>
        <th>Remove</th>
        </tr>
      </thead>
      <tbody>
      {books.map(book => {
        return <BookListRecord key={book.id} book={book} deleteConfirmation={deleteConfirmation}/>;
      })}
      </tbody>
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  deleteConfirmation: PropTypes.func.isRequired
};

export default BookList;
