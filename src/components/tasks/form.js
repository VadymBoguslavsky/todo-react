import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getTracks } from '../../actions/tracks';
import axios from 'axios';

const API_URL = `http://localhost:8000/tasks`; 
const headers = { 'Content-Type': 'application/json', }

class TasksList extends Component {
 


  addTrack() {
      console.log('addTrack', this.trackInput.value);
      this.props.onAddTrack(this.trackInput.value);
      this.trackInput.value = '';
  }

 

  render() {
    console.log(this.props.tasks);
    return (
      <div>
        <div>
          <input type="text" ref={(input) => { this.trackInput = input }} />
          <button onClick={this.addTrack.bind(this)}>Add track</button>
        </div>
       
        <div>
          <button onClick={this.props.onGetTracks}>Get tasks</button>
        </div>

        {this.props.tasks.map( (task) => {
          return (
            <div key={task.id}> 
            <br />
               { task.title }
            </div>
          )
        })} 
      </div>
    );
  }
}

export default connect(
  state => ({
    tasks: state.tasks.filter(track => track.title.includes(state.filterTracks))
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
        console.log(res);
        dispatch({ type: 'ADD_TRACK', payload });
      })
      .catch(e => {
        console.error(e);
      })



    } 
  })
)(TasksList);