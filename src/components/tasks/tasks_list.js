/*import React from 'react'; 
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router';
import { getTracks } from '../../actions/tracks';


const API_URL = `http://localhost:8000/tasks`; 
const headers = { 'Content-Type': 'application/json', }

class TasksList extends React.Component {
  
  constructor() {
    super();
    this.state = { tasks: [] };
  }

  handleDestroy (id) {
    axios.delete(`${API_URL}/${id}`, { headers: headers })
      .then(res => {
          //console.log("res: " + res.status);
        })
      .catch(e => {
        console.error("error", e);
      })
  }

  componentDidMount () {
    fetch(API_URL)
      .then( (response) => {
        return response.json() })   
          .then( (json) => {
              this.setState({tasks: json});
          });
  };
  
  render() {
    return(
      <div> 
        {this.state.tasks.map( (task) => {
          return (
            <div key={task.id}> 
            <br />
              <li className="li_height hover1 for_icons">  
                <div className="col-md-6" style={{backgroundColor: 'red'}} >{ task.title }</div>
                <div className="col-md-3" style={{backgroundColor: 'yellow'}} >{ task.due_date }</div>
                <div className="col-md-1" style={{backgroundColor: 'red'}} >{ task.priority }</div> 
                <div className="col-md-2 hover2 " style={{backgroundColor: 'yellow'}} >  
                  <span className="glyphicon glyphicon-align-left" title="Open task">
                    <Link to={`/task/${task.id}`}></Link>
                  </span>  
                  <span className="glyphicon glyphicon-check" title="Mark completed"></span>
                  <span onClick={this.handleDestroy.bind(this, task.id)}  className="glyphicon glyphicon-trash" title="Delete"></span>  
                </div>
              </li>
            </div>
          )
        })} 
      </div>  
    );
  }
}

export default  connect(

)(TasksList);*/




import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getTracks } from '../../actions/tracks';
import axios from 'axios';

const API_URL = `http://localhost:8000/tasks`; 
const headers = { 'Content-Type': 'application/json', }

class TasksList extends Component {


  static contextTypes = { 
    store: React.PropTypes.object
  };


  componentDidMount () {
    /*fetch(API_URL)
      .then( (response) => {
        return response.json() })   
          .then( (json) => {
              this.setState({tasks: json});
          });*/
    console.log("da")
    return this.context.store.dispatch(getTracks());
  };

  handleDestroy (id) {
    axios.delete(`${API_URL}/${id}`, { headers: headers })
      .then(res => {
          //console.log("res: " + res.status);
        })
      .catch(e => {
        console.error("error", e);
      })
  }

  addTrack() {
      console.log('addTrack', this.trackInput.value);
      this.props.onAddTrack(this.trackInput.value);
      this.trackInput.value = '';
  }

  findTrack() {
    console.log('findTrack', this.searchInput.value);
    this.props.onFindTrack(this.searchInput.value);
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
          <input type="text" ref={(input) => { this.searchInput = input }} />
          <button onClick={this.findTrack.bind(this)}>Find track</button>
        </div>
        <div>
          <button onClick={this.props.onGetTracks}>Get tasks</button>
        </div>

        {this.props.tasks.map( (task) => {
          return (
            <div key={task.id}> 
            <br />
              <li className="li_height hover1 for_icons">  
                <div className="col-md-6" style={{backgroundColor: 'red'}} >{ task.title }</div>
                <div className="col-md-3" style={{backgroundColor: 'yellow'}} >{ task.due_date }</div>
                <div className="col-md-1" style={{backgroundColor: 'red'}} >{ task.priority }</div> 
                <div className="col-md-2 hover2 " style={{backgroundColor: 'yellow'}} >  
                  <span className="glyphicon glyphicon-align-left" title="Open task">
                    <Link to={`/task/${task.id}`}></Link>
                  </span>  
                  <span className="glyphicon glyphicon-check" title="Mark completed"></span>
                  <span onClick={this.handleDestroy.bind(this, task.id)}  className="glyphicon glyphicon-trash" title="Delete"></span>  
                </div>
              </li>
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
      dispatch({ type: 'ADD_TRACK', payload });
    },
    onFindTrack: (title) => {
      console.log('title', title);
      dispatch({ type: 'FIND_TRACK', payload: title});
    },
    onGetTracks: () => {
      dispatch(getTracks());
    }
  })
)(TasksList);