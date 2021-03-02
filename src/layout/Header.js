import React, { Component } from 'react';
import {Redirect ,BrowserRouter as Router , Route ,Link } from 'react-router-dom'




class Header extends Component {
    constructor(props){
        super(props)

        const token = localStorage.getItem("token")
        const role = localStorage.getItem("role")

        let logged_in = true

        if(token==null){
            logged_in = false
        }


        this.state ={
            logged_in,
            role
        }  

    }

    logout = (event) => {

        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("event_token");
        
        this.setState({
            logged_in: false

        })
        

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
                        
                        {/* <ul class="navbar-nav action">
                        <li class="nav-item ml-3">
                             <Link href="#" to={'/contact_us'}  style={{background:"#058283"}}  class="smooth-anchor btn ml-lg-auto primary-button">CONTACT US</Link>
                        </li>
                    </ul> */}
                       

                        

                        <li class="nav-item ml-3">
                             {/* <Link href="#" to={'/user_register'} style={{background:"#058283"}}  class="smooth-anchor btn ml-lg-auto primary-button">Register</Link> */}
                           </li>

                           {this.state.logged_in == false ?
                             <li class="nav-item ml-3">
                                
                             <Link href="#" to={'/login'} style={{background:"#058283"}}  class="smooth-anchor btn ml-lg-auto primary-button">Login</Link>

                              </li>
                            :null}

                            {/* if login as student then this will show */}
                              {this.state.logged_in == true ?
                              <>
                                {this.state.role == 'student' ?
                              
                              <li class="nav-item ml-3">
                             
                                     <li class="nav-item dropdown">
                                                    <a href="#" style={{background:"#058283"}}  class="smooth-anchor btn ml-lg-auto primary-button">My Account<i class="icon-arrow-down"></i></a>
                                                    <ul class="dropdown-menu">
                                                        <li class="nav-item dropdown">
                                                            <Link class="nav-link" to={'/user_profile'}>Edit Profile</Link> 
                                                            <Link class="nav-link" to={'/add_new_team'}>New Team</Link>
                                                            <Link class="nav-link" to={'/register_idea'}>Register an Idea</Link>
                                                            <hr></hr>
                                                            <Link class="nav-link" to={''}  onClick={this.logout}>Logout</Link>   
                                                        </li>
                                                    </ul>
                                                </li>
                              </li>
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

export default Header