import React from 'react'
import Footer from '../partials/Footer'
import Header from '../partials/Header'

export const Events = () => {
    return (
        <div>
            <Header />
            <div className='flex flex-col min-h-screen overflow-hidden'>

                {/* <!-- Page Header Start --> */}
                <div class="page-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2>Upcoming Events</h2>
                            </div>
                            <div class="col-12">
                                <a href="">Home</a>
                                <a href="">Events</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Page Header End --> */}


                {/* <!-- Event Start --> */}
                <div class="event">
                    <div class="container">
                        <div class="section-header text-center">
                            <p>Upcoming Events</p>
                            <h2>Be ready for our upcoming charity events</h2>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="event-item">
                                    <img src="event-1.jpg" alt="Image" />
                                    <div class="event-content">
                                        <div class="event-meta">
                                            <p><i class="fa fa-calendar-alt"></i>01-feb-23</p>
                                            <p><i class="far fa-clock"></i>02:00 - 04:00</p>
                                            <p><i class="fa fa-map-marker-alt"></i>jhang</p>
                                        </div>
                                        <div class="event-text">
                                            <h3>Books Distribution</h3>
                                            <p>
                                               In village our team distributing bookds among more than 20 poor childeren. 
                                            </p>
                                            {/* <a class="btn btn-custom" href="">Join Now</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="event-item">
                                    <img src="event-2.jpg" alt="Image" />
                                    <div class="event-content">
                                        <div class="event-meta">
                                            <p><i class="fa fa-calendar-alt"></i>10-Mar-23</p>
                                            <p><i class="far fa-clock"></i>01:00 - 05:00</p>
                                            <p><i class="fa fa-map-marker-alt"></i>Dg.khan</p>
                                        </div>
                                        <div class="event-text">
                                            <h3>Food Distribution</h3>
                                            <p>
                                                our team distribute  food bag monthly among more than 100 families.
                                            </p>
                                            {/* <a class="btn btn-custom" href="">Join Now</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="event-item">
                                    <img src="event-3.webp" alt="Image" />
                                    <div class="event-content">
                                        <div class="event-meta">
                                            <p><i class="fa fa-calendar-alt"></i>20-Mar-23</p>
                                            <p><i class="far fa-clock"></i>12:00 - 03:00</p>
                                            <p><i class="fa fa-map-marker-alt"></i>kasur</p>
                                        </div>
                                        <div class="event-text">
                                            <h3>Distribution of Clothes</h3>
                                            <p>
                                                Our team distributing well clothes to poor childeren and also provide shoes to more than 200 people                                 </p>
                                            {/* <a class="btn btn-custom" href="">Join Now</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="event-item">
                                    <img src="event-4.webp" alt="Image" />
                                    <div class="event-content">
                                        <div class="event-meta">
                                            <p><i class="fa fa-calendar-alt"></i>o5-Apr-23</p>
                                            <p><i class="far fa-clock"></i>11:00 - 04:00</p>
                                            <p><i class="fa fa-map-marker-alt"></i>Multan</p>
                                        </div>
                                        <div class="event-text">
                                            <h3>Medical Campus</h3>
                                            <p>
                                                our team conduct weekly medical campus in different villages and provide free medicine and treatment services
                                            </p>
                                            {/* <a class="btn btn-custom" href="">Join Now</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Event End --> */}

                <Footer />
                
            </div>
        </div>
    )
}
