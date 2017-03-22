import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' 
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import './index.css';
import reducer from './reducers';
import Task from './components/tasks/task_show';
import Tasks_Index from './components/tasks/tasks_index';
import Sign_Up from './components/authentication/sign_up'; 

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);
 
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Tasks_Index}/>
      <Route path="/user/sign_up" component={Sign_Up}/>
      <Route path="/task/:id" component={Task}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

//показує що змінилося в store
store.subscribe(() => {
  console.log(store.getState());
})


/*
Урок 2

import { createStore } from 'redux'

function playlist (state = [], action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(playlist);

const addTrackBtn = document.querySelectorAll('.addTrack')[0];
const list = document.querySelectorAll('.list')[0];
const trackInput = document.querySelectorAll('.trackInput')[0];


store.subscribe(() => {
  list.innerHTML = '';
  trackInput.value = '';
  store.getState().forEach(track => {
    const li = document.createElement('li');
    li.textContent = track;
    list.appendChild(li);
  })
})

addTrackBtn.addEventListener('click', () => {
  const trackName = trackInput.value;
  store.dispatch({ type: 'ADD_TRACK', payload: trackName });
});*/








// урок з реакта
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory } from 'react-router'

// import App from './App';
// import Home from './Home';
// import RegistrationForm from './RegistrationForm';
// import Dropdown from './Dropdown';
// import './index.css';

// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route path="/" component={App}/>
//     <Route path="App" component={App}/>
//     <Route path="Home" component={Home}/>
//     <Route path="RegistrationForm" component={RegistrationForm}/>
//     <Route path="Dropdown" component={Dropdown}/>
//   </Router>,
//   document.getElementById('root')
// ); 