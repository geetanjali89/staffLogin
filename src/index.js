import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Frontpage from './Staffproject/Frontpage' ;
import Loginbox from './Staffproject/Loginbox';
import Registerform from './Staffproject/Registerform';
import Menumain from './Staffproject/Menumain';
import Navbar from './Staffproject/Navbar' ;
import Leftmenu from './Staffproject/Leftmenu';
import User from './Staffproject/User';
import Details from './Staffproject/Details';
import Attendence from './Staffproject/Attendence';
import Addattend from './Staffproject/Addattend';
import Salary from './Staffproject/Salary';
import Userdetail from './Staffproject/Userdetail' ;
import Searchbutton from './Staffproject/Searchbutton' ;
import NoRouteFound from './Staffproject/NoRouteFound' ;
import Salaryleft from './Staffproject/Salaryleft';
import AllUsers from './Staffproject/AllUsers';
import Updateusers from './Staffproject/Updateusers';
import Salarygenerate from './Staffproject/Salarygenerate';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( 
    <Router>
        <Switch>
            <Route exact path="/" component={Frontpage} />
            <Route path="/login" component={Loginbox} />
            <Route path="/register" component={Registerform} />
            <Route path="/nav" component={Navbar} />
            <Route path="/main" component={Menumain} />
            <Route path="/leftmenu" component={Leftmenu} />
            <Route path="/user" component={User} />
            <Route path="/details" component={Details} />
            <Route path="/sbutton" component={Searchbutton} />
            <Route path="/salaryli" component={Salaryleft} />
            <Route path="/attendence" component={Attendence} />
            <Route path="/addattendence" component={Addattend} />
            <Route path="/userdetail" component={Userdetail} />
            <Route path="/salary" component={Salary} />
            <Route path="/allusers" component={AllUsers} />
            <Route path="/updating" component={Updateusers} />
            <Route path="/salarygenerate" component={Salarygenerate} />
            <Route component={NoRouteFound} />
        </Switch>
    </Router>,
    document.getElementById('root')
);
serviceWorker.unregister();
