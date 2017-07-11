import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteTask, completedTask, editTask} from '../../actions/tasks';
import InlineEdit from 'react-edit-inline';
class List extends Component {
  constructor(props) {
    super(props);
    this.dataChanged = this.dataChanged.bind(this);
    let checked = [];
    for (var i = 0; i < this.props.tasks.length; i++) {
      checked = checked.concat(
        checked = {
          id: this.props.tasks[i].id,
          status: false
        }
      );
    }

    this.state = {
      Tasks_completed: [],
      Tasks_not_completed: []
    };

  }

  dataChanged(data) {
    this.setState({...data})
  };

  thisFilter() {
    let Tasks_completed = [];
    let Tasks_not_completed = [];


    for (var i = this.props.tasks.length - 1; i >= 0; i--) {
      let task_now = this.props.tasks[i];
      if (task_now.completed) {
        Tasks_completed.push(task_now)
      } else {
        Tasks_not_completed.push(task_now)
      }
    }

    this.state.Tasks_completed = Tasks_completed;
    this.state.Tasks_not_completed = Tasks_not_completed;
  }

  render() {
    if (this.props.tasks.length) {
      this.thisFilter()
    }

    return (
      <div>
        <div>
          <div className="panel panel-primary">
            <div className="panel-heading">Active tasks</div>
            <div className="panel-body">
              <ul className="list-group">
                {this.state.Tasks_not_completed.map((task) => {
                  return (
                    <div key={task.id}>
                      <li className="li_height list-group-item hover1 for_icons">
                        <div className="col-md-2">{  task.title }</div>
                        <div className="col-md-2">{  task.description }</div>
                        <div className="col-md-2">{  task.priority }</div>
                        <div className="col-md-2">{  task.due_date }</div>
                        <span onClick={() => this.props.onDeleteTask(task.id)}
                              className="glyphicon glyphicon-trash col-md-1" title="Delete">
                        </span>
                        <span onClick={() => this.props.onCompletedTask(task.id, task.completed)}
                              className={task.completed ? "glyphicon glyphicon-minus " : "glyphicon glyphicon-check"}
                              title={task.completed ? "Mark completed" : "Mark completed"}>
                        </span>
                        <span onClick={() => this.props.onEditTask(this.props.editId, task.id)}
                              className="glyphicon glyphicon-pencil col-md-1" title="Edit task">
                        </span>
                      </li>
                    </div>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="panel panel-primary">
            <div className="panel-heading">Completed tasks</div>
            <div className="panel-body">
              <ul className="list-group">
                {this.state.Tasks_completed.map((task) => {
                  return (
                    <div key={task.id}>
                      <li className="li_height list-group-item hover1 for_icons">
                        <div className="col-md-2">{  task.title }</div>
                        <div className="col-md-2">{  task.description }</div>
                        <div className="col-md-2">{  task.priority }</div>
                        <div className="col-md-2">{  task.due_date }</div>
                        <span onClick={() => this.props.onDeleteTask(task.id)}
                              className="glyphicon glyphicon-trash col-md-1" title="Delete">
                        </span>
                        <span onClick={() => this.props.onCompletedTask(task.id, task.completed)}
                              className={task.completed ? "glyphicon glyphicon-minus" : "glyphicon glyphicon-check"}
                              title={task.completed ? "Mark completed" : "Mark completed"}>
                        </span>
                        <span onClick={() => this.props.onEditTask(this.props.editId, task.id)}
                              className="glyphicon glyphicon-pencil col-md-1" title="Edit task">
                        </span>
                      </li>
                    </div>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    tasks: state.tasks.tasks,
    editId: state.tasks.edit
  }),
  dispatch => ({
    onDeleteTask: (id) => {
      dispatch(deleteTask(id));
    },
    onCompletedTask: (id, completed) => {
      dispatch(completedTask(id, completed));
    },
    onEditTask: (editId, id) => {
      if (editId === id)
        editId = "";
      else
        editId = id;

      dispatch({type: 'EDIT_ID', payload: editId});
    }
  })
)(List);