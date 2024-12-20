import React, { useEffect, useState } from 'react';
import Modal from '../utils/Modal';
import { toast } from 'react-toastify';


import HeroImage from '../images/hero-image-01.jpg';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { makePayment } from '../redux/api';
import { ContactForm } from './ContactForm';
import { DonateNow } from '../pages/DonateNow';

function HeroHome() {
    const [videoModalOpen, setVideoModalOpen] = useState(false);

    const dataCarousel = [
        { id: 1, text: "Let's be kind for children", img: 'carousel-1.jpg', paragraph: 'Lorem ipsum' },
        { id: 2, text: "Let's be kind for children", img: 'carousel-2.jpg', paragraph: 'Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat at lectus ' },
        { id: 3, text: "Let's be kind for children", img: 'carousel-3.jpg', paragraph: 'Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat at lectus ' },
        { id: 4, text: "Let's be kind for children", img: 'carousel-4.jpg', paragraph: 'Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat at lectus ' },
    ];
    const callJazzcash =() => {
        axios.post(`https://sandbox.jazzcash.com.pk/ApplicationAPI/API/1.1/accounttransaction/GetBanks`, {
            "pp_RequestId": "ewrlk3",
            "pp_MerchantID": "MC57768",
            "pp_Password": "043vvd3uu5",
            "pp_SecureHash": "AEED6B3FC5F7A939B4B9603651A89948FEAD67ECB91C770F1E1AFD86894830C7"
        }).then(data => {
            console.log('data jazcash', data);
        }).catch(err => {
            console.log('err jazzcasj', err);
        })
    }
    const [showCheckout, setShowCheckout] = useState(false);
    const [donationAmount, setDonationAmount] = useState(100); // State variable to store the selected amount
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleDonateNowClick = () => {
        console.log('donationAmount',donationAmount);
      setShowCheckout(true);
    };

  
    const handlePaymentSuccess = (token) => {
      console.log(token);

      const paymentData = {
        amount: donationAmount * 100, // Use the selected amount
        token: token,
      };
      dispatch(makePayment({ paymentData, navigate, toast }));
    };
  const onchangeHandler = (amount) => {
    setDonationAmount(amount);
  }
    return (
        <>
            {/* <!-- Carousel Start --> */}
            <div class="carousel">
    <div class="owl-carousel">
        <div class="carousel-item">
            <div class="carousel-img">
                <img src="we.jpg" alt="Image" />
            </div>
            <div class="carousel-text">
                <h1>Bringing smiles to millions</h1>
                <p>"Bringing a smile to someone's face is like planting a seed of happiness that can grow and spread to millions."</p>
                <div class="carousel-btn">
                    <Link to="/Donate"><a class="btn btn-custom" href="">Donate Now</a>
                    </Link>
                    <a class="btn btn-custom btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">Watch Video</a>
                </div>
            </div>
        </div>
    </div>
</div>
            {/* </div> */}
            {/* <!-- Carousel End --> */}

            {/* <!-- Video Modal Start--> */}
            <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe src='https://www.youtube.com/embed/JiVg_nkbrg0' class="embed-responsive-item" id="video" allowscriptaccess="always" allow="autoplay"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>

            {/* <!-- Video Modal End --> */}


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
            {/* <!-- About End --> */}


            {/* <!-- Service Start --> */}
            <div class="service">
                <div class="container">
                    <div class="section-header text-center">
                        <p>What We Do?</p>
                        <h2>We believe that we can save more lifes with you</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item">
                                <div class="service-icon">
                                    <i class="flaticon-diet"></i>
                                </div>
                                <div class="service-text">
                                    <h3>Healthy Food</h3>
                                    <p>Our team aims to improve the health and well-being of these individuals, and help them lead more productive and fulfilling lives.   </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item">
                                <div class="service-icon">
                                    <i class="flaticon-water"></i>
                                </div>
                                <div class="service-text">
                                    <h3>Pure Water</h3>
                                    <p>Charity team goal is to provide access to clean and pure water to communities in need.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item">
                                <div class="service-icon">
                                    <i class="flaticon-healthcare"></i>
                                </div>
                                <div class="service-text">
                                    <h3>Health Care</h3>
                                    <p>   We aim to provide free medical checkups, vaccinations, and essential medicines to those in need.   </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item">
                                <div class="service-icon">
                                    <i class="flaticon-education"></i>
                                </div>
                                <div class="service-text">
                                    <h3>Primary Education</h3>
                                    <p> Our team goal is on providing basic necessities such as school supplies, uniforms, and textbooks to underprivileged children.   </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item">
                                <div class="service-icon">
                                    <i class="flaticon-home"></i>
                                </div>
                                <div class="service-text">
                                    <h3>Residence Facilities</h3>
                                    <p>   The charity team's goal for residence facility care may involve improving the quality of life and care for individuals living in long-term care facilities or nursing homes. </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item">
                                <div class="service-icon">
                                    <i class="flaticon-social-care"></i>
                                </div>
                                <div class="service-text">
                                    <h3>Social Care</h3>
                                    <p>  we aim to improve the quality of life for vulnerable populations, including the elderly, disabled, and those experiencing poverty or homelessness in need of social care.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}


           


            {/* <!-- Donate Start --> */}
            <DonateNow/>
          
            {/* <!-- Donate End --> */}


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
                                            In village our team distributing bookds among more than 20 poor childeren.</p>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Event End --> */}


            {/* <!-- Team Start --> */}
            <div class="team">
                <div class="container">
                    <div class="section-header text-center">
                        <p>Meet Our Team</p>
                        <h2>Awesome guys behind our charity activities</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="team-1.jpg" alt="Team Image" />
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
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="team-2.jpg" alt="Team Image" />
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
                        <div class="col-lg-3 col-md-6 col-sm-6 ">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="team-3.jpg" alt="Team Image" />
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
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="team-4.jpg" alt="Team Image" />
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


            {/* <!-- Volunteer Start --> */}
            {/* <div class="volunteer" data-parallax="scroll" data-image-src="volunteer.jpg">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-7">
                            <div class="volunteer-content">
                                <div class="section-header">
                                    <p>Become A Volunteer</p>
                                    <h2>Let’s make a difference in the lives of others</h2>
                                </div>
                                <div class="volunteer-text">
                                    <p>
                                    As you may know, there are many people in our community who could benefit from the support of volunteers like ourselves. Whether it's helping out at a local shelter, tutoring students, or simply lending a listening ear to those in need, there are countless ways we can make a positive impact.

I invite you to join me in becoming a volunteer. Together, we can make a difference in the lives of those around us and build a stronger, more connected community.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="volunteer-form">
                                <form>
                                    <div class="control-group">
                                        <input type="text" class="form-control" placeholder="Name" required="required" />
                                    </div>
                                    <div class="control-group">
                                        <input type="email" class="form-control" placeholder="Email" required="required" />
                                    </div>
                                    <div class="control-group">
                                        <textarea class="form-control" placeholder="Why you want to become a volunteer?" required="required"></textarea>
                                    </div>
                                    <div>
                                        <button class="btn btn-custom" type="submit">Become a volunteer</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- Volunteer End --> */}


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
                                <img src="testimonial-1.png" alt="Image" />
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
                                <img src="testimonial-2.webp" alt="Image" />
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
                                <img src="testimonial-3.jpg" alt="Image" />
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
                                <img src="testimonial-4.jpg" alt="Image" />
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


            {/* <!-- Contact Start --> */}
            <ContactForm/>
            {/* <!-- Contact End --> */}

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
                                    One success story is water's mission is to bring clean and safe drinking water to people in developing countries.
                                    </p>
                                </div>
                               
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
                    </div>
                </div>
            </div>
            {/* <!-- Blog End --> */}

        </>
    );
}

export default HeroHome;
