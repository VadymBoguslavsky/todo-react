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

//пейлоад
export default function tasks(state = []/*initialState*/, action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'FETCH_TRACKS_SUCCESS') {
    var state_new = state.concat(action.payload);
    return  state_new;
  }else if (action.type === 'DELETE_TASK') {
      return state.filter(t => t.id !== action.payload) ;
  }
  return state;
}