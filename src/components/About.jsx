import React from 'react'
import Footer from '../partials/Footer'
import Header from '../partials/Header'



export const About = () => {
  return (
    <>
   <Header />
    <div className='flex flex-col min-h-screen overflow-hidden'>
    
        {/* <!-- Page Header Start --> */}
        <div class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>About Us</h2>
                    </div>
                    <div class="col-12">
                    
                        <a href="">Home</a>
                        <a href="">About Us</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Page Header End --> */}
        

        {/* <!-- About Start --> */}
        <div class="about">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="about-img" ></div>
                    </div>
                    <div class="col-lg-6">
                        <div class="section-header">
                            <p>Learn About Us</p>
                            <h2>Worldwide non-profit charity organization</h2>
                        </div>
                        <div class="about-tab">
                            <ul class="nav nav-pills nav-justified">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="pill" href="#tab-content-1">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="pill" href="#tab-content-2">Mission</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="pill" href="#tab-content-3">Vision</a>
                                </li>
                            </ul>

                            <div class="tab-content">
                                <div id="tab-content-1" class="container tab-pane active">
                                Charity Organization is a non-profit dedicated to improving the lives of children living in poverty. Our mission is to provide educational opportunities, healthcare services, and basic necessities to children in need. Through our various programs, we have been able to reach thousands of children and families, providing them with the resources and support they need to thrive.
                                </div>
                                <div id="tab-content-2" class="container tab-pane fade">
                                Our charity organization aims to improve the lives of vulnerable individuals and communities by providing access to basic needs such as food, shelter, healthcare, and education. We strive to empower individuals to lead fulfilling and self-sufficient lives, while also promoting social justice and equality. Through our actions, we hope to create a more just and compassionate society.
                                </div>
                                <div id="tab-content-3" class="container tab-pane fade">
                                "Our vision is to create a world where every person has access to the basic necessities of life, such as food, water, shelter, education, and healthcare, regardless of their social or economic status. We strive to empower individuals and communities to build a better future for themselves and future generations, and to promote equality, justice, and sustainability in all our actions."
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End -->
         */}
        
        {/* <!-- Facts Start --> */}
        {/* <div class="facts" data-parallax="scroll" data-image-src="facts.jpg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="facts-item">
                            <i class="flaticon-home"></i>
                            <div class="facts-text">
                                <h3 class="facts-plus" data-toggle="counter-up">150</h3>
                                <p>Countries</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="facts-item">
                            <i class="flaticon-charity"></i>
                            <div class="facts-text">
                                <h3 class="facts-plus" data-toggle="counter-up">400</h3>
                                <p>Volunteers</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="facts-item">
                            <i class="flaticon-kindness"></i>
                            <div class="facts-text">
                                <h3 class="facts-dollar" data-toggle="counter-up">10000</h3>
                                <p>Our Goal</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="facts-item">
                            <i class="flaticon-donation"></i>
                            <div class="facts-text">
                                <h3 class="facts-dollar" data-toggle="counter-up">5000</h3>
                                <p>Raised</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <!-- Facts End --> */}


        {/* <!-- Team Start --> */}
        <div class="team">
            <div class="container">
                <div class="section-header text-center">
                    <p>Meet Our Team</p>
                    <h2>Awesome guys behind our charity activities</h2>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="team-item">
                            <div class="team-img">
                                <img src="team-1.jpg" alt="Team Image"/>
                            </div>
                            <div class="team-text">
                                <h2>Ali Hassan</h2>
                                <p>Founder & CEO</p>
                                <div class="team-social">
                                    <a href=""><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="team-item">
                            <div class="team-img">
                                <img src="team-2.jpg" alt="Team Image"/>
                            </div>
                            <div class="team-text">
                                <h2>Anus Akhtar</h2>
                                <p>Chef Executive</p>
                                <div class="team-social">
                                    <a href=""><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="team-item">
                            <div class="team-img">
                                <img src="team-3.jpg" alt="Team Image"/>
                            </div>
                            <div class="team-text">
                                <h2>Sohail Raza</h2>
                                <p>Chef Advisor</p>
                                <div class="team-social">
                                    <a href=""><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="team-item">
                            <div class="team-img">
                                <img src="team-4.jpg" alt="Team Image"/>
                            </div>
                            <div class="team-text">
                                <h2>Waheed Raza</h2>
                                <p>Advisor</p>
                                <div class="team-social">
                                    <a href=""><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Team End --> */}
        
        
        {/* <!-- Testimonial Start --> */}
        <div class="testimonial">
            <div class="container">
                <div class="section-header text-center">
                    <p>Testimonial</p>
                    <h2>What people are talking about our charity activities</h2>
                </div>
                <div class="owl-carousel testimonials-carousel">
                    <div class="testimonial-item">
                        <div class="testimonial-profile">
                            <img src="testimonial-1.png" alt="Image"/>
                            <div class="testimonial-name">
                                <h3>Shahzad Anwar</h3>
                                <p>Doctor</p>
                            </div>
                        </div>
                        <div class="testimonial-text">
                            <p>
                            This organization is doing well and help the needy people. This organization provide all the services to needy people.Thank you for your kind gestures.
                            </p>
                        </div>
                    </div>
                    <div class="testimonial-item">
                        <div class="testimonial-profile">
                            <img src="testimonial-2.webp" alt="Image"/>
                            <div class="testimonial-name">
                                <h3>Irfan Taswar</h3>
                                <p>Advocate</p>
                            </div>
                        </div>
                        <div class="testimonial-text">
                            <p>
                            This organization is doing well and help the needy people. This organization provide all the services to needy people.Thank you for your kind gestures.
                            </p>
                        </div>
                    </div>
                    <div class="testimonial-item">
                        <div class="testimonial-profile">
                            <img src="testimonial-3.jpg" alt="Image"/>
                            <div class="testimonial-name">
                                <h3>Aman ullah</h3>
                                <p>Tailor</p>
                            </div>
                        </div>
                        <div class="testimonial-text">
                            <p>
                            This organization is doing well and help the needy people. This organization provide all the services to needy people.Thank you for your kind gestures.
                            </p>
                        </div>
                    </div>
                    <div class="testimonial-item">
                        <div class="testimonial-profile">
                            <img src="testimonial-4.jpg" alt="Image"/>
                            <div class="testimonial-name">
                                <h3>Qaiser Abbas</h3>
                                <p>Police Officer</p>
                            </div>
                        </div>
                        <div class="testimonial-text">
                            <p>
                            This organization is doing well and help the needy people. This organization provide all the services to needy people.Thank you for your kind gestures.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Testimonial End --> */}

        
 
    
    </div>
    <Footer />
    </>
  )
}
