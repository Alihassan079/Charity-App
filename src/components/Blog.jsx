import React from 'react'
import Footer from '../partials/Footer'
import Header from '../partials/Header'

export const Blog = () => {
    return (
        <>
            <Header />

            <div className='flex flex-col min-h-screen overflow-hidden'>

                {/* <!-- Page Header Start --> */}
                <div class="page-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2>From Blog</h2>
                            </div>
                            <div class="col-12">
                                <a href="">Home</a>
                                <a href="">Blog</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Page Header End --> */}


                {/* <!-- Blog Start --> */}
                <div class="blog">
                    <div class="container">
                        <div class="section-header text-center">
                            <p>Our Blog</p>
                            <h2>Latest news & articles directly from our blog</h2>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="blog-item">
                                    <div class="blog-img">
                                        <img src="blog-1.webp" alt="Image" />
                                    </div>
                                    <div class="blog-text">
                                        <h3><a href="#">Success stories</a></h3>
                                        <p>
                                        One success story is water's mission is to bring clean and safe drinking water to people in developing countries its our good achievement. 
                                        </p>
                                    </div>
                                    {/* <div class="blog-meta">
                                        <p><i class="fa fa-user"></i><a href="">Admin</a></p>
                                        <p><i class="fa fa-comments"></i><a href="">15 Comments</a></p>
                                    </div> */}
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="blog-item">
                                    <div class="blog-img">
                                        <img src="blog-2.jpg" alt="Image" />
                                    </div>
                                    <div class="blog-text">
                                        <h3><a href="#">Fundraising ideas</a></h3>
                                        <p>
                                        Hosting events such as charity auctions, benefit concerts, or community carnivals can help to raise funds for the charity.
                                        </p>
                                    </div>
                                   
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="blog-item">
                                    <div class="blog-img">
                                        <img src="blog-3.jpg" alt="Image" />
                                    </div>
                                    <div class="blog-text">
                                        <h3><a href="#">Volunteer opportunities</a></h3>
                                        <p>
                                        Designing a volunteer application form with specific requirements and duties, and posting it on the social media platforms.
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="blog-item">
                                    <div class="blog-img">
                                        <img src="blog-4.jpg" alt="Image" />
                                    </div>
                                    <div class="blog-text">
                                        <h3><a href="#">Industry news and trends </a></h3>
                                        <p>
                                        Attending industry conferences and events to network with other professionals and learn about the latest trends.
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="blog-item">
                                    <div class="blog-img">
                                        <img src="blog-5.jpg" alt="Image" />
                                    </div>
                                    <div class="blog-text">
                                        <h3><a href="#">Donor appreciation</a></h3>
                                        <p>
                                        Regularly sharing updates on how the organization is using the donations.Offering opportunities to get involved
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="blog-item">
                                    <div class="blog-img">
                                        <img src="blog-6.png" alt="Image" />
                                    </div>
                                    <div class="blog-text">
                                        <h3><a href="#"> Educational resources </a></h3>
                                        <p>
                                        These resources may include textbooks, learning materials, scholarships, or funding for educational programs.
                                        </p>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
                {/* <!-- Blog End --> */}


                
            </div>
            <Footer />
        </>

    )
}
