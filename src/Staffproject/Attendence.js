import React, { Component } from 'react' ;
import Menumain from './Menumain';
import Navbar from './Navbar';
import './Leftbar.css';
import {Switch, Route, Link} from 'react-router-dom' ;
import Userdetail from './Userdetail';


class Attendence extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            show:false
        };
    }
    handleChange = (e) => {
        this.setState({
           id: e.target.id
        });
    }    
    keyPressed = (e) => {
        if(e.key === "Enter") {
            this.setState({
                id: e.target.id,
                show:true
            });
            console.log('validate');
        }
    } 
    render() {
        console.log("clicked!!!");
        return(
            <div>
                <Navbar />
                <div className="container-fluid p-0"> 
                <div className="leftlist shadow p-3 mb-0">
                <div>
                    <Link to ="/main">
                        <i class="fas fa-home"></i>
                    </Link>
                    <Switch>
                        <Route path="/main" component={Menumain} />
                    </Switch> 
                </div>
                {/* <form > */}
                    <div className="row">
                    <div className="col">
                        <input type="text" className="form-control bg-light" placeholder="ID"
                            onChange= {this.handleChange}
                            onKeyPress={this.keyPressed} 
                            id={this.state.id} />
                            {
                                this.state.show === false ? (null):
                                (
                                   <Userdetail history={this.props.history}/>
                                // <Userdetail />
                                )
                            }
                    <br />
                    </div>
                    </div>
                {/* </form> */}
                </div>
            </div>
            </div>
        );
    }
}       

export default Attendence;