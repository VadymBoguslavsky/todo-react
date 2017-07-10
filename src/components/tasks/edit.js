import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTask } from '../../actions/tasks';

class Edit extends Component {
  componentWillReceiveProps(newProps) {
    if (newProps.tasks[0]) {
      this.setState({ id: newProps.tasks[0].id  });
      this.setState({ title: newProps.tasks[0].title  });
      this.setState({ description: newProps.tasks[0].description });
      this.setState({ priority: newProps.tasks[0].priority });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      description: '',
      priority: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    console.log("!!!!!!!!!!!1")
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onEditTask(this.state);
  }


  render() {
    if (this.props.tasks[0]) {
      return (
        <div>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <div className="input-group">
                <input
                  value={this.state.title}
                  onChange={this.onChange}
                  className="form-control"
                  type="text"
                  name="title"
                  placeholder="Title"
                  required={true}
                />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">Title</button>
                </span>
              </div>
            </div>

            <div className="form-group">
              <textarea
                value={this.state.description}
                onChange={this.onChange}
                className="form-control"
                type="text"
                name="description"
                placeholder="Description"
                required={true}
              />
            </div>

            <div className="form-group">
              <div className="input-group">
                <input
                  value={this.state.priority}
                  onChange={this.onChange}
                  className="form-control"
                  type="number"
                  name="priority"
                  placeholder="Priority"
                  required={true}
                />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">Priority</button>
                </span>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Edit task
            </button>
          </form>
          <br /><br />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default connect(
  state => ({
    tasks: state.tasks.tasks.filter(t => t.id === state.tasks.edit)
  }),
  dispatch => ({
    onEditTask: (task) => {
      dispatch(editTask(task));
    }
  })
)(Edit);