import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Route ,Link ,Redirect } from 'react-router-dom'  
import { Component } from 'react';
import UserLayout from './layout/UserLayout'
import Home from './components/Home'
import Dashboard from './Dashboard'
import UserRegister from './components/UserRegister'
import UserVerify from './components/UserVerify'
import MentorProfile from './components/MentorProfile'
import MentorRegister from './components/MentorRegistration'
import UserProfile from './components/UserProfile'
import AddNewTeam from './components/student/AddNewTeam'
import RegisterIdea from './components/student/RegisterIdea'
import Login from './components/Login'
import Routes from './Routes'
import {connect } from 'react-redux'




function App(props) {

  return (
     <>

       <Routes></Routes>
      
    </>

      )

}

const mapStateToProps = (state) => {
  return (
      {
        myname : state.name
      }
  )
}

export default connect(mapStateToProps)(App)
