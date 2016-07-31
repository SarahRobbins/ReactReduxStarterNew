import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BookList from './BookList';
import * as bookActions from '../../redux/actions/bookActions';

class CoursePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Books</h1>
        <BookList books={this.props.books} />
      </div>
    );
  }
}

CoursePage.propTypes = {
  books: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bookActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
