import React, { Component } from 'react';
import Frontpage from './Frontpage' ;
import WOW from 'wowjs' ;

class Registerform extends Component{
    componentDidMount(){
        new WOW.WOW().init();
    }
    render(){
        return(
            <div>
                <Frontpage />
                <div className="modal-content modbox p-3 wow fadeInDown bg-light">
                <div className="member">
                    <i className="fas fa-users"></i>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    <h4>CREATE ACCOUNT</h4>
                </div>
                    <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email ID</label>
                        <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupPrepend2">
                            <i className="fas fa-envelope"></i></span>
                        </div>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email ID" />       
                    </div> 
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupPrepend2">
                            <i class="fas fa-user"></i></span>
                        </div>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Username" />       
                    </div>
                    </div> 
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupPrepend2">
                        <i class="fas fa-lock"></i>
                        </span>
                        </div>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    </div>
                    <br />
                    <button type="submit" class="btn btn-block btn-primary">Create Account</button>
                    <br />
                    </form>
                </div>
            </div>
        );
    }
}

export default Registerform ;