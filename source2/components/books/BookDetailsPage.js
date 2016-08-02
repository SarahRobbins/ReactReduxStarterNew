import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as bookActions from '../../redux/actions/bookActions';
import toastr from 'toastr';

class BookDetailsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      book: this.props.book,
      categories: this.props.categories
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({book: newProps.book});
    this.setState({categories: newProps.categories});
  }

  onTextChange(event) {
    let book = this.state.book;
    const field = event.target.name;
    book[field] = event.target.value;
    this.setState({book: book});
  }

  onSaveClick(event) {
    event.preventDefault();
    this.props.actions.saveBook(this.state.book)
      .then(() => {
          toastr.success("Book saved");
          browserHistory.push('/books');
        }
      ).catch(error => {
        toastr.error(error);
    });
  }

  render() {
    return (
      <div>
        <BookForm book={this.state.book} allCategories={this.state.categories} onChange={this.onTextChange} onSave={this.onSaveClick} />
      </div>
    );
  }
}

BookDetailsPage.propTypes = {
  book: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function getBookById(allBooks, bookId) {
  const books = allBooks.filter(book => {
    return book.id === bookId;
  });
  return books[0];
}

function formatCategoriesForSelect(categories) {
  return categories.map(category => {
    return ({
      value: category.id,
      text: category.description
    });
  });
}

function mapStateToProps(state, ownProps) {
  let book = {id: '', title: '', author: '', category: '', pages: ''};
  if(ownProps.params.bookId && state.books.length > 0) {
    book = getBookById(state.books, ownProps.params.bookId);
  }

  if(!ownProps.params.bookId && ownProps.params.category) {
    book.category = ownProps.params.category;
  }

  return {
    book: book,
    categories: formatCategoriesForSelect(state.categories)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bookActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);


