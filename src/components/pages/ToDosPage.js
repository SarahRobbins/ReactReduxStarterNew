import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as toDoActions from '../../redux/actions/toDoActions';
import ToDoList from '../ToDoStuff/ToDoList';
import * as queryTypes from '../../api/queryTypes';
import AddToDoForm from '../ToDoStuff/AddToDoForm';
import toastr from 'toastr';

//why can't i uncheck the checkbox once it's checked?

class ToDosPage extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      toDos: this.props.toDos,
      showAddForm: false,
      editMode: false
    };

    this.toggleAdd = this.toggleAdd.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onBlurEdit = this.onBlurEdit.bind(this);
    this.getToDoById = this.getToDoById.bind(this);
    this.onToggleEditMode = this.onToggleEditMode.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      toDos: nextProps.toDos,
      hideAddForm: nextProps.hideAddForm
    });
  }

  toggleAdd(){
    this.setState({
      showAddForm: !this.state.showAddForm
    });
  }

  onClickAdd(toDo){
    this.props.actions.saveToDo(toDo);
    toastr.success("Task Added :)");
    this.toggleAdd();
  }

  //new stuff

    getToDoById(id) {
    const toDoArray = this.state.toDos.filter(toDo => {
      return toDo.id === id;
    });
    return toDoArray[0];
  }

    onBlurEdit(event){
      let toDo = this.getToDoById(event.target.closest('tr').id);
      this.props.actions.saveToDo(toDo);
    }

    onTextChange(event){
      const field = event.target.name;
      const value = event.target.value;
      let toDo = this.getToDoById(event.target.closest('tr').id);
      toDo[field] = value;
      this.setState({
        toDos: this.state.toDos
      });
    }

    onToggleEditMode(event) {
      event.preventDefault();
      this.setState({
        editMode: !this.state.editMode
      });
    }

  //end new stuff

  render() {
    return (
      <div>
        <nav>
          <IndexLink to="/toDos/outstanding" activeClassName="active">Outstanding</IndexLink>
          {" | "}
          <Link to="/toDos/overdue" activeClassName="active">Overdue</Link>
          {" | "}
          <Link to="/toDos/completed" activeClassName="active">Completed</Link>
          {" | "}
          <Link to="/toDos/all" activeClassName="active">All</Link>
        </nav>

        <br />
        <button className="btn btn-danger" onClick={this.onToggleEditMode}><span className="glyphicon glyphicon-edit"/></button>
        <br />

        <ToDoList
          toDos={this.state.toDos}
          onTextChange={this.onTextChange}
          readOnly={!this.state.editMode}
          onBlur={this.onBlurEdit}/>

        <button className="btn btn-primary" onClick={this.toggleAdd}>New Task -></button>
        <AddToDoForm hidden={this.state.showAddForm ? "" : "hidden"} onClickAdd={this.onClickAdd}/>
      </div>
    );
  }
}

ToDosPage.propTypes = {
  toDos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function filterToDosByQuery(toDoList, query) {
  switch(query) {
    case queryTypes.OUTSTANDING:
      return toDoList.filter(toDo => {
        return !toDo.completed && Date.parse(toDo.dueDate) > Date.now();
      });
    case queryTypes.COMPLETED:
      return toDoList.filter(toDo => {
        return toDo.completed;
      });
    case queryTypes.OVERDUE:
      return toDoList.filter(toDo => {
        return !toDo.completed && Date.parse(toDo.dueDate) < Date.now();
      });
    default:
      return toDoList;
  }
}

function mapStateToProps(state, ownProps) {
  const query = ownProps.params.query;
  let toDoList = state.toDos;

  if(query && (query != queryTypes.ALL))
  {
    toDoList = filterToDosByQuery(toDoList, query);
  }

  return {
    toDos: toDoList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(toDoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDosPage);
