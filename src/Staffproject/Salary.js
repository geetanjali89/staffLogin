import React, { Component } from 'react' ;
// import Salaryleft from './Salaryleft' ;
import cookies from 'react-cookies';
import Leftmenu from './Leftmenu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
    autoclose: 5000,
    draggable: true,
});

class Salary extends Component {
    constructor(){
        super();
        this.state = {
            accountnum: '',
            amount: '',
            user_id: '',
            toDate: '',
            fromDate: '',
            token: '', 
            salaries: []
        };
    }
    componentDidMount(){
        let token;
        let user_id
        if(cookies.load('access_token') === undefined) {
            this.props.history.push("/login");
        }
        else{
            token= cookies.load('access_token')
            this.setState({
                token: cookies.load('access_token')
            })
        }
        if(this.props.location.state!==undefined) {
            user_id = this.props.location.state.user_id
            this.setState({
                user_id: this.props.location.state.user_id
            })
            this.getSalaries(token,user_id)
        }
    }
    successNotify = (msg) => {
        toast.success(msg);
    }
    errorNotify = (msg) => {
        toast.error(msg);
    }

    getSalaries = (token, user_id) => {
        fetch(`http://192.168.178.101:3000/v1/salaries?user_id=${user_id}` ,{
            method: 'GET' ,
            headers: {
            'Authorization' : token
           }  
        })
        .then((res) => res.json())
        .then((res) => {  
           if(res.msg===1) {
                this.setState({
                    salaries: res.salaries
                })
           }      
        })
        .catch((err) => {
            console.log(`Error while adding ${err}`);
        })
        .finally()   
    }
    
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    addSalary = () => {
        let salary = {
            account_number: this.state.accountnum,
            amount: this.state.amount,
            user_id: this.state.user_id,
            toDate: this.state.toDate,
            fromDate: this.state.fromDate
        };
        let token = this.state.token;
        fetch("http://192.168.178.101:3000/v1/salaries", {
            method: 'POST' ,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(salary)
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res.msg);
            if(res.msg){
                this.successNotify(`Salary added successfully`);            
            }
            else{
                alert(res.error);
            }              
        })
        .catch((err) => {
            console.log(`Error while adding ${err}`);
             this.errorNotify(`Error while adding salary ${err}`);
        })
        .finally()
        // e.preventDefault();
    }  
    salaryView = () => {
        let token
        fetch("http://192.168.178.101:3000/v1/salaries?user_id=1", {
            method: 'GET',
            headers: {
                'Authorization': token
            }, 
        })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
        console.log(res);
         // this.props.history.push("/salarygenerate")
        })
        .catch((err) => {
            console.log(`Error while login ${err}`);
        })
    }
    
    render() {
        return(
            <div>
                <Leftmenu />
                <div class="row entries">
                    <div className="col-12 ">
                        <h5 className="text-center">Salary</h5>
                        <br />
                    <form className="form">
                        <div className="row">    
                        <div className="col"> 
                            <input type="text" name="accountnum" className="form-control" placeholder="Account Number" 
                            onChange={(e) => this.handleInput(e)} />
                        </div>
                        <div className="col">
                            <input type="text" name="amount" className="form-control" placeholder="Amount" 
                                onChange={(e) => this.handleInput(e)} />
                        </div>
                        </div>
                        <br />
                        <form className="form-inline">
                            <div className="col">
                                FROM
                                <input type="date" name="fromDate" className="form-control"
                                onChange={(e) => this.handleInput(e)}/>
                            </div>
                            <div className="col">  
                               TO
                            <input type="date"  name="toDate" className="form-control"
                                onChange={(e) => this.handleInput(e)}/>
                            </div>
                        </form>
                        <br />
                        <button type="button" className="btn btn-info mr-4"
                            onClick ={() => this.addSalary()}>Submit</button>
                        <button className="btn btn-outline-primary" type="button"
                            onClick = {() => this.salaryView()}>View Salary</button>
                    </form>
                </div>
            </div>
            </div>
        );
    }
}

export default Salary;