import React, { Component } from 'react';
import {BrowserRouter as Router , Route ,Link } from 'react-router-dom'


class Footer extends Component {
    render() {
        return (
            
                <footer>
                <section id="copyright" class="p-3 odd copyright">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-lg-12 col-md-6 p-3 text-center">
                                <p>Copyright 2012 - 2020 Cambridge Advisors Network | All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </section>

                </footer>
                           
        );
    }
}

export default Footer;