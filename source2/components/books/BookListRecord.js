import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const BookListRecord = ({book, deleteConfirmation}) => {
  const onDeleteClick = () => {
    deleteConfirmation(book.id);
  };

  return (
    <tr>
      <td><Link to={"/book/" + book.category + "/" + book.id}>{book.title}</Link></td>
      <td>{book.author}</td>
      <td>{book.category}</td>
      <td>{book.pages}</td>
      <td><button className="btn btn-danger" onClick={onDeleteClick}>Delete</button></td>
    </tr>
  );
};

BookListRecord.propTypes = {
  book: PropTypes.object.isRequired,
  deleteConfirmation: PropTypes.func.isRequired
};

export default BookListRecord;
