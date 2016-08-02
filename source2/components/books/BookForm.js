import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const BookForm = (props) => {
  return (
    <div>
      <h1>Book Details</h1>
      <form>
        <TextInput
          name="title"
          label="Title"
          value={props.book.title}
          onChange={props.onChange}
        />

        <TextInput
          name="author"
          label="Author"
          value={props.book.author}
          onChange={props.onChange}
        />

        <SelectInput
          name="category"
          label="Category"
          value={props.book.category}
          defaultOption="Select Category"
          options={props.allCategories}
          onChange={props.onChange}/>

        <TextInput
          name="pages"
          label="Pages"
          value={props.book.pages}
          onChange={props.onChange}
        />

        <input
          type="submit"
          value="Submit"
          className="btn btn-primary"
          onClick={props.onSave}
        />
      </form>
    </div>
  );
};

BookForm.propTypes = {
  book: React.PropTypes.object.isRequired,
  allCategories: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired
  // loading: React.PropTypes.bool,
  // errors: React.PropTypes.object
};

export default BookForm;
