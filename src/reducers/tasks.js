/*const initialState = [
  {
    id: 1,
    title: 'Enter Sandman'
  },
  {
    id: 2,
    title: 'Welcome Home'
  },
  {
    id: 3,
    title: 'Master of Puppets'
  }
];*/

export default function tasks(state = []/*initialState*/, action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'FETCH_TRACKS_SUCCESS') {
    console.log("reduser/tracks.js action.payloa: ", action.payload)
    var alphaNumeric = state.concat(action.payload);
    console.log("alphaNumeric", alphaNumeric)
    return  alphaNumeric;
    //...state,
    //action.payload
  }
  return state;
}