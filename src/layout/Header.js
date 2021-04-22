import React, { Component } from 'react';
import {Redirect ,BrowserRouter as Router , Route ,Link } from 'react-router-dom'
import Logout from '../components/Logout'
import {connect } from 'react-redux'

class Header extends Component {
    
    constructor(props){

        console.log(props)
       
        super(props)
        const token = localStorage.getItem("token")
        const role = localStorage.getItem("role")

        if(localStorage.getItem("state_full_lorem_ipsum") == null){
        
            this.state = {

                state_full_lorem_ipsum : false,
                role
            } 
      } else if(localStorage.getItem("state_full_lorem_ipsum") == 'true') {
           
            this.state = {
                state_full_lorem_ipsum : 'true',
                role 
            }
      }


    }




    
    render() {

        return (

            <header id="header">
                <nav class="navbar navbar-expand navbar-fixed" style={{background:'black'}}>
               
                <div class="container">

                    <ul class="navbar-nav items">
                        <li class="nav-item dropdown">
                            <a  class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/">HOME</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">About</a>
                            <ul class="dropdown-menu">
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/can-and-msf/">Organizers</a>
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/sponsors_and_partners/">Sponsors/Partners</a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <Link class="nav-link" to={'/blue_economy'}>Blue Economy</Link>
                            <ul class="dropdown-menu">
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/blue_economy/" > Thematic Area</a>
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/faqs" > FAQ </a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">Ideas<i class="icon-arrow-down"></i></a>
                            <ul class="dropdown-menu">
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/bestartup/">Startups</a>
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/smallscale/">Small Scale</a>
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/medscale/">Medium Scale</a>
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/largescale/">Large Scale</a>
                                </li>
                            </ul>
                        </li>


                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">Tracks</a>
                            <ul class="dropdown-menu">
                                <li class="nav-item dropdown">
                                  
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/incubation/">Incubation Tracks</a>
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/funding/">Funding Orgnizations</a>
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/business/">Business Competition</a>
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/international/">International Universities</a>
                                    
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/bechallenge/"> Challenge 2021 </a>
                        </li>

                        <li class="nav-item dropdown">
                              <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/ideathon/"> Ideathon</a>
                        </li>

                        <li class="nav-item dropdown">
                             <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/resources/"> Resources </a>
                        </li>

                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">News & Events<i class="icon-arrow-down"></i></a>
                            <ul class="dropdown-menu">
                                <li class="nav-item dropdown"> 
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/news/"> News</a>
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/events/"> Events </a>
                                </li>
                            </ul>
                        </li>
                        
                        

                        {/* Login button will display  */}

                           {this.state.state_full_lorem_ipsum == false ?
                             <li class="nav-item ml-3">
                                
                             <Link href="#" to={'/login?event=eyJpdiI6IlR3WUpTNmRSeEtjUGhsN1lFUWJWMFE9PSIsInZhbHVlIjoiTm1qZXJPaXFmS1Urakl5SjF3SFNpUT09IiwibWFjIjoiYzExZDY1MjljMmQyMmQzZTE4Y2M4Mzk3YTlmYTU4MGIyYmYxYmZiMTQ0ODFhNGQ2NmE0ZDE2OTU2YWFhYjc5NCJ9'} style={{background:"#058283"}}  class="smooth-anchor btn ml-lg-auto primary-button">Login</Link>

                              </li>
                            :null}

                            {/* if login as student then this will show */}

                              {this.state.state_full_lorem_ipsum == 'true' ?
                              <>
                                {this.state.role == 'student' ?
                               
                             
                                        <li class="nav-item ml-3">
                                                <li class="nav-item dropdown">
                                                                <a href="#" style={{background:"#058283"}}  class="smooth-anchor btn ml-lg-auto primary-button">My Account<i class="icon-arrow-down"></i></a>
                                                                <ul class="dropdown-menu">
                                                                    <li class="nav-item dropdown">
                                                                        <Link class="nav-link" to={'/user_profile'}>Edit Profile</Link> 
                                                                        {/* <Link class="nav-link" to={'/add_new_team'}>New Team</Link> */}
                                                                        <Link class="nav-link" to={'/add_new_idea'}>Register an Idea</Link>
                                                                        <Link class="nav-link" to={'/get_idea'}>Idea</Link>
                                                                        <Link class="nav-link" to={'/edit_idea'}>Edit Idea</Link>
                                                                        <Link class="nav-link" to={'invitation'}>Send Invitation</Link>
                                                                        <Link class="nav-link" to={'accept_invitation'}>Accept Invitation</Link>
                                                                        <hr></hr>
                                                                        <Logout />
                                                                    </li>
                                                                </ul>
                                                            </li>
                                        </li>
                            
                             
                              :null}

                              </>
                              :null}         

                             {/* if login as mentor then this will show */}
                             {this.state.state_full_lorem_ipsum == 'true' ?
                              <>
                                {this.state.role == 'mentor' ?
                                <>
                            
                             
                              <li class="nav-item ml-3">
                                     <li class="nav-item dropdown">
                                                    <a href="#" style={{background:"#058283"}}  class="smooth-anchor btn ml-lg-auto primary-button">My Account<i class="icon-arrow-down"></i></a>
                                                    <ul class="dropdown-menu">
                                                        <li class="nav-item dropdown">
                                                            <Link class="nav-link" to={'/mentor_profile'}>Edit Profile</Link> 
                                                            <Link class="nav-link" to={'/add_new_team'}>Evaluate Teams</Link>
                                                            <hr></hr>
                                                            <Logout />
                                                        </li>
                                                    </ul>
                                                </li>
                              </li>
                            
                              </>
                              :null}
                              </>
                              :null}   


                              {this.state.state_full_lorem_ipsum == 'true' ?
                              <>
                                {this.state.role == 'navy_person' ?
                                <>
                            
                             
                              <li class="nav-item ml-3">
                                     <li class="nav-item dropdown">
                                                    <a href="#" style={{background:"#058283"}}  class="smooth-anchor btn ml-lg-auto primary-button">My Account<i class="icon-arrow-down"></i></a>
                                                    <ul class="dropdown-menu">
                                                        <li class="nav-item dropdown">
                                                            <Link class="nav-link" to={'/user_profile'}>Navy Person</Link> 
                                                            <hr></hr>
                                                            <Logout />
                                                        </li>
                                                    </ul>
                                                </li>
                              </li>
                            
                              </>
                              :null}
                              </>
                              :null}               




                    </ul>

                    <ul class="navbar-nav action">
                       
                    </ul>


                </div>
            </nav> 

  </header>

        



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



export default connect(mapStateToProps)(Header)