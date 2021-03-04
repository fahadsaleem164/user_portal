import React, { Component } from 'react';
import { Redirect  , BrowserRouter as Router , Route , Link } from "react-router-dom"
import {connect } from 'react-redux'

class RegisterIdea extends Component {
    constructor(props){
        super(props)
       
        if(localStorage.getItem("state_full_lorem_ipsum") == null){
          
              this.state = {
  
                  state_full_lorem_ipsum : false
              
              } 
        } else if(localStorage.getItem("state_full_lorem_ipsum") == 'true') {
             
              this.state = {
                  state_full_lorem_ipsum : true
              }
        }


    }

    render() {
        return (
            <div>
                    {/* First of all check user login or not */}
                    {this.state.state_full_lorem_ipsum == false?
                    <>
                            <Redirect to='/' />
                    </>
                    :null}
                     {this.state.state_full_lorem_ipsum == true?
                        <>
                    <h1>Register an idea</h1>
                    <h1>Register an idea</h1>
                    <h1>Register an idea</h1>
                    <h1>Register an idea</h1>
                    <h1>Register an idea</h1>
                    <h1>Register an idea</h1>
                    <h1>Register an idea</h1>
                    <h1>Register an idea</h1>

</>
                    :null}



                    
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

export default  connect(mapStateToProps)(RegisterIdea);
