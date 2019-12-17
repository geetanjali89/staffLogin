import React, { Component } from 'react';
import Leftmenu from './Leftmenu' ;
import './Users.css' ;
import cookies from 'react-cookies' ;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
    autoclose: 5000,
    draggable: true,
});

class User extends Component {
    constructor(){
        super();
        this.state = {
            username: '', 
            email: null,
            password:'',
            firstname: null,
            lastname: '',
            age:'',
            dob:'', 
            department:'', 
            address:'', 
            city:'', 
            state:'', 
            phone:'',
            token:'',
        firstnameError:'',
        emailError:''
          
        };    
    }
    componentDidMount(){
        if(cookies.load('access_token') === undefined) {
            this.props.history.push("/login");
        }
        else{
            this.setState({
                token: cookies.load('access_token')
            })
        }
    }
    successNotify = (msg) => {
        toast.success(msg);
    }
    errorNotify = (msg) => {
        toast.error(msg);
    }

    handleInput = (e) => { 
        this.setState({
            [e.target.name]: e.target.value
        });  
    }
    validateInput = () => {
      const {firstname, email} = this.state
      if (firstname == "" ){
            alert("Please fill FirstName")
            return false
      }else if (email == "") {
            alert("Email invalid")
            return false
      }
      return true
    };

    handleSubmit = (e) => {
        e.preventDefault();

    }
    addinguser = () => {
        let adduser = {
            username: this.state.username,
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            age: this.state.age,
            dob: this.state.dob,
            department: this.state.department,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            phone: this.state.phone
        };
        let token = this.state.token;
        fetch("http://192.168.178.101:3000/v1/users", {
            method: 'POST' ,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(adduser)
        })
        .then((res) => res.json())
        .then((res) => {
            // console.log(res.msg);
            if(res.msg){
                // alert(res.msg);      
                 this.successNotify(`Users add successfully`);    
            }
            else{
                alert(res.error);  
            }              
        })
        .catch((err) => {
            console.log(`Error while adding ${err}`);
            this.errorNotify(`Error while adding users ${err}`);
        })
        .finally()
    }
    render() {
        return(
            <div>
                <Leftmenu />
                <ToastContainer />
            <div className="row entries">
                <div className="col-12 ">
                    <h5 className="text-center">Personal Details</h5>
                    <br />
                <form onSubmit= {this.handleSubmit} >
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="validationCustom01">First name</label>
                            <input type="text" name="firstname"  id="firstname" className="form-control" placeholder="First Name"
                                onkeyup={() => this.validateInput()}
                                onChange={(e) => this.handleInput(e)} /> 
                            <div style={{ fontSize:12, color: "red "}}>
                                {this.state.firstnameError}
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="validationCustom02">Last name</label>
                            <input type="text" id="lastname"className="form-control" placeholder="Last Name" name="lastname"
                                onChange={(e) => this.handleInput(e)} /> 
                        </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-2">
                            <label>Age</label>
                            <input type="text" className="form-control" name="age"
                                onChange={(e) => this.handleInput(e)} /> 
                            </div>
                            <div className="form-group col-md-4">
                            <label>DoB</label>
                            <input type="text" className="form-control" placeholder="DoB" 
                                onChange={(e) => this.handleInput(e)} /> 
                            </div>
                            <div className="form-group col-md-6">
                            <label for="inputState">Deparatment</label>
                            <input type="text" name="department"className="form-control" placeholder="Deparatment" 
                                onChange={(e) => this.handleInput(e)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label for="inputAddress">Enter Address</label>
                                <input type="text" name="address"   id="inputAddress" className="form-control" placeholder="Address1" 
                                   
                                    onChange={(e) => this.handleInput(e)} />
                            </div>
                            <div className="col">
                                <label for="inputAddress">Enter Address</label>
                                <input type="text" name="address" id="inputAddress"className="form-control" placeholder="Address2" 
                                    onChange={(e) => this.handleInput(e)} />
                            </div>
                        </div>
                        <br />
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" id="inputCity" className="form-control" name="city" 
                                    onChange={(e) => this.handleInput(e)} />                             
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputState">State</label>
                                <input type="text" className="form-control" id="inputState"  name="state"
                                    onChange={(e) => this.handleInput(e)} />  
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label >Contact No.</label>
                                <input type="text" name="phone" className="form-control" 
                                    onChange={(e) => this.handleInput(e)} /> 
                            </div>
                            <div className="form-group col-md-5">
                                <label for="inputEmail4">Enter Email</label>
                                <input type="text" id="email" name="email" className="form-control" placeholder="Email" 
                                   onkeyup={() => this.validateInput()}
                                   onChange={(e) => this.handleInput(e)} />
                                <div style={{ fontSize:12, color: "red "}}>
                                    {this.state.emailError}
                                </div>    
                            </div>
                        </div>
                        <button className="btn btn-outline-info my-2 my-sm-0" type="button"
                            onClick ={() => this.addinguser()}
                        >Add</button>
                    </form> 
                </div>
            </div>           
        </div>    
        );
    }
}

export default User;