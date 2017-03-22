
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
    return this.context.store.dispatch(getTracks());
  };

  handleDestroy (id) { 
    this.props.onHandleDestroy(id);
  }

  handleCompleted (id) { 
    this.props.onHandleCompleted(id);
  }

/*  findTrack() {
    console.log('findTrack', this.searchInput.value);
    this.props.onFindTrack(this.searchInput.value);
  }*/

  render() {
    return (
      <div>
        {/*       
        <div>
          <input type="text" ref={(input) => { this.searchInput = input }} />
          <button onClick={this.findTrack.bind(this)}>Find track</button>
        </div>        
        */}
 
        <div className="panel panel-primary">
          <div className="panel-heading">Active tasks</div>
          <div className="panel-body">
             <ul className="list-group">
                {this.props.tasks.active.map( (task) => {
                  return (
                    <div key={task.id}>  
                      <li className="li_height list-group-item hover1 for_icons">
                        <div className="col-md-6" style={{backgroundColor: 'white'}} >{ task.title }</div>
                        <div className="col-md-3" style={{backgroundColor: '#e8d5d5'}} >{ task.due_date }</div>
                        <div className="col-md-1" style={{backgroundColor: 'white'}} >{ task.priority }</div> 
                        <div className="col-md-2 hover2 " style={{backgroundColor: '#e8d5d5'}} >  
                          <Link to={`/task/${task.id}`}>
                            <span className="glyphicon glyphicon-align-left" title="Open task"></span>
                          </Link>
                          <span onClick={this.handleCompleted.bind(this, task.id)} className="glyphicon glyphicon-check" title="Mark completed"></span>
                          <span onClick={this.handleDestroy.bind(this, task.id)}  className="glyphicon glyphicon-trash" title="Delete"></span>  
                        </div>
                      </li> 
                    </div>
                  )
                })} 
              </ul>
          </div>
        </div>

        <div className="panel panel-info">
          <div className="panel-heading">Active tasks</div>
          <div className="panel-body">
             <ul className="list-group">
                {this.props.tasks.complite.map( (task) => {
                  return (
                    <div key={task.id}>  
                      <li className="li_height list-group-item hover1 for_icons">
                        <div className="col-md-6" style={{backgroundColor: 'white'}} >{ task.title }</div>
                        <div className="col-md-3" style={{backgroundColor: '#e8d5d5'}} >{ task.due_date }</div>
                        <div className="col-md-1" style={{backgroundColor: 'white'}} >{ task.priority }</div> 
                        <div className="col-md-2 hover2 " style={{backgroundColor: '#e8d5d5'}} >  
                          <Link to={`/task/${task.id}`}>
                            <span className="glyphicon glyphicon-align-left" title="Open task"></span>
                          </Link>  
                          <span className="glyphicon glyphicon-check" title="Mark completed"></span>
                          <span onClick={this.handleDestroy.bind(this, task.id)}  className="glyphicon glyphicon-trash" title="Delete"></span>  
                        </div>
                      </li> 
                    </div>
                  )
                })} 
              </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    tasks: {
      active: state.tasks.filter(task => !task.active),
      complite: state.tasks.filter(task => task.active)
    }
  }),
  dispatch => ({
/*    onAddTrack: (title) => {
      const payload = {
        id: Date.now().toString(),
        title
      };
      dispatch({ type: 'ADD_TRACK', payload });
    },*/
/*    onFindTrack: (title) => {
      console.log('title', title);
      dispatch({ type: 'FIND_TRACK', payload: title});
    },*/
/*    onGetTracks: () => {
      dispatch(getTracks());
    },*/
    onHandleDestroy: (id) => {
      axios.delete(`${API_URL}/${id}`, { headers: headers })
      .then(res => {
          console.log("res: ", res.status);
          dispatch({ type: 'DELETE_TASK', payload: id });
        })
      .catch(e => {
        console.error("error", e);
      })
    },
    onHandleCompleted: (id) => { 

      axios.get(`${API_URL}/${id}/completed`, { headers })
      .then(res => {
          console.log("res: ", res.status);
          console.log("res.data: ", res.data);
          //dispatch({ type: 'DELETE_TASK', payload: id });
        })
      .catch(e => {
        console.error("error: ", e);
      })
 
    }
  })
)(TasksList);




 