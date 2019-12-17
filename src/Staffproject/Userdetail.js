import React, { Component } from 'react' ;
import './Leftbar.css' ;
import Addattend from './Addattend';
import { Route } from 'react-router-dom' ;

class Userdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        num: this.props.num  
    };
  }
    render(){
        return(          
            <div class="row rgt">
            <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src="./images/blank.png" class="card-img" alt="" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">User Name</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-outline-info my-2 my-sm-0" type="submit"
              onClick={() => this.props.history.push("/addattendence/userdetail")} >
              Add Attendence
          </button>
          </div>
          <br />
          <Route path="/addattendence/userdetail" render={(props) =>
            < Addattend {...props} />
          } /> 
        </div>
      );
    }
}

export default Userdetail;