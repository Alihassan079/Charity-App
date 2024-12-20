import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUserRequest } from '../redux/features/userRequests';

export const ContactForm = () => {
    const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { name, email, subject, message } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formatadata: ',formData);
    dispatch(createUserRequest(formData));
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    };

  return (
    <div className="contact">
      <div className="container">
        <div className="section-header text-center">
          <p>Get In Touch</p>
          <h2>Contact for any query</h2>
        </div>
        <div className="contact-img">
          <img src="contact-1.jpg" alt="Image" />
        </div>
        <div className="contact-form">
          <div id="success"></div>
          <form name="sentMessage" id="contactForm" noValidate>
            <div className="control-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
                value={name}
                onChange={handleChange}
              />
              <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
                required
                value={email}
                onChange={handleChange}
              />
              <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Subject"
                required
                value={subject}
                onChange={handleChange}
              />
              <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
              <textarea
                className="form-control"
                id="message"
                placeholder="Message"
                required
                value={message}
                onChange={handleChange}
              ></textarea>
              <p className="help-block text-danger"></p>
            </div>
            <div>
              <button
                className="btn btn-custom"
                type="submit"
                id="sendMessageButton"
                onClick={handleSubmit}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
