import React from 'react'; 
import { connect } from 'react-redux';
import { AddTask } from '../../actions/tracks';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      priority: '',
      due_date: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onAddTask(this.state);
    this.state = {
      title: '',
      description: '',
      priority: '',
      due_date: ''
    }
  }

  render() {  
    return (
      <div>
        <form onSubmit={this.onSubmit}> 
          <div className="form-group">
            {/*<label className="control-label">title</label>*/}
            <input
              value={this.state.title}
              onChange={this.onChange}
              className="form-control"
              type="text"
              name="title"
              placeholder="title" 
             /> 
          </div>

          <div className="form-group">
            {/*<label className="control-label">description</label>*/}
            <textarea
              value={this.state.description}
              onChange={this.onChange}
              className="form-control"
              type="text"
              name="description"
              placeholder="description" 
             /> 
          </div>

          <div className="form-group">
            {/*<label className="control-label">priority</label>*/}
            <input
              value={this.state.priority}
              onChange={this.onChange}
              className="form-control"
              type="number"
              name="priority"
              placeholder="priority" 
             /> 
          </div>

          <div className="form-group">
            {/*<label className="control-label">due_date</label>*/}
            <input
              value={this.state.due_date}
              onChange={this.onChange}
              className="form-control"
              type="date"
              name="due_date"
              placeholder="due_date"  
            /> 
          </div>

          <button type="submit" className="btn btn-success">
            Add task
          </button>
        </form> 
      </div>
    );
  }
}
export default connect(
  state => ({
    tasks: state.tasks
  }),
  dispatch => ({
    onAddTask: (e) => {
      dispatch(AddTask(e));
    }
  })
)(TaskForm);





 

 





/*import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
 
class TasksList extends Component {

  addTrack() {
    console.log('addTrack', this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" ref={(input) => { this.trackInput = input }} />
          <button onClick={this.addTrack.bind(this)}>Add track</button>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    tasks: state.tasks
  }),
  dispatch => ({
    onAddTrack: (title) => {
      const payload = {
        id: Date.now().toString(),
        title
      }; 

      let API_URL = `http://localhost:8000/tasks`;
      let body = JSON.stringify({task: payload});
      let headers = { 'Content-Type': 'application/json', }

      axios.post(API_URL, body, { headers: headers })
        .then(res => {
          dispatch({ type: 'ADD_TRACK', payload });
        })
        .catch(e => {
          console.error(e);
        })
    } 
  })
)(TasksList);*/

























// TASK_NEW




/*import React  from 'react'; 
import axios from 'axios';

const TaskNew = () => {  

  var  state = {
    task: {
      title: '',
      description: '',
      priority: '',
      due_date: '',
      user_id: ''
    }
  };

  const onChange = field => e => {
    state.task[field] = e.target.value    
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(state.task);

    let API_URL = `http://localhost:8000/tasks`;
    let body = JSON.stringify({task: state.task});
    let headers = { 'Content-Type': 'application/json', }

    axios.post(API_URL, body, { headers: headers })
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.error(e);
      })
  }

  return(
    <div>  
      <form onSubmit={onSubmit}> 
        <div className="form-group">
          <label className="control-label">title</label>
          <input
            value={state.title}
            onChange={onChange('title')}
            className="form-control"
            type="text"
            name="title"
            placeholder="title" 
           /> 
        </div>

        <div className="form-group">
          <label className="control-label">description</label>
          <textarea
            value={state.description}
            onChange={onChange('description')}
            className="form-control"
            type="text"
            name="description"
            placeholder="description" 
           /> 
        </div>

        <div className="form-group">
          <label className="control-label">priority</label>
          <input
            value={state.priority}
            onChange={onChange('priority')}
            className="form-control"
            type="number"
            name="priority"
            placeholder="priority" 
           /> 
        </div>

        <div className="form-group">
          <label className="control-label">due_date</label>
          <input
            value={state.due_date}
            onChange={onChange('due_date')}
            className="form-control"
            type="date"
            name="due_date"
            placeholder="due_date"  
          /> 
        </div>

        <button type="submit" className="btn btn-success">
          Add task
        </button>
      </form> 
    </div>
  );
}

export default  TaskNew;*/














//https://github.com/Hacker0x01/react-datepicker

/* 
import DatePicker  from 'react-datepicker'; 
import moment  from 'moment';  

require('react-datepicker/dist/react-datepicker.css');
  const handleChange = (date) => {
    //console.log("date" + date); 
    //state.due_date = date 

    console.log("due_date" + state.due_date); 
    return {
      type: 'CHANGE_DATE',
      due_date: date
    }

  }

  var  state = {
    task: { 
      due_date: '' 
    }
  };


  state.due_date = moment() 
  console.log(state.due_date);




<div className="form-group">
  <label className="control-label">due_date</label>
  <br />
 <DatePicker
    selected={state.due_date}
    onChange={handleChange}  
    className="form-control"
    dateFormat="YYYY/MM/DD"
    minDate={moment()}
  />
</div>
*/