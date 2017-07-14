import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import cookie from 'react-cookies'

import './index.css';
import reducer from './reducers';
import Tasks_Index from './components/tasks/tasks_index';
import Sign_Up from './components/authentication/sign_up';
import Log_In from './components/authentication/log_in';
import EmailConfirmation from './components/authentication/email.confirmation';
import Exit from './components/authentication/exit';
import { fetchUser } from './actions/users';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

var token = { token: cookie.load('token') }

if(token.token) {

  store.dispatch(fetchUser())

  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Tasks_Index}/>
        <Route path="/user/exit" component={Exit}/>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
} else {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Log_In}/>
        <Route path="/users/log_in" component={Log_In}/>
        <Route path="/user/sign_up" component={Sign_Up}/>
        <Route path="/users/email_confirm" component={EmailConfirmation}/>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
}

store.subscribe(() => {
  console.log(store.getState());
})

