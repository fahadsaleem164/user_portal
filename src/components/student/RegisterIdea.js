import React, { Component } from 'react';
import { Redirect  , BrowserRouter as Router , Route , Link } from "react-router-dom"
import {connect } from 'react-redux'

class RegisterIdea extends Component {
    constructor(props){
        console.log(props.login_status)

        super(props)


    }

    render() {
        return (
            <div>
                    {/* First of all check user login or not */}
                    {this.props.login_status == false?

                            <Redirect to='/' />
                    :null}

                    <h1>Add New Idea</h1>
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
