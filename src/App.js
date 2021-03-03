import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Route ,Link ,Redirect } from 'react-router-dom'  
import { Component } from 'react';
import UserLayout from './layout/UserLayout'
import Home from './components/Home'
import Dashboard from './Dashboard';
import UserRegister from './components/UserRegister'
import UserVerify from './components/UserVerify'
import MentorProfile from './components/MentorProfile'
import MentorRegister from './components/MentorRegistration'
import UserProfile from './components/UserProfile'
import AddNewTeam from './components/student/AddNewTeam'
import RegisterIdea from './components/student/RegisterIdea'
import Login from './components/Login'
 

// it is used to display layout with diffrent component and layout
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
        <AppRoute exact path='/mentor_register' layout={UserLayout} component={MentorRegister} />
        <AppRoute exact path='/verify_code' layout={UserLayout} component={UserVerify} />
        <AppRoute exact path='/login' layout={UserLayout} component={Login} />
        <AppRoute exact path='/add_new_team' layout={UserLayout} component={AddNewTeam} />
        <AppRoute exact path='/new_team' layout={UserLayout} component={AddNewTeam} />
        <AppRoute exact path='/mentor_profile' layout={UserLayout} component={MentorProfile} />
        <AppRoute exact path='/register_idea' layout={UserLayout} component={RegisterIdea} />
        <AppRoute exact path='/user_profile' layout={UserLayout} component={UserProfile} />  
      </Router>


      )

}

export default App;
