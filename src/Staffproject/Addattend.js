import React, { Component } from 'react';
import Attendence from './Attendence';
// import './Leftbar.css' ;
// import Userdetail from './Userdetail';

class Addattend extends Component{
    render(){
        return(  
            <div>
                <Attendence />
                {/* <Userdetail /> */}
            <div className="container py-3 cal">
              
                <form className="form-inline">
                    FROM
                <input type="date" />
                    TO
                <input type="date" />
                </form>
                <br />
                {/* <input type="submit" /> */}
                <button className="btn btn-outline-primary" type="submit">
                    SUBMIT 
                </button>
            </div> 
            </div>
        );
    }
}

export default Addattend;