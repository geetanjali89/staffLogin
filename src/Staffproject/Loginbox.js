import React, { Component } from 'react' ;
import './Modbox.css';
import Frontpage from './Frontpage';
import cookies from 'react-cookies' ;
import Menumain from './Menumain';
// import Registerform from './Registerform' ;
import WOW from 'wowjs' ;
import { Link } from 'react-router-dom' ;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
    autoclose: 8000,
    draggable: true,
});

class Loginbox extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }
    componentDidMount(){
        new WOW.WOW().init();
    }
    successNotify = (msg) => {
        toast.success(msg);
    }
    errorNotify = (msg) => {
        toast.error(msg);
    }
    handleClose = () => {       //
        console.log("close")
     }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    login = () => {
        let user = {
            email: this.state.email,
            password: this.state.password
        };
        fetch("http://192.168.178.101:3000/v1/login", {     
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            if(res.token){
                cookies.save('access_token', res.token);
                this.props.history.push("/main");   
                this.successNotify(`Loggedin successfully`);            
            }else{
                if(res.msg === 0){
                    alert("error")
                    this.errorNotify("Provide the input fields properly");
                }
            }
        })
        .catch((err) => {
            this.errorNotify(`Error while fetching users ${err}`);
        })
    }
    render(){
        return(
        <div>
             <Frontpage />
             <ToastContainer />
            <div className="modal-content modbox p-3 wow fadeInDown">
                <div className="member">
                    <i className="fas fa-users"></i>
                    <button type="button" className="close closing" data-dismiss="modal-content" aria-label="Close" 
                        onClick ={() => this.handleClose()}>&times;
                    </button> 
                    <h4>LOGIN</h4>
                </div>
            <div className="Modal-body">
                <label for="exampleInputEmail1">Username or Email ID</label>
                <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupPrepend2">
                    <i className="fas fa-envelope"></i></span>
                </div>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Username/Email ID"
                    name="email"
                        onChange={(e) => this.handleInput(e)} />   
                </div>                         
                <label for="exampleInputPassword1">Password</label>
                <div className="input-group">
                <div className="input-group-prepend">
                   <span className="input-group-text" id="inputGroupPrepend2">
                   <i className="fas fa-lock"></i>
                   </span>
                </div>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                    name="password"
                       onChange={(e) => this.handleInput(e)} />
                </div>
                <br />
                <button type="submit" className="btn btn-block btn-outline-primary" 
                    onClick={() => this.login()} > SIGN IN
                    {/* <Switch>
                        <Route path="/main" component={Menumain} />
                    </Switch> */}
                </button>
            </div>
                <br />
                <p className="text-center">
                    <Link to="/register">Create Account</Link> 
                </p>
            </div>
        </div>
        );
    }
}

export default Loginbox;