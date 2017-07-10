import React, {Component} from 'react';

import Menu from '../layouts/menu';
import List from './list';
import TaskForm from './form';
import Edit from './edit';
import {connect} from 'react-redux';

import {fetchTasks} from '../../actions/tasks';

const Tasks_Index = ({user_id, onFetchTasks}) => {
  if (user_id) {
    onFetchTasks(user_id)
    return (
      <div>
        <Menu />
        <div className="container">
          <div className="row">
            <div>
              <TaskForm />
            </div>
            <Edit />
            <List />
          </div>
        </div>
      </div>
    );
  } else
    return null;
}
export default connect(
  state => ({
    user_id: state.user.id,
    editId: state.tasks.edit
  }),
  dispatch => ({
    onFetchTasks: (user_id) => {
      dispatch(fetchTasks(user_id));
    }
  })
)(Tasks_Index);