import React  from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import cookie from 'react-cookies'

const API_URL = `http://localhost:3000/users`;
// const API_URL = `https://jarvis-rails-api.herokuapp.com/users`;
const headers = { 'Content-Type': 'application/json', }
const token = cookie.load('token')

export function fetchUser(){
  return function(dispatch, getState) {
    if (cookie.load('token')) {
      let body = JSON.stringify({ token: token });

      axios.post(`${API_URL}/fetch_token`, body, { headers: headers })
        .then(res => {
          dispatch({ type: 'STORE_USER', payload: res.data });
        })
        .catch(e => {
          console.error("error: ", e);
        })
    }
  }
}

export function exitUser(){
  return function(dispatch, getState) {
    if (cookie.load('token')) {
      let body = JSON.stringify({ token: cookie.load('token') });

      axios.post(`${API_URL}/destroy_token`, body, { headers: headers })
        .then(res => {
          dispatch({ type: 'DELETE_TOKEN_USER', payload: res.data });
          // dispatch({ type: 'ADD_ALERT', payload: { type: "success", text: "Exit..." } });
          cookie.remove('token', { path: '/' });

          browserHistory.push('#/users/log_in');
          setTimeout(() => {
            location.reload()
          }, 500)

          console.log("res", res)
        })
        .catch(e => {
          console.error("error: ", e);
        })
    }
  }
}

export function signUp(user){
  return function(dispatch, getState) {
    console.log(user);
    axios.post(API_URL, user, { headers: headers })
      .then(res => {
        if (res.status === 200) {
          dispatch({ type: 'ADD_ALERT', payload: { type: "success", text: "Confirm your email address" } });
          browserHistory.push('#/users/log_in');
          setTimeout(() => {
            location.reload()
          }, 2000)
        } else if (res.status === 207) {
          dispatch({ type: 'ADD_ALERT', payload: { type: "danger", text: `${res.data.message}` } });
        }
      })
      .catch(e => {
        var err = e.response.data
        let alert_text = ""

        for( let i in err ){
          err[i].forEach((alert, j) => {
            alert_text += i + " " + alert + "; "
            console.log("alert_text", alert_text)
          })
        }
        dispatch({ type: 'ADD_ALERT', payload: { type: "danger", text: <div>Could not create user<br /> {alert_text}</div> }});
      })
  }
}

export function logIn(session){
  return function(dispatch, getState) {
    let body = JSON.stringify({ session: session });

    axios.post(`${API_URL}/create_token`, body, { headers: headers })
      .then(res => {
        console.log(res)
        if (res.status === 201) {
          cookie.save('token', res.data.token, { path: '/' });
          dispatch({ type: 'ADD_ALERT', payload: { type: "success", text: `${res.data.message}` } });

          browserHistory.push('#/');
          setTimeout(() => {
            location.reload()
          }, 1000)
        } else if (res.status === 207) {
          dispatch({ type: 'ADD_ALERT', payload: { type: "danger", text: `${res.data.message}` } });
        }
      })
      .catch(e => {
        console.error("error: ", e);
      })
  }
}

export function emailConfirmation(email_token){
  return function(dispatch, getState) {
    axios.get(`${API_URL}/${email_token}/confirm_email`, { headers: headers })
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          dispatch({ type: 'ADD_ALERT', payload: { type: "success", text: `${res.data.message}` } });

          browserHistory.push('#/users/log_in');
          setTimeout(() => {
            location.reload()
          }, 1500)
        } else if (res.status === 207) {
          dispatch({ type: 'ADD_ALERT', payload: { type: "danger", text: `${res.data.message}` } });
        }
      })
      .catch(e => {
        console.error("error: ", e);
      })
  }
}