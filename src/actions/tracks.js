import axios from 'axios';
const API_URL = `http://localhost:8000/tasks`; 
const headers = { 'Content-Type': 'application/json', }

export function getTracks(){
  return function(dispatch, getState) {
    axios.get(API_URL, { headers })
      .then(res => {
          //console.log("actions/tracks.js res: ", res);
          if (res.status === 200) {
            dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: res.data });
          }
        })
      .catch(e => {
        console.error("error: ", e);
      })
  }
}


export function AddTask(e){
  return function(dispatch, getState) {
    let body = JSON.stringify({task: e});

    axios.post(API_URL, body, { headers: headers })
      .then(res => {
        dispatch({ type: 'ADD_TRACK', payload: res.data });
      })
      .catch(e => {
        console.error(e);
      })
  }
}
 