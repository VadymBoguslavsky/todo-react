/*import React from 'react';
import { connect } from 'react-redux';

import { getTracks } from './actions/tracks';
import Menu from './components/layouts/Menu';
import TasksList from './components/tasks/TasksList';
 
const App = ({ tracks, onAddTrack, onFindTrack, onGetTracks  }) => {

 
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
        <div className="col-md-6">
          <TasksList />
        </div>
        <div className="col-md-6">
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
            {tracks.map((track, index) =>
              <li key={index}>{track.name}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default connect(
  (state ) => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)) 
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      }
      dispatch({ type: 'ADD_TRACK', payload });
    },
    onFindTrack: (name) => {
      dispatch({ type: 'FIND_TRACK', payload: name })
    },
    onGetTracks: () => { 
      dispatch(getTracks());
    }
  })
)(App);



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