import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-6">
              <div class="footer-contact">
                <h2>Our Head Office</h2>
                <span> <p><i class="fa fa-map-marker-alt"></i>Township, Lahore, Pakistan</p></span>
                <p><span><i class="fa fa-phone-alt"></i>+92 300 1326512</span></p>
                <p><span><i class="fa fa-envelope"></i>alihassan@gmail.com</span></p>
                <div class="footer-social">
                  <a class="btn btn-custom" href="./Home"><i class="fab fa-twitter"></i></a>
                  <a class="btn btn-custom" href="./Home"><i class="fab fa-facebook-f"></i></a>
                  <a class="btn btn-custom" href="./Home"><i class="fab fa-youtube"></i></a>
                  <a class="btn btn-custom" href="./Home"><i class="fab fa-instagram"></i></a>
                  <a class="btn btn-custom" href="./Home"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="footer-link">
                <h2>Popular Links</h2>
                <Link to="/About">About Us</Link>
                <Link to="/Contact">Contact Us</Link>
                {/* <Link to="#">Popular Causes</Link> */}
                <Link to="/Events">Upcoming Events</Link>
                <Link to="/Blog">Latest Blog</Link>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer-link">
                <h2>Useful Links</h2>
                <a href="">Terms of use</a>
                <a href="">Privacy policy</a>
                <a href="">Cookies</a>
                <a href="/Contact">Help</a>
                <a href="">FQAs</a>
              </div>
            </div>
            
          </div>
        </div>
        <div class="container copyright">
          <div class="row">
            <div class="col-md-6">
              <p>&copy; Website Name<span className='name'> Charity Management System</span></p>
            </div>
            <div class="col-md-6">
              <p>Designed By : <span className='name'>Ali Hassan</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
