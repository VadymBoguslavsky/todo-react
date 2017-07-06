import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from '../layouts/menu';
import { emailConfirmation } from '../../actions/users';

class EmailConfirmation extends Component {

  componentDidMount() {
    var email_token = this.props.ownProps.routing.locationBeforeTransitions.query.email_token
    this.props.onEmailConfirmation(email_token);
  }

  render() {
    return(
      <div>
        <Menu />
      </div>
    );
  }
}

export default connect(
  ownProps => ({
    ownProps
  }),
  dispatch => ({
    onEmailConfirmation: (email_token) => {
      dispatch(emailConfirmation(email_token));
    }
  })
)(EmailConfirmation);