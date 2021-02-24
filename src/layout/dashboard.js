import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu'
import {BrowserRouter as Router , Route , Link } from 'react-router-dom'
import StudentLogin from './StudentLogin';

class Dashboard extends Component {

    render() {
        return (
            <div>

                    <NavBarMenu/> 
                        <h1 style={{ textAlign: 'center'}}>Main Dashbaord</h1>
                        <h2 style={{ textAlign: 'center'}}>Link will be here click here to register</h2>
                       

                        <Router>
                        <Route path = "/home" component = {StudentLogin} />
                        {/* <Link to="./StudentLogin">Register here</Link> */}
                                 {/* <Route path='./StudentLogin' component={StudentLogin} >Register here</Route> */}
                         </Router>

                        
            </div>
        );
    }
}

export default Dashboard; 