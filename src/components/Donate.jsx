import React from 'react'
import Footer from '../partials/Footer'
import Header from '../partials/Header'
import { DonateNow } from '../pages/DonateNow'

export const Donate = () => {
    return (
        <div>
            <Header />
            <div className='flex flex-col min-h-screen overflow-hidden'>

                {/* <!-- Page Header Start --> */}
                <div class="page-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2>Donate Now</h2>
                            </div>
                            <div class="col-12">
                                <a href="">Home</a>
                                <a href="">Donate</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Page Header End --> */}


                {/* <!-- Donate Start --> */}
        <DonateNow/>
                {/* <!-- Donate End --> */}


               
                <Footer />
            </div>
        </div>
    )
}
