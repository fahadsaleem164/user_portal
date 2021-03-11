import React, { Component } from 'react';
import Header from './Header'
class Page_404 extends Component {
    render() {
        return (
            <>
            <Header/>
            <section id="slider1" class="hero p-0 odd featured">
            <div class="swiper-container no-slider animation slider-h-50 slider-h-auto">
                <div class="swiper-wrapper">

                    <div class="swiper-slide slide-center">
                        <div class="slide-content row text-center">
                            <div class="col-12 mx-auto inner">  
                                <nav data-aos="zoom-out-up" data-aos-delay="800" aria-label="breadcrumb">
                                </nav>
                                <h1 class="mb-0 title effect-static-text">404 Error Page</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
        );
    }
}

export default Page_404;