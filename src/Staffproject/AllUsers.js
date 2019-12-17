import React, { Component } from 'react' ;
import Leftmenu from './Leftmenu';
import cookies from 'react-cookies';

class AllUsers extends Component {
    constructor(){
        super();
        this.state = {
            users: [],
        }
    }
    componentDidMount() {
    let token = cookies.load("access_token")
    fetch("http://192.168.178.101:3000/v1/users",{
        headers: {
        'Authorization' : token
    }
    })
    .then((res) => {
        return res.json();
    })
    .then((res) => {
    console.log(res);
    if(res.length !==0) {
        this.setState({
            users: res,
        });
    }
    })
    .catch((err) => {
        console.log(`Error while login ${err}`);
    })
    }

    addSalary= (user_id) => {
        this.props.history.push('/salary',{user_id: user_id})
    }

    delete_Users= (v) => {
        var users = this.state.users.filter((users) => {
            return users != v
        });
        this.setState({ users : users})
        alert('Are you sure to delete')
    }
    
    update_Users = (user) =>{
        this.props.history.push('/updating',{user: user})
    }
    render(){
    let {users} = this.state;
    return(
        <div>
            <Leftmenu />
            <div className="row entries">
                <div className="col-12 ">
                <h5 className="text-center">All users detail</h5>
            <br />
            <table className="table">
            <thead className="thead-dark">
            <tr>
                <th scope="col">S.No</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
                {users.map((v,i)=> {
                    return(
                     <tr>
                     <th scope="row">{i +1}</th>
                     <td>{v.username}</td>
                     <td>{v.email}</td>
                     <td>{v.address}</td>
                     <td>                  
                         <button className="btn btn-info mr-2 rounded-pill"
                            onClick ={() => this.update_Users(v)}
                            onKeyDown={() => this.validateInput()}>
                              <i className="fas fa-user-edit"></i> Update</button> 

                         <button className="btn btn-danger rounded-pill mr-2" 
                            onClick= {() => this.delete_Users(v)}>
                                <i class="fas fa-trash-alt"></i> Delete</button>

                         <button className="btn btn-success rounded-pill" 
                            onClick= {() => this.addSalary(v.user_id)}>
                                <i class="fas fa-rupee-sign"></i> Salary</button>
                     </td>
                 </tr>
                    )
                })}
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>Jal</td>
                <td>
                    <button className="btn btn-info rounded-pill mr-2">
                        <i className="fas fa-user-edit"></i> Update</button>
                    <button className="btn btn-danger rounded-pill mr-2">
                    <i class="fas fa-trash-alt"></i>Delete</button>
                    <button className="btn btn-success rounded-pill">
                    <i class="fas fa-rupee-sign"></i> Salary</button>
                </td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>Jal</td>
                <td><button  className="btn btn-info mr-2 rounded-pill">
                <i className="fas fa-user-edit"></i> Update</button>
                    <button className="btn btn-danger mr-2 rounded-pill">
                    <i class="fas fa-trash-alt"></i>Delete</button>
                    <button className="btn btn-success rounded-pill">
                        <i class="fas fa-rupee-sign"></i> Salary</button>
                </td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>johnson</td>
                <td>Jal</td>
                <td><button className="btn btn-info mr-2 rounded-pill">
                <i className="fas fa-user-edit"></i> Update</button>
                    <button className="btn btn-danger mr-2 rounded-pill">
                    <i class="fas fa-trash-alt"></i>Delete</button>
                    <button className="btn btn-success rounded-pill">
                    <i class="fas fa-rupee-sign"></i> Salary</button>
                </td>
            </tr>
            </tbody>
            </table>
        </div>
        </div>
        </div>
    )
    }
}

export default AllUsers;