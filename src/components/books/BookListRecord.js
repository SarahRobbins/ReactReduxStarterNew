import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const BookListRecord = ({book}) => {
  return (
    <tr>
      <td><Link to={"/book/" + book.id}>{book.title}</Link></td>
      <td>{book.author}</td>
      <td>{book.category}</td>
      <td>{book.pages}</td>
    </tr>
  );
};

BookListRecord.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookListRecord;
