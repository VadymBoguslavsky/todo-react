import React  from 'react';
import { connect } from 'react-redux';
import Menu from '../layouts/menu';


  // const cout_user = () => {
  //   console.log('cout_user', state); 
  // }
 
 /*
<form>
  <button onClick={cout_user} type="submit" className="btn btn-success">
    Sign up
  </button>
</form>*/


 
 
 


 

const Sign_Up = (props) => {  
   
  let  state = {
    user: {
      last_name: '',
      first_name: ''
    }
  };

  const onChange = field => e => {
    state.user[field] = e.target.value    
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  }

  return(
    <div>
      <Menu />
      <div className="container">
        <div className="row"> 
          <div className="col-md-6 col-md-offset-3"> 
          
           
          

                  
            <form onSubmit={onSubmit}> 
               
              <div className="form-group">
                <label className="control-label">User name</label>
                <input
                  value={state.last_name}
                  onChange={onChange('last_name')}
                  className="form-control"
                  type="text"
                  name="last_name"
                  placeholder="User name" 
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

export default connect( )(Sign_Up);





 














//========================================================================================
//========================================================================================
//========================================================================================
//========================================================================================
//========================================================================================
/*
import React from 'react'; 
  
class SignupForm extends React.Component {
  


  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    } 
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


   onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
 
   onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() { 
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>

       
        <div className="form-group">
          <label className="control-label">User name</label>
          <input
            value={this.state.username}
            onChange={this.onChange.bind(this)}
            className="form-control"
            type="text"
            name="username" 
           /> 
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange.bind(this)}
            className="form-control"
            type="email"
            name="email" 
           /> 
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange.bind(this)}
            className="form-control"
            type="password"
            name="password" 
           /> 
        </div>

        <div className="form-group">
          <label className="control-label">Password Confirmation</label>
          <input
            value={this.state.passwordConfirmation}
            onChange={this.onChange.bind(this)}
            className="form-control"
            type="password"
            name="passwordConfirmation" 
           /> 
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}
 

export default SignupForm;

*/










//========================================================================================
//========================================================================================
//========================================================================================
//========================================================================================
//========================================================================================




/*
import React  from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';



// const initialUser = {
//   email: '',
//   firstName: '',
//   lastName: '',
//   password: '',
//   passwordConfirmation: ''
// };
 
//   state = {
//     user: initialUser
//   };
 

  let  state = {
    user: { 
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      passwordConfirmation: '' 
    }
  };

 
  let { email, firstName, lastName, password, passwordConfirmation } = state.user;


  const cout_user = () => {
    console.log('cout_user', state); 
  }

 


const sign_up = (props) => {  
   
  return(
    <div>
      <Menu />
      <div className="container">
        <div className="row"> 
          <div className="col-md-6 col-md-offset-3"> 
          
           
            <form>
            <button onClick={cout_user} type="submit" className="btn btn-success">
                Sign up
              </button>
            </form>

                  


            <form>
              <div className="form-group">
                <label htmlFor="inputEmail" className="control-label">
                  Email
                </label>
                <input
                  className="form-control"
                  id="inputEmail"
                  //onChange={this.handleChange('email')}
                  placeholder="Email"
                  type="email"
                  value={state.email}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="inputFirstName" className="control-label">
                  First name
                </label>
                <input
                  className="form-control"
                  id="inputFirstName"
                  //onChange={this.handleChange('firstName')}
                  placeholder="First name"
                  type="text"
                  value={firstName}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="inputLastName" className="control-label">
                  Last name
                </label>
                <input
                  className="form-control"
                  id="inputLastName"
                  //onChange={this.handleChange('lastName')}
                  placeholder="Last name"
                  type="text"
                  value={lastName}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="inputPassword" className="control-label">
                  Password
                </label>
                <input
                  className="form-control"
                  id="inputPassword"
                  //onChange={this.handleChange('password')}
                  placeholder="Password"
                  type="password"
                  value={password}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="inputPasswordConfirmation" className="control-label">
                  Password confirmation
                </label>
                <input
                  className="form-control"
                  id="inputPasswordConfirmation"
                  //onChange={this.handleChange('passwordConfirmation')}
                  placeholder="Password confirmation"
                  type="password"
                  value={passwordConfirmation}
                  required
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

export default sign_up;

*/



//========================================================================================
//========================================================================================
//========================================================================================
//========================================================================================
//========================================================================================
//========================================================================================

/*
import React, { Component } from 'react'; 
import Menu from './Menu';

class RegistrationForm extends Component {
  constructor(props) {
    super(props); 
    this.state = { email: '' };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('form was submit', this.state.email);
  }

  handleEmailChange(event) {
    console.log('email was changed', event.target.value);
    this.setState({email: event.target.value})
  }

  render() {
    return ( 
      <div>
        <Menu />
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
*/