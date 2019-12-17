import React, { Component } from 'react' ;
// import './Frontp.css';
import { Link } from 'react-router-dom' ;

class Frontpage extends Component {
    render() {
        return(
            <div>
            <div className="container-fluid p-0 position-fixed">
                <nav className="navbar navbar-light bg-dark">
                    <img src="./images/logo-image.png" width="60px" height="60px" alt=""/>  
                    <button type="button" className="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal">
                    <Link to ="/login">LOG IN</Link>
                    </button> 
                </nav>
                <img src="./images/2.jpg" className="img-fluid" alt="" />
                <div className="logo">
                    <img src="./images/logo-image.png" alt="" className="img"></img>
                </div>
            </div>
        </div>
        );
    }
}

export default Frontpage;