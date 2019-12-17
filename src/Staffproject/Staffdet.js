import React, { Component } from 'react';
import './Staffdet.css';

class Staffdet extends Component {
    render() {
        return(
            <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg justify-content-start bg-dark">
                <div className="collapse navbar-collapse">
                    <img src="./images/logo-image.png" width="60px" height="60px" alt=""/>
                    <a className="nav-link active text-white text-bold">STAFF DETAILS</a>
                    <a className="nav-link text-white text-bold">ATTENDENCE</a>
                    <a className="nav-link text-white text-bold">SALARY</a>
                    
                    <button className="btn_log btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
                </div>
            </nav>  
            <div className="row m-0">
                <div className="col-2 d-flex flex-column border-box bd-highlight p-0 mb-0 bg-light text-center"> 
                    <div className="p-2 border bd-highlight">Add User</div>
                    <div className="p-2 border bd-highlight">Search</div>
                    <div className="p-2 border bd-highlight">Details</div>
                    <button className="addbtn">ADD</button>
                </div>
                <div className="col-10 bg-#1bac91"> 
                    <h5 className="text-center">Personal Details</h5>
                    <br />
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="validationCustom01">First name</label>
                                <input type="text" className="form-control" id="validationCustom01" placeholder="First Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="validationCustom02">Second name</label>
                                <input type="text" className="form-control"id="validationCustom02" placeholder="Second Name" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-2">
                                <label>Age</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group col-md-4">
                                <label>DoB</label>
                                <input type="text" className="form-control" placeholder="DoB" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputState">Deparatment</label>
                                <select id="inputState" className="form-control">
                                    <option selected>choose</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label for="inputAddress">Enter Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Address1" />
                            </div>
                            <div className="col">
                                <label for="inputAddress">Enter Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Address2" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputState">State</label>
                                <select id="inputState" className="form-control">
                                    <option selected>choose</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label >Contact No.</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group col-md-5">
                                <label for="inputEmail4">Enter Email</label>
                                <input type="text" className="form-control" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" />
                            <label className="form-check-label" for="inlineRadio1">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                            <label className="form-check-label" for="inlineRadio2">Female</label>
                        </div>
                        <br />
                        <br />
                        <div className="form-group">
                            <label for="exampleFormControlFile1">Picture</label>
                            <input type="file" className="form-gorup-file" id="exampleFormControlFile1" />
                        </div>
                        </div>
                    </form>   
                </div>
            </div>
        </div>
        );
    }
}

export default Staffdet ;