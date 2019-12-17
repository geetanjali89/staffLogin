import React, { Component } from 'react';
import './Menu.css' ;
import Leftmenu from './Leftmenu';
import Salary from './Salary';
import Attendence from './Attendence';
import WOW from 'wowjs' ;
import {Switch, Route, Link} from 'react-router-dom' ;

class Menumain extends Component {
        componentDidMount(){
        new WOW.WOW().init();
    }
    render() {
        return(
            <div className="container-fluid p-0 position-fixed">
                <nav className="navbar navbar-expand-lg justify-content-start bg-dark">
                <div className="collapse navbar-collapse">
                    <img src="./images/logo-image.png" width="60px" height="60px" alt=""/>
                    <a className="nav-link active text-white text-bold">
                        <Link to ="/leftmenu">STAFF DETAILS</Link>
                        <Switch>
                            <Route path="/leftmenu" component={Leftmenu} />
                        </Switch>
                    </a>
                    <a className="nav-link text-white text-bold">
                    <Link to ="/attendence">ATTENDENCE</Link>
                        <Switch>
                            <Route path="/attendence" component={Attendence} />
                        </Switch>
                    </a>
                    <a className="nav-link text-white text-bold">
                    <Link to ="/salary">SALARY</Link>
                        <Switch>
                            <Route path="/salary" component={Salary} />
                        </Switch>
                    </a>
                    <button className="btn_log btn-outline-info my-2 my-sm-0" type="submit" >
                          {/* onClick={() => this.logout()}> Logout */}
                         <Link to ="/">Logout</Link> 
                    </button>
                </div>
                </nav> 
                    <img src="./images/2.jpg" className="img-fluid" alt="Responsive image" />
                <div className="logo wow zoomIn">
                    <img src="./images/logo-image.png" alt="" className="img"></img>
                </div>
            </div>
        );
    }
}

export default Menumain;