import React from 'react';
import { connect } from 'react-redux';
import Menu from '../layouts/menu';
import { exitUser } from '../../actions/users';

const Exit = ({ onExitUser }) => {
  onExitUser();
  return(
    <div>
      <Menu />
    </div>
  );
}

export default connect(
  state => ({}),
  dispatch => ({
    onExitUser: ( ) => {
      dispatch(exitUser());
    }
  })
)(Exit);