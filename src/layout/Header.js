import React, { Component } from 'react';
import {BrowserRouter as Router , Route ,Link } from 'react-router-dom'

class Header extends Component {
    
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
                                    <Link class="nav-link" to={'/can-and-msf'}>Organizers</Link>
                                    <Link class="nav-link" to={'/sponsors_and_partners'}>Sponsors/Partners</Link>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <Link class="nav-link" to={'/blue_economy'}>Blue Economy</Link>
                            <ul class="dropdown-menu">
                                <li class="nav-item dropdown">
                                <Link class="nav-link" to={'/faqs'}>FAQS</Link>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">Ideas<i class="icon-arrow-down"></i></a>
                            <ul class="dropdown-menu">
                                <li class="nav-item dropdown">
                                    <Link to={'/bestartup'} class="nav-link">Startups</Link>
                                    <Link to={'/smallscale'} class="nav-link">Small Scale</Link>
                                    <Link to={'/medscale'} class="nav-link">Medium Scale</Link>
                                    <Link to={'/largescale'} class="nav-link">Large Scale</Link>
                                </li>
                            </ul>
                        </li>


                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">Tracks</a>
                            <ul class="dropdown-menu">
                                <li class="nav-item dropdown">
                                  
                                    <Link class="nav-link" to={'/incubation'}>Incubation Tracks</Link>   
                                    <Link class="nav-link" to={'/funding'}>Funding Orgnizations</Link>
                                    <Link class="nav-link" to={'/business'}>Business Competition</Link>
                                    <Link class="nav-link" to={'/international'}>International Universities</Link>
                                    
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <Link to={'/bechallenge'} class="nav-link">Challenge 2021</Link>
                        </li>

                        <li class="nav-item dropdown">
                              <Link class="nav-link" to={'/ideathon'}>Ideathon</Link>
                        </li>

                        <li class="nav-item dropdown">
                             <a><Link to={'/resources'} class="nav-link">Resources</Link></a>
                        </li>

                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">News & Events<i class="icon-arrow-down"></i></a>
                            <ul class="dropdown-menu">
                                <li class="nav-item dropdown"> 
                                    <Link class="nav-link" to={'/news'}>News</Link>
                                    <Link class="nav-link" to={'/events'}>Events</Link>   
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item ml-3">
                             <Link href="#" to={'/user_register'} style={{background:"#058283"}}  class="smooth-anchor btn ml-lg-auto primary-button">Register</Link>
                           </li>
                             <li class="nav-item ml-3">
                             <Link href="#" to={'/login'} style={{background:"#058283"}}  class="smooth-anchor btn ml-lg-auto primary-button">Login</Link>

                        </li>

                    
                       
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