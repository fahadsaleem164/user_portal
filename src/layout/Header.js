import React, { Component } from 'react';
import {Redirect ,BrowserRouter as Router , Route ,Link } from 'react-router-dom'




class Header extends Component {
    constructor(props){
        super(props)

     

        const token = localStorage.getItem("token")

        let loggedIn = true


        if(token==null){

            loggedIn = false

        }


        this.state ={
            loggedIn
        }  

    }


    logout = (event) => {

        localStorage.removeItem("token");
        this.setState({

            loggedIn: false

        })
        

    }


    
    render() {

        return (

           
            <header id="header">
                <nav class="navbar navbar-expand navbar-fixed" style={{background:'black'}}>
               
                <div class="container">

                    <ul class="navbar-nav items">
                        <li class="nav-item dropdown">
                            <a  class="nav-link"><Link to={'/'}>HOME</Link></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">About</a>
                            <ul class="dropdown-menu">
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/can-and-msf/" target="_blank">Organizers</a>
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/sponsors_and_partners/" target="_blank">Sponsors/Partners</a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <Link class="nav-link" to={'/blue_economy'}>Blue Economy</Link>
                            <ul class="dropdown-menu">
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/blue_economy/" target="_blank" > Thematic Area</a>
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/faqs" target="_blank" > FAQ </a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">Ideas<i class="icon-arrow-down"></i></a>
                            <ul class="dropdown-menu">
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/bestartup/" target="_blank">Startups</a>
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/smallscale/" target="_blank">Small Scale</a>
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/medscale/" target="_blank">Medium Scale</a>
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/largescale/" target="_blank">Large Scale</a>
                                </li>
                            </ul>
                        </li>


                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">Tracks</a>
                            <ul class="dropdown-menu">
                                <li class="nav-item dropdown">
                                  
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/incubation/" target="_blank">Incubation Tracks</a>
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/funding/" target="_blank">Funding Orgnizations</a>
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/business/" target="_blank">Business Competition</a>
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/international/" target="_blank">International Universities</a>
                                    
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/bechallenge/" target="_blank"> Challenge 2021 </a>
                        </li>

                        <li class="nav-item dropdown">
                              <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/ideathon/" target="_blank"> Ideathon</a>
                        </li>

                        <li class="nav-item dropdown">
                             <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/resources/" target="_blank"> Resources </a>
                        </li>

                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">News & Events<i class="icon-arrow-down"></i></a>
                            <ul class="dropdown-menu">
                                <li class="nav-item dropdown"> 
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/news/" target="_blank"> News</a>
                                    <a class="nav-link" href="https://jovial-mestorf-f7052e.netlify.app/events/" target="_blank"> Events </a>
                                </li>
                            </ul>
                        </li>

                       

                        

                        <li class="nav-item ml-3">
                             {/* <Link href="#" to={'/user_register'} style={{background:"#058283"}}  class="smooth-anchor btn ml-lg-auto primary-button">Register</Link> */}
                           </li>

                           {this.state.loggedIn == false ?
                             <li class="nav-item ml-3">
                                
                             <Link href="#" to={'/login'} style={{background:"#058283"}}  class="smooth-anchor btn ml-lg-auto primary-button">Login</Link>

                              </li>
                            :null}

                              {this.state.loggedIn == true ?
                              <li class="nav-item ml-3">
                                       {/* <Link href="#" style={{background:"#058283"}}  class="smooth-anchor btn ml-lg-auto primary-button" onClick={this.logout}>Logout</Link> */}
                             
                                     <li class="nav-item dropdown">
                                                    <a href="#" style={{background:"#058283"}}  class="smooth-anchor btn ml-lg-auto primary-button">My Account<i class="icon-arrow-down"></i></a>
                                                    <ul class="dropdown-menu">
                                                        <li class="nav-item dropdown"> 
                                                            <Link class="nav-link" to={''}>Add New Team</Link>
                                                            <Link class="nav-link" to={''}>Add New Idea</Link>
                                                            <hr></hr>
                                                            <Link class="nav-link" to={''}  onClick={this.logout}>Logout</Link>   
                                                        </li>
                                                    </ul>
                                                </li>
                              </li>
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