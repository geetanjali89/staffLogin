import React, { Component } from 'react';
// import Frontpage from './Frontpage';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg justify-content-start bg-dark">
                <div className="collapse navbar-collapse">
                    <img src="./images/logo-image.png" width="60px" height="60px" alt=""/>
                    <a className="nav-link active text-white text-bold">STAFF DETAILS</a>
                    <a className="nav-link text-white text-bold">ATTENDENCE</a>
                    <a className="nav-link text-white text-bold">SALARY</a>
                <button className="btn_log btn-outline-info my-2 my-sm-0" type="button">
                    <Link to ="/">
                        Logout
                        </Link>
                </button>
                </div>
            </nav> 
        );
    }
}