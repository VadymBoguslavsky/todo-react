import axios from 'axios';
const API_URL = `http://localhost:8000/tasks`; 
const headers = { 'Content-Type': 'application/json', }

export function getTracks(){
  return function(dispatch, getState) {
    axios.get(API_URL, { headers })
      .then(res => {
          console.log("actions/tracks.js res: ", res);
          if (res.status === 200) {
            dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: res.data });
          }
        })
      .catch(e => {
        console.error("error: ", e);
      })
  }
}



/*  var mockApiData = [
  {
    id: 1,
    name: 'Enter Sandman'
  },
  {
    id: 2,
    name: 'Welcome Home'
  },
  {
    id: 3,
    name: 'Master of Puppets'
  },
  {
    id: 4,
    name: 'Fade to Black'
  },
  {
    id: 5,
    name: 'Nothing Else Matters'
  }
];*/



// export const getTracks = () => dispatch => {
//   setTimeout(() => {
//     console.log('I got tracks');
//     dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData });
//   }, 1000)
// };