import React, { Component } from 'react' ;
import './Leftbar.css';
import Navbar from "./Navbar" ;
import Menumain from './Menumain';
import { Switch, Route, Link} from 'react-router-dom' ;

class Leftmenu extends Component {
    render() {
        return(
            <div>
                <Navbar /> 
                <div className="container-fluid p-0"> 
                    <div className="leftlist shadow p-0 mb-0">
                        <div>
                            <Link to ="/main">
                                <i class="fas fa-home "></i>
                            </Link>
                            <Switch>
                                <Route path="/main" component={Menumain} />
                            </Switch> 
                        </div> 
                        <ul className="list-group list-group-item-dark p-0 m-0">
                            <li className="list-group-item content-justify-center">
                                <Link to ="/user">Add User</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to ="/allusers">All Users</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to ="/details">Details</Link>
                            </li> 
                        </ul>  
                    </div>
                </div>
            </div>
        );
    }
}

export default Leftmenu ;