import React, { Component } from 'react';
import { Redirect  , BrowserRouter as Router , Route , Link } from "react-router-dom"
import {connect } from 'react-redux'


class Logout extends Component {

  constructor(props){

 

   super(props)

   this.state = {

       login_state : ''
                 
  }
}

    logout = (event) => {

        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("event_token");
        localStorage.removeItem("state_full_lorem_ipsum");

        this.setState({
            logged_in: false,
            login_state:'logout'

        })


        this.props.changeName(false)
        

    }




    render() {

        return (
                <div> {this.state.login_state == 'logout'?
                     <>
                        <Redirect to="/" />
                     </> 
                : null}
                  
                 <Link class="nav-link" to={''}  onClick={this.logout}>Logout</Link> 
                                                               
            </div>
        );
    }
}
const  mapStateToProps = (state) => {
    
    return (
        {
            login_status : state.login_status
        }
    )
  }

  const dispatchToProps = (dispatach) => {

    return (
      {
        changeName: (login_status) => {dispatach({type : 'CHANGE_NAME', payload : login_status})}
      }
    )
  }



export default connect(mapStateToProps, dispatchToProps)(Logout)