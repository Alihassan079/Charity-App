import React from 'react'
import Footer from '../partials/Footer'
import Header from '../partials/Header'
import { ContactForm } from '../partials/ContactForm'

export const Contact = () => {
    return (
        <div>
            <Header />
            <div className='flex flex-col min-h-screen overflow-hidden'>


                {/* <!-- Page Header Start --> */}
                <div class="page-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2>Contact Us</h2>
                            </div>
                            <div class="col-12">
                                <a href="">Home</a>
                                <a href="">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Page Header End --> */}


                {/* <!-- Contact Start --> */}
                <ContactForm/>
                {/* <!-- Contact End --> */}

                <Footer />
            </div>
        </div>
    )
}
