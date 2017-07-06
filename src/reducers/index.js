import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import tasks from './tasks';

export default combineReducers({
  routing: routerReducer,
  user,
  tasks
});