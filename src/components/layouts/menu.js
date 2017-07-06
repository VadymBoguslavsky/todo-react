import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

 
const Menu = ({ownProps}) => {

  let pathname = ownProps.routing.locationBeforeTransitions.pathname
  //console.log('ownProps pathname:', pathname);
  
  function li(link_to, text) { 
    let class_active = "active"; 

    if (pathname === link_to) {
      class_active = "active"; 
    } else {
      class_active = ""; 
    } 

    return (
      <div className="nav navbar-nav">
        <li className={class_active}><Link to={link_to}>{text}</Link></li>
      </div>
    );
  }

  return (
    <div>
      <div className="navbar navbar-default">
        <div className="container"> 
          <div className="row">  
            <ul> 
              <div className="col-md-9 nav navbar-nav">
                {li("/", 'Tasks')}
                {li("/user/sign_up", 'Log in / Sign up')} 
              </div> 
              <div className="pull-right nav navbar-nav">
                {li("/user/exit", 'Exit')}
              </div> 
            </ul> 
          </div>
        </div>
      </div> 
    </div>
  );
}
 
export default connect(
  ownProps => ({ 
    ownProps
  })
)(Menu);

 
 

/*
  

const { router } = this.props; 
const isActive = router.isActive.bind(router); 
 

 
 return (
      <div>
        <Link to="/"> / </Link>
        <Link to="/about"> About </Link>
        <Link to="/App"> App </Link>
        <Link to="/Home"> Home </Link>
        <Link to="/RegistrationForm"> RegistrationForm </Link>
        <Link to="/Dropdown"> Dropdown </Link>
      </div>
    );

*/ 