import React, {PropTypes} from 'react';

class ManageToDoForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      toDo: {description: '', dueDate: '', completed: false},
      hidden: this.props.hidden
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      hidden: nextProps.hidden
    });
  }

  onChangeText(event){
    const field = event.target.name;
    const value = event.target.value;
    let toDo = this.state.toDo;
    toDo[field] = value;
    this.setState({
      toDo: toDo
    });
  }

  onAdd(event){
    event.preventDefault();
    this.props.onClickAdd(this.state.toDo);
    this.setState({
      toDo: {description: '', dueDate: '', completed: false}
    });
  }

  render() {
    return (
      <div className={"well " + this.state.hidden}>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Task description"
          value={this.state.toDo.description}
          onChange={this.onChangeText}/>
        <br />
        <input
          type="text"
          name="dueDate"
          className="form-control"
          placeholder="Due date - mm/dd/yy"
          value={this.state.toDo.dueDate}
          onChange={this.onChangeText}/>
        <br />
        <input
          type="checkbox"
          name="completed"
          checked={this.state.toDo.completed}
          value={this.checked}
          onChange={this.onChangeText}/> Completed
        <br />
        <br />
        <button className="btn btn-warning" onClick={this.onAdd}>Add ToDo</button>
      </div>
    );
  }
}

ManageToDoForm.propTypes = {
  hidden: PropTypes.string.isRequired,
  onClickAdd: PropTypes.func.isRequired
};


export default ManageToDoForm;
