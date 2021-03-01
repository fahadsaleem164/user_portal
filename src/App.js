import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Route ,Link ,Redirect } from 'react-router-dom'  
import { Component } from 'react';



import UserLayout from './layout/UserLayout'
import Home from './components/Home'
import Dashboard from './Dashboard';
import UserRegister from './components/UserRegister'
import UserVerify from './components/UserVerify'
import AddNewTeam from './components/AddNewTeam'
import MentorProfile from './components/MentorProfile'
import Login from './components/Login'
 






const AppRoute = ({component : Component, layout:Layout, ...rest})=>(
  <Route {...rest} render={props=>(
    <Layout><Component {...props}></Component></Layout>
    )}>
    </Route>
    )


function App() {

  return (

           
      <Router>
        <AppRoute exact path='/' layout={UserLayout} component={Dashboard} />
        <AppRoute exact path='/user_register' layout={UserLayout} component={UserRegister} />
        <AppRoute exact path='/verify_code' layout={UserLayout} component={UserVerify} />
        <AppRoute exact path='/login' layout={UserLayout} component={Login} />

        <AppRoute exact path='/new_team' layout={UserLayout} component={AddNewTeam} />
        <AppRoute exact path='/mentor_profile' layout={UserLayout} component={MentorProfile} />
        
        
              </Router>


      )

}

export default App;
