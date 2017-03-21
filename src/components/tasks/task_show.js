/*import React from 'react';
import { connect } from 'react-redux';

const Task = ({ task }) => <div>{task.name}</div>;

const mapStateToProps = (state, ownProps) => ({
  task: state.tracks.find(task => task.id === Number(ownProps.params.id))
})

export default connect(mapStateToProps)(Task);

*/




import React from 'react'; 
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router';

const API_URL = `http://localhost:8000/tasks`; 
const headers = { 'Content-Type': 'application/json', }

class Task extends React.Component {
  
  constructor() {
    super();
    this.state = { tasks: [] };
  }

  handleDestroy (id) {
    axios.delete(`${API_URL}/${id}`, { headers: headers })
      .then(res => {
          //console.log("res: " + res.status);
        })
      .catch(e => {
        console.error("error", e);
      })
  }

  componentDidMount () {
    fetch(API_URL)
      .then( (response) => {
        return response.json() })   
          .then( (json) => {
              this.setState({tasks: json});
          });



    axios.get('http://localhost:8000/tasks/19')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


  };
  
  render() {
    return(
      <div> 
        {this.state.tasks.map( (task) => {
          return (
            <div key={task.id}> 
            <br />
              <li className="li_height hover1 for_icons">  
                <div className="col-md-6" style={{backgroundColor: 'red'}} >{ task.title }</div>
                <div className="col-md-3" style={{backgroundColor: 'yellow'}} >{ task.due_date }</div>
                <div className="col-md-1" style={{backgroundColor: 'red'}} >{ task.priority }</div> 
                <div className="col-md-2 hover2 " style={{backgroundColor: 'yellow'}} >  
                  <span className="glyphicon glyphicon-align-left" title="Open task">
                    <Link to={`/task/${task.id}`}>{task.title}</Link>
                  </span>  
                  <span className="glyphicon glyphicon-check" title="Mark completed"></span>
                  <span onClick={this.handleDestroy.bind(this, task.id)}  className="glyphicon glyphicon-trash" title="Delete"></span>  
                </div>
              </li>
            </div>
          )
        })} 
      </div>  
    );
  }
}

export default  connect( 

)(Task);
