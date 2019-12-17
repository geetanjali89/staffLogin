import React, { Component } from 'react';
import Leftmenu from './Leftmenu' ;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cookies from 'react-cookies';

toast.configure({
    autoclose: 8000,
    draggable: true,
});

class Updateusers extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '', 
            email: null,
            firstname: null,
            lastname: '',
            age:'',
            dob:'', 
            department:'', 
            address:'', 
            city:'', 
            state:'', 
            phone:'',
            user_id:''
        };
    
    }
    componentDidMount() {
        let token;
        if(cookies.load('access_token') === undefined) {
            this.props.history.push("/login");
        }
        else{
            token= cookies.load('access_token')
            this.setState({
                token: cookies.load('access_token')
            })
        }
        debugger
        if(this.props.location.state!==undefined) {
            let user = this.props.location.state.user
            this.setState({
            username: user.username, 
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            age: user.age,
            dob: user.dob, 
            department: user.department, 
            address: user.address, 
            city: user.city, 
            state: user.state, 
            phone: user.phone,
            user_id:user.user_id
            })
        }
        else{
            this.props.history.push("/allusers");
        }
        }
    successNotify = (msg) => {
        toast.success(msg);
    }
    errorNotify = (msg) => {
        toast.error(msg);
    }
    editing_Done= () => {
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
        let id= this.state.user_id
        fetch(`http://192.168.178.101:3000/v1/users/${id}`, {
            method: 'PUT' ,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(adduser)
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res.msg);
            if(res.msg){
                alert(res.msg);      
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
         
    deleteUser =() => {
        alert('Are you sure to delete')
        this.props.history.push('/allusers')
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }); 
    }
    render() {
        return(
            <div>
                <Leftmenu />
                <ToastContainer /> 
                <div class="row entries">
                <div className="col-12 ">
                    <h5 className="text-center">Salary</h5>
                <br />
                <form onSubmit= {this.handleSubmit} >
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="validationCustom01">First name</label>
                            <input type="text" name="firstname"  id="firstname" className="form-control" placeholder="First Name"
                                onkeyup={() => this.validateInput()}
                                onChange={(e) => this.handleInput(e)}
                                value = {this.state.firstname} /> 
                        </div>
                        <div className="form-group col-md-6">
                            <label for="validationCustom02">Last name</label>
                            <input type="text" id="lastname"className="form-control" placeholder="Last Name" name="lastname"
                                onChange={(e) => this.handleInput(e)}
                                value = {this.state.lastname} /> 
                        </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-2">
                            <label>Age</label>
                            <input type="text" className="form-control" name="age"
                                onChange={(e) => this.handleInput(e)}
                                value = {this.state.age} /> 
                            </div>
                            <div className="form-group col-md-4">
                            <label>DoB</label>
                            <input type="text" className="form-control" placeholder="DoB" 
                                onChange={(e) => this.handleInput(e)} 
                                value = {this.state.dob}/> 
                            </div>
                            <div className="form-group col-md-6">
                            <label for="inputState">Deparatment</label>
                            <input type="text" name="department"className="form-control" placeholder="Deparatment" 
                                onChange={(e) => this.handleInput(e)}
                                value = {this.state.deparatment} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label for="inputAddress">Enter Address</label>
                                <input type="text" name="address"   id="inputAddress" className="form-control" placeholder="Address1" 
                                    value = {this.state.address}
                                    onChange={(e) => this.handleInput(e)} />
                            </div>
                            <div className="col">
                                <label for="inputAddress">Enter Address</label>
                                <input type="text" name="address" id="inputAddress"className="form-control" placeholder="Address2" 
                                    onChange={(e) => this.handleInput(e)} 
                                    value = {this.state.address}/>
                            </div>
                        </div>
                        <br />
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" id="inputCity" className="form-control" name="city" 
                                    onChange={(e) => this.handleInput(e)} 
                                    value = {this.state.city}/>                             
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputState">State</label>
                                <input type="text" className="form-control" id="inputState"  name="state"
                                    onChange={(e) => this.handleInput(e)} 
                                    value = {this.state.state}/>  
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label >Contact No.</label>
                                <input type="text" name="phone" className="form-control" 
                                    onChange={(e) => this.handleInput(e)} 
                                    value = {this.state.phone}/> 
                            </div>
                            <div className="form-group col-md-5">
                                <label for="inputEmail4">Enter Email</label>
                                <input type="text" id="email" name="email" className="form-control" placeholder="Email" 
                                   onkeyup={() => this.validateInput()}
                                   onChange={(e) => this.handleInput(e)} 
                                   value = {this.state.email}/>   
                            </div>
                        </div>
                        {/* <button className="btn btn-outline-info my-2 my-sm-0" type="button"
                            onClick ={() => this.addinguser()}
                            >Add</button> */}
                        <button className="btn btn-success mr-2 rounded-pill"  name="user"
                            onClick ={() => this.editing_Done()}
                        >Save</button>
                        <button className="btn btn-danger rounded-pill"
                            onClick ={() => this.deleteUser()}>Cancel</button>
                </form>  
            </div>
        </div>
        </div>
        )
    }
}   

export default Updateusers;