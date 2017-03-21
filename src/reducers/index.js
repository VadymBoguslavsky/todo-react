import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tasks from './tasks';
import filterTracks from './filterTracks';

export default combineReducers({
  routing: routerReducer,
  tasks, 
  filterTracks
});