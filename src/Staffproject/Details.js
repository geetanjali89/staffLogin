import React, { Component } from 'react';
import Leftmenu from './Leftmenu' ;
import './Users.css' ;
import Searchbutton from './Searchbutton';
import { Route } from 'react-router-dom';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: this.props.num ,
            users: []
        };
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    // searching = () =>  {
    //     let searchuser = {
    //         firstname: this.state.firstname,
    //         lastname: this.state.lastname, 
    //         department: this.state.department,
    //         dob: this.state.dob
    //     };

    // }
    render() {
        console.log(this.props);
        return(
            <div>
                <Leftmenu />
                <div className="row entries">
                <div className="col-12 ">
                    <h5 className="text-center">Search</h5>
                    <br />

                    <input type="text" id="userid" placeholder="User ID" name="user_id" /> 
                    <button className="btn btn-info mr-3">Search</button>  
                <br />
                <br />
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">S.No</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Deparatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>           
                {/* <button className="btn btn-outline-info my-2 my-sm-0" type="submit"
                    onClick={() => this.props.history.push("/details/sbutton")}
                  >Search</button>   
                <br /> 
                </div>  
                <Route path="/details/sbutton" render={(props) =>
                            < Searchbutton {...props} />
                        } /> 
                </div>                */}
            </div>
            </div>
        </div>
        );
    }
}

export default Details;