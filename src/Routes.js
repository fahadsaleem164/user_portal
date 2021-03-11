import './App.css';
import {BrowserRouter as Router , Route ,Link ,Redirect ,Switch } from 'react-router-dom'  
import Dashboard from './Dashboard';
import UserRegister from './components/student/UserRegister'
import UserVerify from './components/UserVerify'
import MentorProfile from './components/mentors/MentorProfile'
import MentorRegister from './components/mentors/MentorRegistration'
import UserProfile from './components/student/UserProfile'
import AddNewTeam from './components/student/AddNewTeam'
import MultiFormRegistraion from './components/student/MultiFormRegistraion'
import AddNewIdea from './components/student/AddNewIdea'
import Registration from './components/NavelPerson/Registration'
import NavelProfile from './components/NavelPerson/NavelProfile'
import Login from './components/Login'
import Page404 from './layout/Page_404'
// import PrivateRoute from './layout/PrivateRoute'

function Routes(props) {


  return (
    <>
        <Router> 
            <Switch>
             <Route exact path='/'  component={Dashboard}/>
             <Route exact path='/user_register'  component={UserRegister}/>
             <Route exact path='/mentor_register' component={MentorRegister}/>
             <Route exact path='/navel_register' component={Registration}/>
             <Route exact path='/verify_code' component={UserVerify}/>
             <Route exact path='/login' component={Login}/>
             <Route exact path='/add_new_idea' component={AddNewIdea}/>
             <Route exact path='/add_new_team' component={AddNewTeam}/>
             <Route exact path='/user_profile' component={UserProfile}/>
             <Route exact path='/mentor_profile' component={MentorProfile}/>
             <Route exact path='/navel_profile' component={NavelProfile}/>
             <Route component={Page404}/>
          </Switch>
        </Router>  
    </>

  )

}



export default  Routes;
