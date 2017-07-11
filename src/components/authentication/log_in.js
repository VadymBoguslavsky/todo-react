import React  from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Menu from '../layouts/menu';
import { logIn } from '../../actions/users';

const Log_In = ({ onLogIn }) => {

  let state = {
    session: {
      email: '',
      password: ''
    }
  };

  const onChange = field => e => {
    state.session[field] = e.target.value
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onLogIn(state);
  }

  return(
    <div>
      <Menu />
      <h3 className="text-center">Log in</h3>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <form onSubmit={ onSubmit }>
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

              <button type="submit" className="btn btn-success">
                Log in
              </button>
            </form>
            <br/>
            <Link to="/user/sign_up" className="btn btn-primary">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(
  state => ({}),
  dispatch => ({
    onLogIn: (state) => {
      dispatch(logIn(state.session));
    }
  })
)(Log_In);