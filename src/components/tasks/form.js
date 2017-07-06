import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addTask} from '../../actions/tasks';
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      priority: '',
      user_id: this.props.user_id
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(e) {
    console.log(this.state)
    e.preventDefault();
    this.props.onAddTask(this.state);
    this.setState({
      title: '',
      description: '',
      priority: '',
      user_id: this.props.user_id
    });
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }


  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group createlist">
            <div className="form-input">
              <label className="control-label">Title</label>
              <input
                className="form-control"
                name="title"
                type="text"
                placeholder="Title"
                value={this.state.title}
                onChange={this.onChange}/>
            </div>
          </div>
          <div className="form-group createlist">
            <div className="form-input">
              <label className="control-label">Description</label>
              <textarea rows="1" cols="30"
                        className="form-control lol"
                        name="description"
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onChange}/>
            </div>

          </div>
          <div className="form-group createlist">
            <div className="form-input">
              <label className="control-label">Priority</label>
              <input
                value={this.state.priority}
                onChange={this.onChange}
                className="form-control"
                type="number"
                name="priority"
                placeholder="Priority"
                required={true}
              />
            </div>
          </div>
          <div className="form-group">
            <button className="btn btn-prinary btn-md">Create</button>
          </div>
        </form>
      </div>

    )
  }

}
export default connect(
  state => ({
    user_id: state.user.id
  }),
  dispatch => ({
    onAddTask: (e) => {
      dispatch(addTask(e));
    }
  })
)(TaskForm);
