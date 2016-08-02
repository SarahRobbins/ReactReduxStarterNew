import React, {PropTypes} from 'react';

const ToDoList = ({toDos, onTextChange, onBlur, readOnly}) => {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Task Description</th>
          <th>Due Date</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {toDos.map(toDo => {
          return (
            <tr key={toDo.id} id={toDo.id}>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={toDo.description}
                  onChange={onTextChange}
                  readOnly={readOnly}
                  onBlur={onBlur}/>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="dueDate"
                  value={toDo.dueDate}
                  onChange={onTextChange}
                  readOnly={readOnly}
                  onBlur={onBlur}/>
              </td>
              <td>
                <input
                  type="checkbox"
                  name="completed"
                  value={toDo.completed}
                  checked={toDo.completed}
                  onChange={onTextChange}
                  disabled={readOnly}
                  onBlur={onBlur}/>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  readOnly: PropTypes.bool.isRequired
};

export default ToDoList;
