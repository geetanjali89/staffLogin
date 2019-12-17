import React, { Component } from 'react' ;
import Menumain from './Menumain';
import Navbar from './Navbar';

import {Switch, Route, Link} from 'react-router-dom' ;

class Salaryleft extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <div className="container-fluid p-0"> 
                <div className="leftlist shadow p-3 mb-0">
                <div>
                    <Link to ="/main">
                        <i class="fas fa-home"></i>
                    </Link>
                    <Switch>
                        <Route path="/main" component={Menumain} />
                    </Switch> 
                </div>
                <form>
                    <div class="row">
                    <div class="col">
                        <input type="text" class="form-control bg-light" placeholder="ID" />
                         
                        <br />
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        );
    }
}       
   
export default Salaryleft;