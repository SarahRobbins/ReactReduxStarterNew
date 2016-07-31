import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link, IndexLink } from 'react-router';
import BookList from './BookList';
import * as bookActions from '../../redux/actions/bookActions';

class BookPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onDeleteClick(bookId) {
    const confirmation = confirm("Are you sure you'd like to permanently delete this book from your library?");
    if(confirmation) {
      this.props.actions.deleteBook(bookId);
    }
  }

  render() {
    return (
      <div>
        <nav>
          <IndexLink to="/books" activeClassName="active">All Books</IndexLink>
          {this.props.categories.map((category) => {
            return (
                <span key={category.id}>
                  {" | "}
                  <Link to={"/books/" + category.id} activeClassName="active">{category.description}</Link>
                </span>
            );
          })}
        </nav>
        <BookList books={this.props.books} deleteConfirmation={this.onDeleteClick} />
        <Link to={"/book/" + this.props.category} className="btn btn-success btn-lg">Add a Book!</Link>
      </div>
    );
  }
}

BookPage.propTypes = {
  books: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

function filterBooksByCategory(books, category) {
  return books.filter(book => {
    return book.category == category;
  });
}

function mapStateToProps(state, ownProps) {
  const category = ownProps.params.category;
  let bookList = state.books;
  if(category) {
    bookList = filterBooksByCategory(state.books, category);
  }

  return {
    books: bookList,
    categories: state.categories,
    category: category ? category : ''
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bookActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
