import React  from 'react';
import { connect } from 'react-redux';

import Menu from '../layouts/menu';
import { signUp } from '../../actions/users';

const Sign_Up = ({ onAddUser }) => {

  let state = {
    user: {
      last_name: '',
      first_name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  };

  const onChange = field => e => {
    state.user[field] = e.target.value
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onAddUser(state);
  }

  return(
    <div>
      <Menu />
      <h3 className="text-center">Sign up</h3>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <form onSubmit={ onSubmit }>
              <div className="form-group">
                <label className="control-label">Last name</label>
                <input
                  value={state.last_name}
                  onChange={onChange('last_name')}
                  className="form-control"
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                />
              </div>

              <div className="form-group">
                <label className="control-label">First name</label>
                <input
                  value={state.first_name}
                  onChange={onChange('first_name')}
                  className="form-control"
                  type="text"
                  name="first_name"
                  placeholder="First name"
                />
              </div>

              <div className="form-group">
                <label className="control-label">Email</label>
                <input
                  value={state.email}
                  onChange={onChange('email')}
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>

              <div className="form-group">
                <label className="control-label">Password</label>
                <input
                  value={state.password}
                  onChange={onChange('password')}
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>

              <div className="form-group">
                <label className="control-label">Password confirmation</label>
                <input
                  value={state.password_confirmation}
                  onChange={onChange('password_confirmation')}
                  className="form-control"
                  type="password"
                  name="password_confirmation"
                  placeholder="Password confirmation"
                />
              </div>

              <button type="submit" className="btn btn-success">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


export default connect(
  state => ({}),
  dispatch => ({
    onAddUser: (state) => {
      dispatch(signUp(state));
    }
  })
)(Sign_Up);