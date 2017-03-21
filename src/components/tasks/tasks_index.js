import React from 'react';
import { connect } from 'react-redux';

import { getTracks } from '../../actions/tracks';
import Menu from '../layouts/menu';
import TasksList from './tasks_list';
import TaskNew from './task_new';
import TaskForm from './form';
import { Link } from 'react-router';


const Tasks_Index = () => { 
  return (
    <div>
      <Menu/>
      <div className="container">
        <div className="row"> 
          <div className="col-md-12">
            1
            <TaskForm />
            2
          </div>
          <div className="col-md-6">
            <TasksList />
          </div>

          <div className="col-md-offset-2 col-md-4">
            <TaskNew />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Tasks_Index;


/*import React from 'react';
import { connect } from 'react-redux';

import { getTracks } from '../../actions/tracks';
import Menu from '../layouts/menu';
import TasksList from './tasks_list';
import TaskNew from './task_new';
import { Link } from 'react-router';


const Tasks_Index = ({ tasks, onAddTrack, onFindTrack, onGetTracks, ownProps }) => {
 
  let trackInput = '';
  let searchInput = '';

  const addTrack = () => {
    console.log('addTrack', trackInput.value);
    onAddTrack(trackInput.value);
    trackInput.value = '';
  }

  const findTrack = () => {
    console.log('findTrack', searchInput.value);
    onFindTrack(searchInput.value);
  }

  return (


    <div>
      <Menu/>
      <div className="container">
        <div className="row"> 
          <div className="col-md-6">
            <TasksList />
          </div>

          <div className="col-md-offset-2 col-md-4">
            <TaskNew />
          </div>



          <div className="col-md-12">
            <div>
              <input type="text" ref={(input) => { trackInput = input }} />
              <button onClick={addTrack.bind(this)}>Add track</button>
            </div>
            <div>
              <input type="text" ref={(input) => { searchInput = input }} />
              <button onClick={findTrack.bind(this)}>Find track</button>
            </div>
            <div>
              <button onClick={onGetTracks}>Get tracks</button>
            </div>
            <ul>
              {tasks.map((track, index) =>
                <li key={index}>
                  <Link to={`/tracks/${track.id}`}>{track.title}</Link>
                </li>
              )}
            </ul>
          </div>

            



        </div>
      </div>
    </div>
  );
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
      }
      dispatch({ type: 'ADD_TRACK', payload });
    },
    onFindTrack: (title) => {
      dispatch({ type: 'FIND_TRACK', payload: title })
    },
    onGetTracks: () => { 
      dispatch(getTracks());
    }
  })
)(Tasks_Index);

*/










/*
import React, { Component } from 'react';
import Menu from './Menu';
 

class App extends Component {
  render() {
    return ( 
      <div>
        <Menu />
        <input type="text" placeholder="test" />
        <button>Subit</button>
      </div>
    );
  }
}

export default App;


*/

























/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/